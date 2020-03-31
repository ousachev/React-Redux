import React from "react";
import classes from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { required } from "./../../utils/validators/validators";
import { Input } from "../../assets/formControls/FormControls";
const LoginForm = ({ handleSubmit }) => {
  const { form, formField, formRememberMe, formCheckbox } = classes;
  return (
    <form className={form} onSubmit={handleSubmit}>
      <Field
        placeholder="Email"
        name="email"
        component={Input}
        className={formField}
        validate={[required]}
      />
      <Field
        placeholder="Password"
        name="password"
        component={Input}
        className={formField}
        type="password"
        validate={[required]}
      />
      <label className={formRememberMe}>
        <Field
          type="checkbox"
          name="rememberMe"
          component={Input}
          className={formCheckbox}
        />
        Remember me
      </label>
      <button>Send</button>
    </form>
  );
};
export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
