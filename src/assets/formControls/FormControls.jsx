import React from "react";
import classes from "./FormControls.module.css";

const Element = Element => ({ input, meta: { touched, error }, ...props }) => {
  const { formControl, formError } = classes;
  const hasError = touched && error;
  return (
    <div className={formControl + " " + (hasError ? formError : "")}>
      <div>
        <Element {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = Element("textarea");
export const Input = Element("input");
