import React from "react";
import { Select as SelectComponent } from "grommet";
import { GrommetComponent } from "./GrommetComponent";

export const Select = ({ ...rest }) => (
  <GrommetComponent
    Component={SelectComponent}
    formatEvent={({ value }, name, onChange) => {
      onChange({ target: { name, value } });
    }}
    {...rest}
  />
);
