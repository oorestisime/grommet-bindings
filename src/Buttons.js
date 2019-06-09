import React from "react";
import { Button } from "grommet";
import { Field } from "formik";

export const ResetButton = ({ ...rest }) => (
  <Field>
    {({ form: { resetForm, dirty } }) => (
      <Button
        type="reset"
        onClick={() => resetForm()}
        disabled={!dirty}
        {...rest}
      />
    )}
  </Field>
);

export const SubmitButton = ({ children, ...rest }) => (
  <Field>
    {({ form: { isValid, isSubmitting } }) => (
      <Button
        primary
        disabled={!isValid || isSubmitting}
        type="submit"
        {...rest}
      />
    )}
  </Field>
);
