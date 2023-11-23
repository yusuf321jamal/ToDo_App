import React from "react";

import styles from "./Button.module.css"; //to use css modules write import in this way
//this is the process to use modules for css and modules generates a unique class name which does not gets spilled over other components...this is the best way to use 

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
