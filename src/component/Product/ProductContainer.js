import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames/bind";
import styles from "./ProductContainer.module.scss";
import video from "../../video/video3.mp4";
import Product from "./Product.js";
import { useAppContext } from "../../context/appContext.js";

const cx = classnames.bind(styles);

function ProductContainer({ title }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const { showProductComponent, hideProductComponent, showComponent } =
    useAppContext();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseView = (e) => {
    e.preventDefault();
    showProductComponent();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseClose = (e) => {
    e.preventDefault();
    hideProductComponent();
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <div
          className={cx("video")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video src={video} controls loop autoPlay>
            {title}
          </video>
          {isHovered && (
            <div className={cx("btn")}>
              <button
                className={cx("view-Btn")}
                onClick={(e) => {
                  handleMouseView(e);
                }}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button className={cx("like-Btn")}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          )}
        </div>
      </div>
      {showComponent && (
        <div className={cx("wrapper-productInVideo")}>
          <div className={cx("product-in-vid")}>
            <h1 className={cx("title")}>ALL PRODUCTS IN THE VIDEO</h1>
            <div className={cx("product")}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
            <button
              className={cx("close-Btn")}
              onClick={(e) => {
                handleMouseClose(e);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductContainer;
