import React from "react";
import {Grid, Typography} from "@mui/material";
import {Link} from "../../types";
import {CreateAccountLink} from "../create_account_link";

export interface AuthTitleProps {
  title: string;
  description: string;
  link?: Link;
}

const AuthTitle = (props: AuthTitleProps) => {
  return (
    <Grid
      className={"auth-title"}
      container
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Grid item>
        <Typography component={"h1"} variant={"h1"}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <CreateAccountLink description={props.description} link={props.link} />
      </Grid>
    </Grid>
  );
};

export {AuthTitle};
