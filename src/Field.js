import React from "react";
import { Field, getIn } from "formik";
import { FormField as GrommetField } from "grommet";

export const FormField = ({ name, label, children, ...rest }) => (
  <Field name={name}>
    {({ form: { errors, touched } }) => {
      const error = getIn(errors, name);
      const isTouched = getIn(touched, name);
      return (
        <GrommetField
          error={isTouched && error}
          label={label || name}
          htmlFor={name}
          {...rest}
        >
          {children}
        </GrommetField>
      );
    }}
  </Field>
);
