import React, { useState } from "react";
import { TextInput as TextInputComponent, Box, Button } from "grommet";
import { FormLock, View } from "grommet-icons";
import { GrommetComponent } from "./GrommetComponent";

export const TextInput = ({ ...rest }) => (
  <GrommetComponent Component={TextInputComponent} {...rest} />
);

export const PasswordInput = ({ boxProps = {}, iconSize, ...rest }) => {
  const [reveal, setReveal] = useState(false);
  return (
    <Box direction="row" align="center" {...boxProps}>
      <TextInput plain type={reveal ? "text" : "password"} {...rest} />
      <Button
        icon={reveal ? <View size={iconSize} /> : <FormLock size={iconSize} />}
        onClick={() => setReveal(!reveal)}
      />
    </Box>
  );
};
