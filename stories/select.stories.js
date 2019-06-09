import React from "react";
import { Formik, Form } from "formik";
import { Box } from "grommet";

import { Select, ResetButton, SubmitButton, FormField } from "../src/";
import { Wrapper, Debug } from "./components";

export default () => (
  <Wrapper title="Sample form">
    <Formik
      initialValues={{
        season: "Summer"
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
          <FormField name="season" label="Season">
            <Select
              options={["Summer", "Winter", "Automn", "Spring"]}
              name="season"
            />
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
