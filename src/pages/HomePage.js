import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./HomePage.module.scss";
import Navigation from "../component/Navigation/Navigation.js";
import Slider from "../component/SliderComponent/Slider.js";
import Category from "../component/Category/Category.js";
import CategoryBride from "../component/Category/CategoryBride.js";
import ProductContainer from "../component/Product/ProductContainer.js";
import BestWeekComponent from "../component/BestWeekComponent/BestWeekComponent.js";
import Footer from "../component/Footer/Footer.js";

const cx = classnames.bind(styles);

function HomePage() {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navigation")}>
        <Navigation />
      </div>
      <div className={cx("slider-page")}>
        <Slider />
      </div>
      <div className={cx("category")}>
        <Category />
        <CategoryBride />
      </div>
      <div className={cx("product")}>
        <div className={cx("title")}>
          <span
            className={1 === tabIndex ? cx("type-Btn_active") : cx("type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(1);
            }}
          >
            FEATURED
          </span>
          <span
            className={2 === tabIndex ? cx("type-Btn_active") : cx("type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(2);
            }}
          >
            POPULAR
          </span>
          <span
            className={3 === tabIndex ? cx("type-Btn_active") : cx("type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(3);
            }}
          >
            ON A SALE
          </span>
          <span
            className={cx(tabIndex === 4 ? "type-Btn_active" : "type-Btn")}
            onClick={(e) => {
              e.preventDefault();
              setTabIndex(4);
            }}
          >
            NEWEST
          </span>
        </div>
        <div className={cx("wrapper-product-Container")}>
          <div className={cx("product-Container")}>
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
          </div>
        </div>
        <button className={cx("btn-view-all")}>VIEW ALL FEATURED</button>
      </div>
      {/* <div className={cx("best-week")}>
        <BestWeekComponent />
      </div> */}
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
