import React from "react";
import {
  RadioButton as RadioComponent,
  RadioButtonGroup as RadioGroupComponent
} from "grommet";
import { GrommetComponent } from "./GrommetComponent";

export const RadioButton = ({ ...rest }) => (
  <GrommetComponent valueKey="checked" Component={RadioComponent} {...rest} />
);

export const RadioButtonGroup = ({ ...rest }) => (
  <GrommetComponent Component={RadioGroupComponent} {...rest} />
);
