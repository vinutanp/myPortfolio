import { EXPERIENCES } from "../constants/index.js";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="border-b border-gray-700 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white font-bold"
      >
        Experience
      </motion.h2>

      <VerticalTimeline>
        {EXPERIENCES.map((ele, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={ele.year}
            contentStyle={{
              background: "#112240",
              color: "#ffffff",
              fontWeight: "bold",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #112240" }}
            iconStyle={{ background: "#0d6efd", color: "#ffffff" }}
            icon={<FaBriefcase />}
          >
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="text-lg font-semibold text-white"
            >
              {ele.role} -{" "}
              <span className="text-sm text-gray-300">{ele.company}</span>
            </motion.h3>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="mb-4 font-light text-gray-400"
            >
              {ele.description}
            </motion.p>

            {/* <div className="flex flex-wrap gap-2 mt-2">
              {ele.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 px-3 py-1 rounded bg-blue-800 text-white text-sm"
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
