"use client";

import { motion } from "framer-motion";
import { fadeFromTop, fadeIn, staggerContainer } from "../utils/motion";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineGroups2 } from "react-icons/md";

const World = () => (
  <section className={`container mt-5 py-5 position-relative z-3`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <motion.h2 variants={fadeFromTop} className="text-center">
        Track friends around you and invite them to join togther in the same
        community
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="position-relative mt-4 w-100"
        style={{ height: 550 }}
      >
        <div className="position-absolute z-n1 w-100 top-0 start-0 bottom-0 end-0 gradient-03" />

        <img
          src="/map.png"
          alt="map"
          className="w-100 h-100 object-fit-cover z-1"
        />

        <div
          className="position-absolute glassmorphism p-3 rounded-circle"
          style={{ bottom: 65, right: 60 }}
        >
          <MdOutlineGroups2 size={50} />
        </div>

        <div
          className="position-absolute glassmorphism p-3 rounded-circle"
          style={{ top: 50, left: 150 }}
        >
          <FaPeopleGroup size={50} />
        </div>

        <div className="position-absolute top-50 start-50 glassmorphism p-3 rounded-circle">
          <FaPeopleGroup size={50} />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
