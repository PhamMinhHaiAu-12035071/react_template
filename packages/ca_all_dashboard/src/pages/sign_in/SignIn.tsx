import React from "react";
import {Box, Container, Grid, Typography, Link, SvgIcon} from "@mui/material";
import {ReactComponent as SignInBackground} from "../../assets/images/sign_in/sign_in_background.svg";
import {useTranslation} from "react-i18next";
import {SocialButton} from "../../components/social_button";
import {ReactComponent as GoogleIcon} from "../../assets/images/icons/google.svg";
const SignIn = () => {
  const {t} = useTranslation(["sign_in_page"]);

  return (
    <Container maxWidth={false} disableGutters={true} className={"sign_in"}>
      <Grid container spacing={0} direction="row" justifyContent="center">
        <Grid
          item
          xs={6}
          container
          direction={"column"}
          justifyContent="center"
          className={"wrapper"}
        >
          <div className={"wrapper-background"}>
            <SignInBackground />
          </div>
        </Grid>
        <Grid item xs={6} container direction={"column"} justifyContent="center">
          <Box>
            <Typography component={"h1"} variant={"h1"}>
              {t("sign_in_page:title")}
            </Typography>

            <Typography variant="caption" display="block">
              {t("sign_in_page:notAccount")}
              <Link href="#" variant="h6" underline="none" sx={{color: "blue.main"}}>
                {t("sign_in_page:signUp")}
              </Link>
            </Typography>

            <SocialButton text={"Continue with Google"} icon={<GoogleIcon />} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export {SignIn};
