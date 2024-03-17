import React, { useState } from "react";
import { useSpring } from "@react-spring/web";
import classnames from "classnames/bind";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

function Navigation() {
  return (
    <div className={cx("wrapper")}>
      <Link to="/">
        <div className={cx("logo")}></div>
      </Link>
      <div className={cx("navigate-Btn")}>
        <Link to="/">
          <button className={cx("home-btn")}>TRANG CHỦ</button>
        </Link>
        <button className={cx("shop-btn")}>CỬA HÀNG</button>
        <button className={cx("list-btn")}>DANH MỤC</button>
        <button className={cx("feedback-btn")}>FEEDBACK</button>
        <button className={cx("contact-btn")}>LIÊN HỆ</button>
      </div>
      <div className={cx("sub-navigate-Btn")}>
        <button className={cx("search-Btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className={cx("user-Btn")}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className={cx("heart-Btn")}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className={cx("cart-Btn")}>
          <FontAwesomeIcon icon={faBagShopping} />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
