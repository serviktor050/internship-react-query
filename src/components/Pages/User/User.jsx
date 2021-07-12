import React from "react";
import { useQuery } from "react-query";
import { useLoginRegister } from "../LoginRegister/LoginRegisterContext";
import { Redirect, useHistory } from "react-router-dom";

const fetchUser = async (key) => {
  const res = await fetch(`https://reqres.in/api/users?id=${key.queryKey[1]}`);
  return res.json();
};

export default function User(props) {
  let id = Number(props.match.params.id);

  const { userToken } = useLoginRegister();
  const { data, status } = useQuery(["user", id], fetchUser);
  const history = useHistory();

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <h1>
            {`${data.data.first_name}`}
            {` ${data.data.last_name}`}
          </h1>
          <div className="user-card">
            <div className="user-image">
              <img
                src={`${data.data.avatar}`}
                alt={`${data.data.first_name} ${data.data.last_name}`}
              />
            </div>
            <div className="user-info">
              <div className="user-info-name">
                <p>Name:</p>
                {` ${data.data.first_name}`}
                {` ${data.data.last_name}`}
              </div>
              <div className="user-info-email">
                <p>e-mail:</p> {` ${data.data.email}`}
              </div>
            </div>
          </div>
          <div
            className="back-button"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </div>
        </>
      )}
    </>
  );
}
