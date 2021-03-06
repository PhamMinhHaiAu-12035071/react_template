import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Grid, Typography, Radio} from "@mui/material";
import {wrap} from "popmotion";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface CarouselSignUpProps {
  slides: Array<Slide>;
}

// config
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const transitionConfig = {
  x: {type: "spring", stiffness: 300, damping: 25},
  opacity: {duration: 0.35},
};
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const CarouselSignUp = (props: CarouselSignUpProps) => {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [selectedValue, setSelectedValue] = React.useState("0");
  const pageIndex = wrap(0, props.slides.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > Number(selectedValue)) {
      paginate(1);
    } else {
      paginate(-1);
    }
    setSelectedValue(event.target.value);
  };
  const _increaseSelectedValue = (): void => {
    if (Number(selectedValue) === props.slides.length - 1) {
      const firstIndex = 0;
      setSelectedValue(firstIndex.toString());
      return;
    }
    const increase = Number(selectedValue) + 1;
    setSelectedValue(increase.toString());
  };
  const _decreaseSelectedValue = (): void => {
    if (Number(selectedValue) === 0) {
      const lastIndex = props.slides.length - 1;
      setSelectedValue(lastIndex.toString());
      return;
    }
    const decrease = Number(selectedValue) - 1;
    setSelectedValue(decrease.toString());
  };
  return (
    <Grid
      container
      direction={"column"}
      className={"carousel-sign-up"}
      justifyContent={"space-between"}
    >
      <Grid item xs={10.5} className={"wrapper-slide"}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className={"slide"}
            custom={direction}
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transitionConfig}
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
                _increaseSelectedValue();
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
                _decreaseSelectedValue();
              }
            }}
          >
            <div className={"wrapper-image"}>
              <img
                className={"image"}
                src={props.slides[pageIndex].image}
                alt={"slide-image"}
              />
            </div>
            <Grid
              container
              direction={"column"}
              justifyContent={"space-between"}
              className={"wrapper-content"}
            >
              <Grid container direction={"row"} justifyContent={"center"}>
                <Grid item xs={7} className={"wrapper-title"}>
                  <Typography variant={"h1"} component={"h1"} className={"title"}>
                    {props.slides[pageIndex].title}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction={"row"} justifyContent={"center"}>
                <Grid item xs={6} className={"wrapper-description"}>
                  <Typography variant={"caption"} className={"description"}>
                    {props.slides[pageIndex].description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Grid>
      <Grid item xs={1.5}>
        <Grid container direction={"row"} justifyContent={"center"}>
          {props.slides.length > 0 &&
            props.slides.map((item, index) => {
              return (
                <Radio
                  key={index.toString()}
                  checked={selectedValue === index.toString()}
                  onChange={_handleChange}
                  value={index.toString()}
                  name="radio-buttons"
                  inputProps={{"aria-label": `${index.toString()}`}}
                />
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export {CarouselSignUp};

export type {CarouselSignUpProps, Slide};
