import React from "react";
import styles from "./Button.module.css";

const Button = ({ click, start, log, reset, showRules }) => {
  return (
    <>
      <div className={styles.text}>
        {start ? (
          <button onClick={click}>{start}</button>
        ) : (
          <button onClick={click}>{log}</button>
        )}
      </div>
    </>
  );
};

export default Button;
