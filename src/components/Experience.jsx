import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";


const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}} 
      className="my-20 text-center text-4xl">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((ele, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{ele.year}</p>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:1.5}}
            className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 ">
                {ele.role} - 
                <span className="text-sm ">
                  {ele.company}</span>
              </h3>
              <p className="mb-4 font-thin">
                {ele.description}</p>
                {ele.technologies.map((tech, index)=>(
                  <span key={index} className="mr-2 p-1 rounded bg-gray-950 text-violet-900">{tech}</span>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
