import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Grid, Typography} from "@mui/material";
import {wrap} from "popmotion";

interface Slide {
  image: string;
  title: string;
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

  const pageIndex = wrap(0, props.slides.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Grid
      container
      spacing={0}
      className={"carousel-sign-up"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
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
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <motion.img className={"image"} src={props.slides[pageIndex].image} />
          <motion.div>
            <Grid container direction={"row"} justifyContent={"center"}>
              <Grid item xs={7} className={"wrapper-title"}>
                <Typography variant={"h1"} component={"h1"} className={"title"}>
                  {props.slides[pageIndex].title}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Grid>
  );
};

export {CarouselSignUp};

export type {CarouselSignUpProps, Slide};
