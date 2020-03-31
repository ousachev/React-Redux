import React from "react";
import { login } from "./../../redux/authReducer";
import { connect } from "react-redux";
import { LoginReduxForm } from "./LoginForm";
import { Redirect } from "react-router-dom";

export const Login = ({ login, isAuth }) => {
  const onSubmitHandler = formData => {
    login(formData.email, formData.password, formData.rememberMe);
  };
  return isAuth ? (
    <Redirect to="profile" />
  ) : (
    <div style={{ width: "200px", padding: "20px" }}>
      <h1 style={{ marginBottom: "30px", fontSize: "40px" }}>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmitHandler} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
