import React from "react";
import classnames from "classnames/bind";
import styles from "./SignInPage.module.scss";
import background from "../../static/backgroundRegister.png";
import backgroundForm from "../../static/backgroundSignIn.png";

const cx = classnames.bind(styles);

function SignInPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("slider")}>
        <div></div>
      </div>
      <div className={cx("form-login")}>
        <h1></h1>
      </div>
    </div>
  );
}

export default SignInPage;
