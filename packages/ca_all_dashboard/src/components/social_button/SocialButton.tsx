import {Button, ButtonProps, SvgIcon, Typography} from "@mui/material";
import React from "react";

export interface SocialButtonProps extends ButtonProps {
  text: string;
  icon: React.ReactComponentElement<any>;
}

const SocialButton = (props: SocialButtonProps) => {
  const {text, icon, className, ...rest} = props;

  return (
    <Button
      {...rest}
      color={"yellowLight900"}
      variant="contained"
      disableElevation
      startIcon={<SvgIcon>{icon}</SvgIcon>}
      className={`social-button ${className}`}
    >
      <Typography component={"h6"} variant={"h6"}>
        {text}
      </Typography>
    </Button>
  );
};

export {SocialButton};
