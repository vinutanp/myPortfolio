import { HERO_CONTENT } from "../constants";
import photo from "../assets/photo_removebg.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-gray-700 pb-12 lg:mb-36">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold text-white lg:mt-16"
            >
              Vinuta Poojari
            </motion.h2>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-3xl font-semibold text-transparent mt-4"
            >
              Frontend Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="font-light text-gray-300 my-4 max-w-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={photo}
            alt="Profile"
            className="rounded-lg shadow-lg w-72 lg:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
