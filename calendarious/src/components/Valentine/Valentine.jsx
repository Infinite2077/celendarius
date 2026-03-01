import React, { useEffect, useState, useRef } from "react";
import style from "./Valentine.module.scss";

export default function Valentine() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [hearts, setHearts] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setHearts(Math.floor(message.length / 10));
  }, [message]);

  return (
    <div className={style.wrapper}>
      <div className={style.backgroundDecor}></div>

      <input
        type="text"
        ref={inputRef}
        placeholder="Ім'я..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Повідомлення</label>

      <textarea
        placeholder="Напиши щось романтичне..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {name && (
        <div className={style.valentinka}>
          <h1>{name}</h1>
          <p>{message}</p>
          <p className={style.hearts}>{"❤💙".repeat(hearts)}</p>
        </div>
      )}
    </div>
  );
}
