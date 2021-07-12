import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useLoginRegister } from "../LoginRegister/LoginRegisterContext";

export default function Timer() {
  const { userToken } = useLoginRegister();

  const [changeTime, setChangeTime] = useState(""); //Изменение значения времени в инпуте
  const [timer, setTimer] = useState(""); //Изменение значения времени таймере
  const [btnStatus, setBtnStatus] = useState(false); //Фиксация значения положения кнопок Старт/Пауза

  const circle = useRef(); //Создание окружности таймера

  let radius;
  let circumference;

  if (circle.current !== undefined) {
    radius = circle.current.r.baseVal.value;
    circumference = 2 * Math.PI * radius;
    circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
  }

  useEffect(() => {
    const setProgress = (seconds) => {
      circle.current.style.strokeDashoffset =
        circumference - (seconds / 60) * circumference;
      circle.current.style.stroke = "aqua";
    };

    if (btnStatus) {
      if (timer !== 0) {
        setTimeout(() => {
          setTimer(timer - 1);
          setProgress(timer - 1);
        }, 1000);
      } else {
        setBtnStatus(false);
        circle.current.style.strokeDashoffset = circumference;
      }
    }
  }, [timer, btnStatus, circumference]);

  const handleChange = (evt) => {
    setChangeTime(Number(evt.target.value));
  };

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Таймер</h1>
      <div className="timer">
        <p>Установите время:</p>
        <div className="timer-input">
          <input
            type="text"
            onChange={handleChange}
            value={changeTime}
            placeholder="На сколько секунд?"
          />
          {!timer && (
            <button
              onClick={() => {
                setTimer(changeTime);
                circle.current.style.strokeDashoffset =
                  circumference - (changeTime / 60) * circumference;
                setChangeTime("");
              }}
            >
              Установить
            </button>
          )}
          {!btnStatus && timer !== "" && timer !== 0 && (
            <button onClick={() => setBtnStatus((prev) => !prev)}>Cтарт</button>
          )}
          {btnStatus && timer !== 0 && (
            <button onClick={() => setBtnStatus((prev) => !prev)}>Пауза</button>
          )}
        </div>
        {timer === 0 && (
          <div className="timer-message">
            <p>Время вышло!</p>
          </div>
        )}
        <div className="timer-value-and-progress">
          {timer !== 0 && <div className="timer-value">{timer}</div>}
          <svg className="progress-ring" width="160" height="160">
            <circle
              className="progress-ring__circle"
              stroke="aqua"
              strokeWidth="12"
              cx="80"
              cy="80"
              r="70"
              fill="transparent"
              ref={circle}
            />
          </svg>
          {timer !== 0 && (
            <svg className="progress-ring-shadow" width="160" height="160">
              <circle
                className="progress-ring-shadow__circle"
                stroke="red"
                strokeWidth="11"
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
