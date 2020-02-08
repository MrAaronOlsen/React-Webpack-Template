import React, { Component} from "react";

import styles from "./main.mod.scss";

export default function Main(props) {

  return(
      <div id='main' className={styles.wrapper}>
        Hello World!
      </div>
  );
}