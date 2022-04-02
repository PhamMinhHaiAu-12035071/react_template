import React from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import {ReactComponent as SignInBackground} from "../../assets/images/sign_in/sign_in_background.svg";
import {useTranslation} from "react-i18next";
import {SocialButton} from "../../components/social_button";
import {ReactComponent as GoogleIcon} from "../../assets/images/icons/google.svg";
import {ReactComponent as TwitterIcon} from "../../assets/images/icons/twitter.svg";
import {TextFieldFullWidth} from "../../components/text_field_full_width";

const labelRemember = {inputProps: {"aria-label": "Checkbox demo"}};
const SignIn = () => {
  const theme = useTheme();
  const {t} = useTranslation(["sign_in_page"]);

  return (
    <Container maxWidth={false} disableGutters={true} className={"sign_in"}>
      <Grid container spacing={0} direction="row" justifyContent="center">
        <Grid
          item
          lg={5}
          md={6}
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
        <Grid item lg={7} md={6} xs={6} container direction={"row"} alignItems={"center"}>
          <Grid item lg={10} md={10} xs={2}>
            <Grid
              container
              className={"wrapper-form"}
              direction={"column"}
              justifyContent={"space-between"}
            >
              <Grid
                className={"wrapper-title"}
                container
                direction={"column"}
                justifyContent={"space-between"}
              >
                <Grid item>
                  <Typography component={"h1"} variant={"h1"}>
                    {t("sign_in_page:title")}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" display={"block"}>
                    {t("sign_in_page:notAccount")}
                    <Link
                      href="#"
                      variant="h6"
                      underline="none"
                      sx={{color: "blue.main"}}
                    >
                      {t("sign_in_page:signUp")}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                className={"wrapper-social"}
              >
                <Grid item>
                  <SocialButton
                    className={"wrapper-social-button"}
                    text={t("sign_in_page:signInWithGoogle")}
                    icon={<GoogleIcon />}
                  />
                </Grid>
                <Grid item>
                  <SocialButton
                    className={"wrapper-social-button"}
                    text={t("sign_in_page:signInWithTwitter")}
                    icon={<TwitterIcon />}
                  />
                </Grid>
              </Grid>
              <FormControl fullWidth>
                <Grid
                  container
                  className={"wrapper-input"}
                  direction={"column"}
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <TextFieldFullWidth
                      label={t("sign_in_page:email")}
                      id="email"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item>
                    <TextFieldFullWidth
                      label={t("sign_in_page:password")}
                      id="password"
                      type={"password"}
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
                <Grid
                  className={"wrapper-action"}
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <Grid container direction={"row"} alignItems={"center"}>
                      <Grid item>
                        <Checkbox {...labelRemember} color={"blue"} />
                      </Grid>
                      <Grid item>
                        <Typography component={"h6"} variant={"h6"}>
                          {t("sign_in_page:rememberMe")}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      variant="caption"
                      underline="none"
                      sx={{color: "blue.main"}}
                    >
                      {t("sign_in_page:forgotPassword")}
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  disableElevation
                  color={"blue"}
                  sx={{borderRadius: theme.borderRadius.md, height: "56px"}}
                >
                  <Typography
                    component={"h6"}
                    variant={"h6"}
                    sx={{color: "white", textTransform: "none"}}
                  >
                    {t("sign_in_page:login")}
                  </Typography>
                </Button>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item lg={2} md={2} xs={2}></Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export {SignIn};
