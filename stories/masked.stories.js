import React from "react";
import { Formik, Form } from "formik";
import { Box } from "grommet";

import { MaskedInput, ResetButton, SubmitButton } from "../src/";
import { Wrapper, Debug } from "./components";

const IPv4ElementExp = /^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$/;

export default () => (
  <Wrapper title="Sample form">
    <Formik
      initialValues={{
        ip: "",
        date: ""
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
            <MaskedInput
              mask={[
                {
                  length: [1, 3],
                  regexp: IPv4ElementExp,
                  placeholder: "xxx"
                },
                { fixed: "." },
                {
                  length: [1, 3],
                  regexp: IPv4ElementExp,
                  placeholder: "xxx"
                },
                { fixed: "." },
                {
                  length: [1, 3],
                  regexp: IPv4ElementExp,
                  placeholder: "xxx"
                },
                { fixed: "." },
                {
                  length: [1, 3],
                  regexp: IPv4ElementExp,
                  placeholder: "xxx"
                }
              ]}
              name="ip"
            />
            <MaskedInput
              mask={[
                {
                  length: [1, 2],
                  options: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12"
                  ],
                  regexp: /^1[1-2]$|^[0-9]$/,
                  placeholder: "hh"
                },
                { fixed: ":" },
                {
                  length: 2,
                  options: ["00", "15", "30", "45"],
                  regexp: /^[0-5][0-9]$|^[0-9]$/,
                  placeholder: "mm"
                },
                { fixed: " " },
                {
                  length: 2,
                  options: ["am", "pm"],
                  regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                  placeholder: "ap"
                }
              ]}
              name="name"
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
