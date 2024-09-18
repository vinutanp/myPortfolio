import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h2 whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <TbBrandNextjs className="text-6xl text-white" />
        </motion.div>
        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaJs className="text-6xl text-yellow-300" />
        </motion.div>
        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <SiTypescript className="text-6xl text-blue-700" />
        </motion.div>
        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaHtml5 className="text-6xl text-orange-700" />
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaCss3Alt className="text-6xl text-blue-700" />
        </motion.div>
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <BiLogoTailwindCss className="text-6xl text-cyan-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
