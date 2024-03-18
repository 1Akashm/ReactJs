import React from "react";
import styles from "./Button.module.css";

// const Button = (props) => {
//   // destructuring
//   //     const {isOutline,icon,text} =props;

//   return (
//     <div>
//       <button
//         className={props.isOutline ? styles.secondary_btn : styles.primary_btn}
//       >
//         {props.icon}
//         {props.text}
//       </button>
//     </div>
//   );
// };

// directly destructing props values without using props.isOutline
const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className={isOutline ? styles.secondary_btn : styles.primary_btn}
      >
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
