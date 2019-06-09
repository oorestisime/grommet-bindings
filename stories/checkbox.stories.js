import React from "react";
import { Formik, Form } from "formik";
import { Box } from "grommet";

import {
  TextInput,
  CheckBox,
  ResetButton,
  SubmitButton,
  FormField
} from "../src/";
import { Wrapper, Debug } from "./components";

export default () => (
  <Wrapper title="Sample form">
    <Formik
      initialValues={{
        message: "",
        cookies: true,
        cream: false
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
          <FormField name="message" label="Message">
            <TextInput name="message" />
          </FormField>
          <Box pad={{ bottom: "small" }} gap="small" direction="row">
            <CheckBox name="cookies" label="Cookies" />
            <CheckBox name="cream" label="Cream" toggle />
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
