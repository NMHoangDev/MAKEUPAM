import React from "react";
import classnames from "classnames/bind";
import styles from "./GlobalStyle.module.scss";
const cx = classnames.bind(styles);

function GlobalStyle({ children }) {
  return <div>{children}</div>;
}

export default GlobalStyle;
