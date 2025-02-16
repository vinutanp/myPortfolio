import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white font-bold"
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-12 px-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.2 }}
            className="bg-[#121212] p-6 rounded-xl shadow-lg w-full md:w-[700px] lg:w-[850px] flex flex-col md:flex-row items-center border border-gray-800"
          >
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-1/2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[250px] object-contain rounded-lg border-2 border-gray-600 hover:opacity-80 transition-opacity duration-300"
              />
            </motion.a>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="flex-1 p-6"
            >
              <h3 className="text-2xl text-white font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded bg-[#1e1e1e] text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded bg-[#0d6efd] text-white hover:bg-[#0b5ed7] transition duration-300"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded border border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white transition duration-300"
                >
                  GitHub <FaGithub size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
