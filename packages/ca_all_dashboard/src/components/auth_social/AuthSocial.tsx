import React from "react";
import {Grid} from "@mui/material";
import {SocialButton, SocialButtonProps} from "../social_button";

interface AuthSocialProps {
  socials: Array<SocialButtonProps>;
}
const AuthSocial = (props: AuthSocialProps) => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      className={"wrapper-social"}
    >
      {props.socials.length > 0 &&
        props.socials.map((social, index) => {
          return (
            <Grid item key={index.toString()}>
              <SocialButton
                className={"wrapper-social-button"}
                text={social.text}
                icon={social.icon}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

export {AuthSocial};
export type {AuthSocialProps};
