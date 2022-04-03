import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import {Link} from "../../types";

export interface AuthTitleProps {
  title: string;
  description: string;
  link?: Link;
}

const AuthTitle = (props: AuthTitleProps) => {
  const _renderLink = (): React.ReactElement | null => {
    if (props.link) {
      return (
        <Grid item>
          <Button onClick={props.link.onClick}>
            <Typography
              variant="h6"
              component={"h6"}
              sx={{color: "blue.main", textTransform: "none"}}
            >
              {props.link.text}
            </Typography>
          </Button>
        </Grid>
      );
    }
    return null;
  };

  return (
    <Grid
      className={"auth_title"}
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
        <Grid container direction={"row"} spacing={1} alignItems={"center"}>
          <Grid item>
            <Typography variant="caption" display={"block"}>
              {props.description}
            </Typography>
          </Grid>
          {_renderLink()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export {AuthTitle};
