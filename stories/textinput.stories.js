import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Box } from "grommet";

import {
  TextInput,
  TextArea,
  ResetButton,
  SubmitButton,
  PasswordInput,
  FormField
} from "../src/";
import { Wrapper, Debug } from "./components";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  username: yup.string()
});

export default () => (
  <Wrapper title="Sample form">
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstname: "Formik",
        lastname: "Grommet",
        username: "",
        bio: "A small bio"
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(values);
          resetForm();
        }, 2000);
      }}
      render={() => (
        <Form>
          <Box direction="row" gap="xsmall">
            <FormField name="email" label="Email">
              <TextInput name="email" />
            </FormField>
            <FormField name="username">
              <TextInput name="username" />
            </FormField>
          </Box>
          <FormField name="password">
            <PasswordInput name="password" />
          </FormField>
          <Box direction="row" gap="xsmall">
            <FormField label="First name" name="firstname">
              <TextInput name="firstname" />
            </FormField>
            <FormField name="lastname">
              <TextInput name="lastname" />
            </FormField>
          </Box>
          <FormField label="Description" name="bio">
            <Box fill width="small" height="medium">
              <TextArea plain name="bio" />
            </Box>
          </FormField>
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
