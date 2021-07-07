import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLoginRegister } from "../LoginRegister/LoginRegisterContext";
import { Redirect, useHistory } from "react-router-dom";
import { Table } from "antd";
import { nanoid } from "nanoid";

const fetchListUsers = async (key) => {
  const res = await fetch(
    `https://reqres.in/api/users?page=${key.queryKey[1]}`
  );
  return res.json();
};

export default function ListUsers() {
  const { userToken } = useLoginRegister();
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["listUsers", page], fetchListUsers, {
    keepPreviousData: true,
  });

  const history = useHistory();

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => {
        return (
          <>
            <img src={`${avatar}`} alt={avatar} />
          </>
        );
      },
    },
    {
      title: "First name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  let updateData;

  if (status === "success") {
    updateData = data.data.map((item) => {
      return {
        id: item.id,
        avatar: item.avatar,
        email: item.email,
        first_name: item.first_name,
        last_name: item.last_name,
        key: nanoid(),
      };
    });
  }

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Пользователи</h1>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <Table
            columns={columns}
            dataSource={updateData}
            pagination={false}
            onRow={(record) => {
              return {
                onClick: (event) => {
                  return history.push(`/list-users/user-${record.id}`);
                },
              };
            }}
          />
          {data.page === 1 && (
            <div className="pagination-list-users">
              <div className="page-list-users">{data.page}</div>
              <div
                className="up-list-users"
                onClick={() => {
                  setPage((data.page += 1));
                  history.push(`/list-users?page=${data.page}`);
                }}
              >
                +
              </div>
            </div>
          )}
          {data.page === data.total_pages && (
            <div className="pagination-list-users">
              <div
                className="down-list-users"
                onClick={() => {
                  setPage((data.page -= 1));
                  if (data.page === 1) {
                    history.push(`/list-users`);
                  } else {
                    history.push(`/list-users?page=${data.page}`);
                  }
                }}
              >
                -
              </div>
              <div className="page-list-users">{data.page}</div>
            </div>
          )}
        </>
      )}
    </>
  );
}
