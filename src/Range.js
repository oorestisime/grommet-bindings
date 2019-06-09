import React from "react";
import { Field } from "formik";
import {
  RangeInput as RangeInputComponent,
  RangeSelector as RangeSelectorComponent
} from "grommet";
import { GrommetComponent } from "./GrommetComponent";

export const RangeInput = ({ ...rest }) => (
  <GrommetComponent Component={RangeInputComponent} {...rest} />
);

export const RangeSelector = ({ ...rest }) => (
  <GrommetComponent
    {...rest}
    valueKey="values"
    Component={RangeSelectorComponent}
    formatEvent={(args, name, onChange) =>
      onChange({ target: { name, value: args } })
    }
  />
);
