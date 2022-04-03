import React from "react";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IconProps {
  onClick: (event?: any) => any;
}
const Icon = (props: IconProps) => {
  return (
    <IconButton onClick={props.onClick}>
      <KeyboardArrowDownIcon />
    </IconButton>
  );
};

export {Icon};
export type {IconProps};
