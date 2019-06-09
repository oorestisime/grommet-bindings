import React from "react";
import { TextArea as TextAreaComponent } from "grommet";
import { GrommetComponent } from "./GrommetComponent";

export const TextArea = ({ ...rest }) => (
  <GrommetComponent Component={TextAreaComponent} {...rest} />
);
