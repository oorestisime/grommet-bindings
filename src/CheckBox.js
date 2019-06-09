import React from "react";
import { CheckBox as CheckBoxComponent } from "grommet";
import { GrommetComponent } from "./GrommetComponent";

export const CheckBox = ({ ...rest }) => (
  <GrommetComponent
    valueKey="checked"
    Component={CheckBoxComponent}
    {...rest}
  />
);
