import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
                src={projects.image}
                alt={projects.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}} className="w-full max-w-full lg:w-3/4">
              <h3 className="text-xl mb-2">{projects.title}</h3>
              <p className="font-thin mb-4">{projects.description}</p>
              <p>
                {projects.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 p-1 rounded bg-gray-950 text-violet-900"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
