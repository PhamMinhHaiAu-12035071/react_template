import React from "react";
import {styled, TextField} from "@mui/material";
import {TextFieldProps} from "@mui/material/TextField/TextField";

const BorderTextField = styled(TextField)(({theme}) => ({
  "& .MuiOutlinedInput-root input": {
    /* 12.5px = 18.5px - 6px (note: 18.5px is the input's default padding top and bottom) */
    // paddingTop: "12.5px",
    // paddingBottom: "12.5px",
    ...theme.typography.h6,
  },
}));

export type TextFieldFullWidthProps = TextFieldProps;

const TextFieldFullWidth = (props: TextFieldFullWidthProps) => {
  return <BorderTextField {...props} className={"text-field-full-width"} />;
};

export {TextFieldFullWidth};
