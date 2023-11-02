import { easeOut } from "framer-motion";

export const animation = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: "0vh",
    transition: {
      staggerChildren: 0.2,
      duration: 0.7,
      ease: easeOut,
    },
  },
};

export const childAnimation = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: "0vh",
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};
