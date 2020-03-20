import React from "react";
import classes from "./Login.module.css";

export const Login = () => {
  const { form, formPage } = classes;
  return (
    <div className={formPage}>
      <h1>LOGIN</h1>
      <form action="submit" className={form}>
        <input type="text" placeholder="Login" />
        <input type="text" placeholder="Password" />
        <label>
          <input type="checkbox" name="checkbox" />
          Remember me
        </label>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Login;
