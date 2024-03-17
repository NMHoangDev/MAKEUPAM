import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import classnames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classnames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("person")}>
        <button className={cx("title")}>ABOUT US</button>
        <button className={cx("title")}>OUR TEAM</button>
        <button className={cx("title")}>FAQ</button>
        <button className={cx("title")}>CONTACT</button>
      </div>
      <div className={cx("contact_Component")}>
        <div className={cx("contact")}>
          <div className={cx("phone_contact")}>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <h5>+84 702270434</h5>
          </div>
          <div className={cx("email_contact")}>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <h5>lenhuquynh18432@gmail.com</h5>
          </div>
          <div className={cx("_contact")}>
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            <h5>Mon-Fri: 10:00 - 18:00</h5>
          </div>
        </div>
        <div className={cx("social-contact")}>
          <div className={cx("logo")}></div>
          <div className={cx("wrapper-social-Btn")}>
            <a href="https://www.facebook.com/LnQ033">
              <button className={cx("social-Btn")}>
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </a>
            <a href="https://www.instagram.com/ln.q.3?fbclid=IwAR3MeTpBU885cHTlWHTdzwdRsKfIVLjZ6oTtHbfGPHa-1xG9CyqjvNXajSY">
              <button className={cx("social-Btn")}>
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </a>
            <a href="https://www.tiktok.com/@lnq.3?lang=vi-VN">
              <button className={cx("social-Btn")}>
                <FontAwesomeIcon icon={faTiktok} />
              </button>
            </a>
          </div>
        </div>
        <div className={cx("pargh")}>
          <p>
            Our formulas are made with natural, organic, and cruelty-free
            ingredients that are gentle, effective, and good for you and the
            environment.
          </p>
          <button className={cx("read-Btn")}>EXPLORE NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
