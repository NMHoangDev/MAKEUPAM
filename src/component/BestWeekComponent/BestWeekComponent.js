import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./BestWeekComponent.module.scss";

const cx = classnames.bind(styles);

function BestWeekComponent() {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h1>BEST WEEK</h1>
        <h1>OFFERS</h1>
        <div className={cx("type_Btn")}>
          <span
            className={1 === tabIndex ? cx("type-Btn_active") : cx("type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(1);
            }}
          >
            MAKEUP
          </span>
          <span
            className={2 === tabIndex ? cx("type-Btn_active") : cx("type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(2);
            }}
          >
            SKINCARE
          </span>
          <span
            className={3 === tabIndex ? cx("type-Btn_active") : cx("type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(3);
            }}
          >
            FRAGRANCE
          </span>
          <span
            className={cx(tabIndex === 4 ? "type-Btn_active" : "type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(4);
            }}
          >
            HAIR HEALTH
          </span>
        </div>
        <div className={cx("best-week-product")}>
          <div className={cx("product_best-component")}>
            <div className="product_best">
              <div className={cx("img")}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestWeekComponent;
