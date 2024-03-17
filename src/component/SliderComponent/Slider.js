import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./Slider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

function Slider() {
  const [isHovered, setIsHovered] = useState(false);
  const [tab, setTab] = useState(1);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseClick = (e) => {
    e.preventDefault();
    if (tab === 1) {
      setTab(2);
    } else {
      setTab(1);
    }
  };
  return (
    <div className={cx("wrapper")}>
      {isHovered && (
        <div>
          <button
            className={cx("left-Btn")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className={cx("right-Btn")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
      {tab === 1 && (
        <div
          className={cx("main-slider-1")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={cx("main-element")}>
            <h1 className={cx("title")}>COLLECTION</h1>
            <h1 className={cx("sub-title")}>
              LEARN MAKE UP<br></br> FROM NOTHING
            </h1>

            <button className={cx("explore-Btn")}>EXPLORE NOW</button>
          </div>
        </div>
      )}
      {tab === 2 && (
        <div
          className={cx("main-slider-2")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={cx("main-element")}>
            <h1 className={cx("title")}>COLLECTION</h1>
            <h1 className={cx("sub-title")}>
              BECAME TO DOYIN<br></br> FROM NOTHING
            </h1>

            <button className={cx("explore-Btn")}>EXPLORE NOW</button>
          </div>
        </div>
      )}

      {/* Slider 2 */}
    </div>
  );
}
export default Slider;
