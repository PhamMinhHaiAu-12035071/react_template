import {
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import {CarouselSignUp} from "../../components/carousel_sign_up";
import SlideAwards from "../../assets/images/sign_up/slide_awards.svg";
import SlideLocation from "../../assets/images/sign_up/slide_location.svg";
import {useTranslation} from "react-i18next";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {AuthTitle} from "../../components/auth_title";
import {AuthSocial} from "../../components/auth_social";
import {ReactComponent as GoogleIcon} from "../../assets/images/icons/google.svg";
import {ReactComponent as TwitterIcon} from "../../assets/images/icons/twitter.svg";
import {TextFieldFullWidth} from "../../components/text_field_full_width";
import {CreateAccountLink} from "../../components/create_account_link";

const SignUp = () => {
  const {t} = useTranslation(["sign_up_page, sign_in_page"]);
  return (
    <Container maxWidth={false} disableGutters={true} className={"sign-up"}>
      <Grid container spacing={0} direction={"row"}>
        <Grid item xs={6} className={"wrapper-left"}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            className={"wrapper-left-container"}
          >
            <Grid item lg={9} md={10} className={"wrapper-content"}>
              <div className={"wrapper-logo"}>
                <Logo />
              </div>
              <div className={"wrapper-form"}>
                <AuthTitle
                  title={t("sign_up_page:title")}
                  description={t("sign_up_page:createAccount")}
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
                        label={t("sign_up_page:yourName")}
                        id="yourName"
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
                            {t("sign_up_page:termAndConditions")}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>

                  <Button
                    variant="contained"
                    disableElevation
                    color={"blue"}
                    className={"register"}
                  >
                    <Typography component={"h6"} variant={"h6"} className={"text-submit"}>
                      {t("sign_up_page:register")}
                    </Typography>
                  </Button>
                </FormControl>
              </div>
              <div className={"wrapper-create-account"}>
                <CreateAccountLink
                  description={t("sign_in_page:notAccount")}
                  link={{text: t("sign_in_page:signUp")}}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className={"wrapper-right"}>
          <CarouselSignUp
            slides={[
              {
                image: SlideAwards,
                title: t("sign_up_page:slideAwardsTitle"),
                description: t("sign_up_page:slideAwardsDescription"),
              },
              {
                image: SlideLocation,
                title: t("sign_up_page:slideLocationTitle"),
                description: t("sign_up_page:slideLocationDescription"),
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export {SignUp};
