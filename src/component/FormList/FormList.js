import React from "react";
import classnames from "classnames/bind";
import styles from "./FormList.module.scss";

const cx = classnames.bind(styles);

function FormList() {
  return (
    <div className={cx("form-list")}>
      <button>Make up dự tiệc</button>
      <button>Make up cô dâu</button>
      <button>Make up hằng ngày</button>
    </div>
  );
}

export default FormList;
