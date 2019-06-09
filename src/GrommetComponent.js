import React from "react";
import { Field } from "formik";

export const GrommetComponent = ({
  name,
  validate,
  onTouchValidate = true,
  disabled,
  Component,
  formatEvent,
  valueKey = "value",
  ...rest
}) => (
  <Field name={name} validate={validate}>
    {({
      field: { value, onChange },
      form: { setFieldTouched, isSubmitting }
    }) => (
      <Component
        name={name}
        onChange={args => {
          setFieldTouched(name, true, onTouchValidate);
          if (!formatEvent) {
            onChange(args);
          } else {
            formatEvent(args, name, onChange);
          }
        }}
        disabled={disabled || isSubmitting}
        {...rest}
        {...{ [valueKey]: value }}
      />
    )}
  </Field>
);
