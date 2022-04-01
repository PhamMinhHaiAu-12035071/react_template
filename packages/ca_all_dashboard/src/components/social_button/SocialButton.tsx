import {Button, SvgIcon, Typography} from "@mui/material";
import React from "react";

export interface SocialButtonProps {
  text: string;
  icon: React.ReactComponentElement<any>;
}
const SocialButton = (props: SocialButtonProps) => {
  return (
    <Button
      color={"yellowLight"}
      variant="contained"
      disableElevation
      startIcon={<SvgIcon>{props.icon}</SvgIcon>}
      sx={styledButton}
    >
      <Typography component={"h6"} variant={"h6"}>
        {props.text}
      </Typography>
    </Button>
  );
};

const styledButton = {
  borderRadius: 16,
  height: 48,
  textTransform: "none",
};

export {SocialButton};
