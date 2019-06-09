import React from "react";
import { MaskedInput as MaskedInputComponent } from "grommet";
import { GrommetComponent } from "./GrommetComponent";

export const MaskedInput = ({ ...rest }) => (
  <GrommetComponent
    Component={MaskedInputComponent}
    formatEvent={(event, name, onChange) =>
      onChange({ target: { ...event.target, name } })
    }
    {...rest}
  />
);
