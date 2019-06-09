import React from "react";
import { Formik, Form } from "formik";
import { Box, Stack, Text } from "grommet";

import {
  RangeSelector,
  RangeInput,
  ResetButton,
  SubmitButton,
  FormField
} from "../src/";
import { Wrapper, Debug } from "./components";

export default () => (
  <Wrapper title="Sample form">
    <Formik
      initialValues={{
        volume: "",
        playlist: [3, 5]
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
          <Box pad={{ bottom: "small" }}>
            <FormField name="volume" label="Volume">
              <RangeInput name="volume" />
            </FormField>
            <FormField name="playlist" label="Playlist">
              <Stack>
                <Box direction="row" justify="between">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
                    <Box key={value} pad="small" border={false}>
                      <Text style={{ fontFamily: "monospace" }}>{value}</Text>
                    </Box>
                  ))}
                </Box>
                <RangeSelector
                  min={0}
                  max={9}
                  direction="horizontal"
                  invert={false}
                  size="full"
                  round="small"
                  name="playlist"
                />
              </Stack>
            </FormField>
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
