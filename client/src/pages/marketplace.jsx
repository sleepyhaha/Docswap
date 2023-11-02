import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { animation, childAnimation } from "../util/animation";

export default function Marketplace() {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      className="h-full w-full flex flex-col items-center"
    >
      <motion.section
        variants={childAnimation}
        className="flex justify-center w-full mb-16"
      >
        <h1>Marketplace</h1>
      </motion.section>
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        className="h-full columns-3 w-4/5 gap-24"
      >
        <motion.section
          variants={childAnimation}
          className="w-72 h-96 bg-stone-300 "
        >
          <title>Seller</title>
          <div>
            <img src="/" alt="seller profile picture" />
          </div>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
        </motion.section>
        <motion.section
          variants={childAnimation}
          className="w-72 h-96 bg-stone-300 mt-5"
        >
          <title>Seller</title>
          <div>
            <img src="/" alt="seller profile picture" />
          </div>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
        </motion.section>
        <motion.section
          variants={childAnimation}
          className="w-72 h-96 bg-stone-300 mt-5"
        >
          <title>Seller</title>
          <div>
            <img src="/" alt="seller profile picture" />
          </div>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
        </motion.section>
        <motion.section
          variants={childAnimation}
          className="w-72 h-96 bg-stone-300 mt-5"
        >
          <title>Seller</title>
          <div>
            <img src="/" alt="seller profile picture" />
          </div>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
        </motion.section>

        <motion.section
          variants={childAnimation}
          className="w-72 h-96 bg-stone-300 mt-5"
        >
          <title>Seller</title>
          <div>
            <img src="/" alt="seller profile picture" />
          </div>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
        </motion.section>

        <motion.section
          variants={childAnimation}
          className="w-72 h-96 bg-stone-300 mt-5"
        >
          <title>Seller</title>
          <div>
            <img src="/" alt="seller profile picture" />
          </div>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
