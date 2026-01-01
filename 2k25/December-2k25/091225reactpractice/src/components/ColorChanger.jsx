import React, { useState } from "react";
import styles from "./ColorChanger.module.css";
const ColorChanger = () => {
  const [color, setColor] = useState("");
  function handleClick() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${red},${green},${blue})`);
  }
  return (
    <div className={styles.main}>
      <div
        className={styles.colorbox}
        style={{
          backgroundColor: color,
        }}
      ></div>
      <br />
      <button className={styles.colorbtn} onClick={handleClick}>
        click to change color
      </button>
    </div>
  );
};

export default ColorChanger;
