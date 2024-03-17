import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./CategoryBride.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

function CategoryBride({ path }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-slider")}>
        <div className={cx("main-element")}>
          <h1 className={cx("title")}>COLLECTION</h1>
          <h1 className={cx("sub-title")}>
            LEARN MAKE UP<br></br> BRIDE STYLES
          </h1>

          <button className={cx("explore-Btn")}>EXPLORE </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryBride;
