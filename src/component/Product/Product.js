import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classnames from "classnames/bind";
import styles from "./Product.module.scss";
const cx = classnames.bind(styles);

function Product() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <div className={cx("product-img")}></div>
        <h1 className={cx("product-name")}>AIRBRUSH MATTE</h1>
        <h5 className={cx("product-desc")}>
          Skin-perfecting bronzed filter for the face
        </h5>
        <button className={cx("view-product")}>Xem sản phẩm</button>
      </div>
      <span className={cx("type")}>FEATURED</span>
    </div>
  );
}

export default Product;
