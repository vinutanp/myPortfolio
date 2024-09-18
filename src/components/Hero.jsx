import { HERO_CONTENT } from "../constants";
import photo from "../assets/photo_removebg.png";
import {delay, motion} from "framer-motion";


const container=(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{
      duration:0.5,
      delay:delay
    }
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-12 text-5xl font-thin lg:mt-16">
              Vinuta Poojari
            </motion.h2>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-800 bg-clip-text text-3xl tracking-light text-transparent ">Frontend Developer</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible" className="font-thin my-3 py-6 mx-w-xl">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
        <div className="flex justify-center ">
        <motion.img 
        initial={{x:100, opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1, delay:1.2}}
        src={photo} alt="Profile" className="rounded"/>
        </div>
            
          </div>
      </div>
    </div>
  );
};

export default Hero;
