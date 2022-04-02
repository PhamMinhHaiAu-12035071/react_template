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
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.black.light900,
    borderWidth: "1px",
    borderRadius: theme.borderRadius.md,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.blue.main,
      borderWidth: "1px",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Sk Modernist Regular, Open Sans",
    color: theme.palette.black.light600,
    fontSize: "12px",
    lineHeight: "16px",
    left: "10px",
  },
  "& .Mui-focused.MuiInputLabel-root.MuiInputLabel-shrink": {
    fontFamily: "Sk Modernist Regular, Open Sans",
    color: theme.palette.blue.main,
    fontSize: "12px",
    lineHeight: "16px",
  },
}));

export type TextFieldFullWidthProps = TextFieldProps;

const TextFieldFullWidth = (props: TextFieldFullWidthProps) => {
  return (
    <BorderTextField
      {...props}
      inputProps={{
        style: {
          paddingLeft: "24px",
        },
      }}
    />
  );
};

export {TextFieldFullWidth};
