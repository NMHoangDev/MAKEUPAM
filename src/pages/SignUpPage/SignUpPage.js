import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./SignUpPage.module.scss";
import background from "../../static/backgroundRegister.png";
import backgroundForm from "../../static/backgroundForm.png";

import { useAppContext } from "../../context/appContext.js";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

function SignUpPage() {
  const { user } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, [user, navigate]);
  const initialState = {
    username: "",
    email: "",
    password: "",
    birthDate: "",
  };
  const { registerUser } = useAppContext();
  const [values, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email, birthDate } = values;

    if (!username || !email || !password || !birthDate) {
      alert("Please enter");
    } else {
      const currentUser = {
        email: email,
        birthDate: birthDate,
        password: password,
        username: username,
      };
      registerUser(currentUser);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <img src={background} alt="BACKGROUND" />
      <div className={cx("form")}>
        <img src={backgroundForm} alt="Background Form" />

        <form
          className={cx("form-sign-up")}
          onSubmit={(e) => handleSubmit(e)}
          autocomplete="off"
        >
          <div className={cx("email_Field")}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={(e) => {
                setState({ ...values, email: e.target.value });
              }}
            />
          </div>
          <div className={cx("username_Field")}>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={(e) => {
                setState({ ...values, username: e.target.value });
                console.log(values.username);
              }}
            />
          </div>
          <div className={cx("password_Field")}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => {
                setState({ ...values, password: e.target.value });
                console.log(values.password);
              }}
            />
          </div>
          <div className={cx("date_Field")}>
            <label htmlFor="password">Birth Day:</label>
            <input
              type="date"
              name="birthday"
              value={values.birthDate}
              onChange={(e) => {
                setState({ ...values, birthDate: e.target.value });
              }}
            />
          </div>
          <div className={cx("sub-field")}>
            <a href="http://localhost:3000/forgot-password">Forgot Password?</a>

            <p>
              Have you a account?{" "}
              <a href="http://localhost:3000/sign-in">Sign in</a>
            </p>
          </div>
          <button className={cx("signUp-btn")}> SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
