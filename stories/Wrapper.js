import React from "react";
import { Grommet, grommet, Box, Heading } from "grommet";

export const Wrapper = ({ children, title }) => (
  <Grommet full theme={grommet}>
    <Box pad="small" fill width="large">
      <Box alignSelf="center">
        <Heading level={2}>{title}</Heading>
        {children}
      </Box>
    </Box>
  </Grommet>
);
