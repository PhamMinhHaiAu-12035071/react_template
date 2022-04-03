import {Container, Grid} from "@mui/material";
import React from "react";
import {CarouselSignUp} from "../../components/carousel_sign_up";
import SlideAwards from "../../assets/images/sign_up/slide_awards.svg";
import SlideLocation from "../../assets/images/sign_up/slide_location.svg";
import {useTranslation} from "react-i18next";

const SignUp = () => {
  const {t} = useTranslation(["sign_up_page"]);
  return (
    <Container maxWidth={false} disableGutters={true} className={"sign-up"}>
      <Grid container spacing={0} direction={"row"}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} className={"wrapper-right"}>
          <CarouselSignUp
            slides={[
              {
                image: SlideAwards,
                title: t("sign_up_page:slideAwardsTitle"),
              },
              {
                image: SlideLocation,
                title: t("sign_up_page:slideLocationTitle"),
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export {SignUp};
