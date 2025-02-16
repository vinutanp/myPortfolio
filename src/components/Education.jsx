import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EDUCATION } from "../constants/index.js";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa"; // 🎓 Education Icon

const Education = () => {
  return (
    <div className="border-b border-gray-700 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="my-20 text-center text-4xl text-white font-bold"
      >
        Education
      </motion.h2>

      <VerticalTimeline>
        {EDUCATION.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#112240",
              color: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #112240" }}
            date={edu.year}
            iconStyle={{ background: "#0d6efd", color: "#ffffff" }}
            icon={<FaGraduationCap />}
            style={{ marginBottom: "30px" }} // ✅ Adds space between cards
          >
            {/* Animation for Each Education Card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white">{edu.institution}</h3>
              <h4 className="text-sm md:text-base text-gray-300">{edu.place}</h4>
              <p className="text-sm md:text-base font-light text-gray-400">{edu.field}</p>
              <p className="text-sm font-semibold text-white">{edu.marks}</p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
