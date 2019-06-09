import React from "react";
import { Field } from "formik";

export const Debug = () => (
  <pre style={{ padding: 15 }}>
    <Field>{({ form }) => JSON.stringify(form, null, 2)}</Field>
  </pre>
);
