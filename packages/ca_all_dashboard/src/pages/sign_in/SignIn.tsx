import React from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import {ReactComponent as SignInBackground} from "../../assets/images/sign_in/sign_in_background.svg";
import {useTranslation} from "react-i18next";
import {ReactComponent as GoogleIcon} from "../../assets/images/icons/google.svg";
import {ReactComponent as TwitterIcon} from "../../assets/images/icons/twitter.svg";
import {TextFieldFullWidth} from "../../components/text_field_full_width";
import {SelectLanguage} from "../../components/select_language";
import {AuthTitle} from "../../components/auth_title";
import {AuthSocial} from "../../components/auth_social";

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
          <div className={"dropdown-language"}>
            <SelectLanguage />
          </div>
        </Grid>
        <Grid item lg={7} md={6} xs={6} container direction={"row"} alignItems={"center"}>
          <Grid item lg={10} md={10} xs={10}>
            <Grid
              container
              className={"wrapper-content"}
              direction={"column"}
              justifyContent={"space-between"}
            >
              <AuthTitle
                title={t("sign_in_page:title")}
                description={t("sign_in_page:notAccount")}
                link={{text: t("sign_in_page:signUp")}}
              />
              <AuthSocial
                socials={[
                  {
                    text: t("sign_in_page:signInWithGoogle"),
                    icon: <GoogleIcon />,
                  },
                  {
                    text: t("sign_in_page:signInWithTwitter"),
                    icon: <TwitterIcon />,
                  },
                ]}
              />
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
                    <FormControlLabel
                      control={<Checkbox defaultChecked color={"blue"} />}
                      label={
                        <Typography component={"h6"} variant={"h6"}>
                          {t("sign_in_page:rememberMe")}
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item>
                    <Button>
                      <Typography
                        variant="caption"
                        sx={{color: "blue.main", textTransform: "none"}}
                      >
                        {t("sign_in_page:forgotPassword")}
                      </Typography>
                    </Button>
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
