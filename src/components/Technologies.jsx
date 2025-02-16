import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiSass } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [-8, 8],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
        className="my-16 text-center text-4xl font-bold text-gray-200"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {[
          {
            Icon: RiReactjsLine,
            name: "React.js",
            color: "text-cyan-400",
            duration: 2.5,
          },
          {
            Icon: TbBrandNextjs,
            name: "Next.js",
            color: "text-white",
            duration: 3,
          },
          {
            Icon: FaJs,
            name: "JavaScript",
            color: "text-yellow-300",
            duration: 4,
          },
          {
            Icon: SiTypescript,
            name: "TypeScript",
            color: "text-blue-700",
            duration: 5,
          },
          {
            Icon: FaHtml5,
            name: "HTML5",
            color: "text-orange-700",
            duration: 4,
          },
          {
            Icon: FaCss3Alt,
            name: "CSS3",
            color: "text-blue-700",
            duration: 3,
          },
          {
            Icon: BiLogoTailwindCss,
            name: "Tailwind CSS",
            color: "text-cyan-500",
            duration: 2.5,
          },
          { Icon: SiSass, name: "Sass", color: "text-pink-500", duration: 3.5 },
        ].map(({ Icon, name, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="group relative flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 p-4 shadow-md transition-all hover:scale-105 hover:border-opacity-50 hover:shadow-lg"
          >
            <Icon
              className={`text-6xl ${color} transition-transform group-hover:rotate-6`}
            />
            <span className="absolute -bottom-10 scale-0 rounded-md bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
