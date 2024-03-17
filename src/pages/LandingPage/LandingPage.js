import React from "react";
import classnames from "classnames/bind";
import styles from "./LandingPage.module.scss";
import background from "../../static/backgroundLandingPage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate } from "react-router-dom";
const cx = classnames.bind(styles);

function LandingPage() {
  const handleClickSignUp = () => {
    <Navigate to="/sign-up" />;
  };
  const handleClickSignIn = () => {
    <Navigate to="/sign-in" />;
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("background")}>
        <img src={background} alt="BACKGROUND" />
      </div>
      <div className={cx("btn")}>
        <Link to="/sign-up">
          <button className={cx("btn-sign-up")}>Sign Up</button>
        </Link>
        <Link to="/sign-in">
          <button className={cx("btn-sign-in")} onClick={handleClickSignIn}>
            Sign In
          </button>
        </Link>
      </div>
      <div className={cx("footer")}>
        <div className={cx("instagram")}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className={cx("facebook")}>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className={cx("tiktok")}>
          <FontAwesomeIcon icon={faTiktok} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
