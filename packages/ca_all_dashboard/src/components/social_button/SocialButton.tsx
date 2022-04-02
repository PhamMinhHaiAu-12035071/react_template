import {Button, ButtonProps, SvgIcon, Typography, useTheme} from "@mui/material";
import React from "react";

export interface SocialButtonProps extends ButtonProps {
  text: string;
  icon: React.ReactComponentElement<any>;
}
const SocialButton = (props: SocialButtonProps) => {
  const {text, icon, ...rest} = props;
  const theme = useTheme();

  return (
    <Button
      {...rest}
      color={"yellowLight900"}
      variant="contained"
      disableElevation
      startIcon={<SvgIcon>{icon}</SvgIcon>}
      sx={{...styledButton, ...{borderRadius: theme.borderRadius.md}}}
    >
      <Typography component={"h6"} variant={"h6"}>
        {text}
      </Typography>
    </Button>
  );
};

const styledButton = {
  height: "48px",
  textTransform: "none",
};

export {SocialButton};
