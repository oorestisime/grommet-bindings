import React from "react";

import { storiesOf } from "@storybook/react";
import TextInputStory from "./textinput.stories";
import CheckBoxStory from "./checkbox.stories";
import RangeStory from "./range.stories";
import SelectStory from "./select.stories";
import RadioStory from "./radio.stories";
import MaskedStory from "./masked.stories";

storiesOf("Formik", module)
  .add("Text Inputs", () => <TextInputStory />)
  .add("CheckBox", () => <CheckBoxStory />)
  .add("Select", () => <SelectStory />)
  .add("Masked input", () => <MaskedStory />)
  .add("Range", () => <RangeStory />)
  .add("Radio Buttons", () => <RadioStory />);
