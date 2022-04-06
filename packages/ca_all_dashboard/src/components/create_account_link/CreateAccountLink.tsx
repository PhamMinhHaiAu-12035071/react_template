import React from "react";
import {Link} from "../../types";
import {Button, Grid, Typography} from "@mui/material";

interface CreateAccountLinkProps {
  description: string;
  link?: Link;
}

const CreateAccountLink = (props: CreateAccountLinkProps) => {
  const _renderLink = (): React.ReactElement | null => {
    if (props.link) {
      return (
        <Grid item>
          <Button onClick={props.link.onClick}>
            <Typography variant="h6" component={"h6"} className={"link"}>
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
      container
      direction={"row"}
      spacing={0}
      alignItems={"center"}
      className={"create-account-link"}
    >
      <Grid item>
        <Typography variant="caption" display={"block"}>
          {props.description}
        </Typography>
      </Grid>
      {_renderLink()}
    </Grid>
  );
};

export {CreateAccountLink};
export type {CreateAccountLinkProps};
