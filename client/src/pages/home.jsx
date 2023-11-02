import { easeOut, motion } from "framer-motion";
import { animation } from "../util/animation";

export default function Home() {
  return (
    <div className="text-center h-4/5 ">
      <motion.h1
        variants={animation}
        initial="initial"
        animate="animate"
        className=" relative mx-48 top-1/2"
      >
        Welcome to the digital bookswap
      </motion.h1>
    </div>
  );
}
