import { CONTACT, LINKEDIN } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center text-4xl font-extrabold text-white mb-8 mt-3"
      >
        Let's Connect! <span className="text-blue-500"></span>
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="text-center text-gray-400 mb-8 text-lg"
      >
        Feel free to reach out for collaborations, opportunities, or just a
        chat!
      </motion.p>

      <div className="flex flex-col items-center space-y-6">
        {[
          {
            icon: <FaPhoneAlt className="text-blue-400" />,
            text: CONTACT.phoneNo,
            href: `tel:${CONTACT.phoneNo}`,
          },
          {
            icon: <FaEnvelope className="text-red-400" />,
            text: CONTACT.email,
            href: `mailto:${CONTACT.email}`,
          },
          {
            icon: <FaLinkedin className="text-blue-500" />,
            text: "Connect on LinkedIn",
            href:LINKEDIN,
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4 bg-[#1e1e1e] px-6 py-3 w-80 h-16 rounded-lg border border-gray-700 text-gray-300 shadow-md transition transform hover:scale-105 hover:shadow-lg"
          >
            {item.icon}
            <span className="text-lg">{item.text}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
