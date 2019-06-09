import React from "react";
import { Formik, Form } from "formik";
import { Box } from "grommet";

import {
  RadioButton,
  RadioButtonGroup,
  ResetButton,
  SubmitButton
} from "../src/";
import { Wrapper, Debug } from "./components";

export default () => (
  <Wrapper title="Sample form">
    <Formik
      initialValues={{
        single: false,
        multiple: "one"
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(values);
          resetForm();
        }, 2000);
      }}
      render={() => (
        <Form>
          <Box margin={{ bottom: "small" }} gap="small">
            <RadioButton name="single" label="chosen" />
            <RadioButtonGroup
              name="multiple"
              direction="row"
              options={["one", "two", "three"]}
            />
          </Box>
          <Box direction="row" gap="small">
            <SubmitButton label="Submit" />
            <ResetButton label="Reset" />
          </Box>
          <Debug />
        </Form>
      )}
    />
  </Wrapper>
);
