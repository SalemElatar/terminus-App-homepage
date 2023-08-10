"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textContainer,
  textVariant2,
} from "../utils/motion";

const About = () => (
  <motion.section
    className="flex-center flex-column container-md px-md-5 py-3 my-5 position-relative"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <motion.p variants={textContainer} className="fw-medium lead">
      <motion.span
        className="me-2 text-accent"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
      {Array.from(`About Terminus`).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>

    <motion.p
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="text-center fw-bold px-5 lh-lg lead"
    >
      <span className="fw-bolder">Terminus</span> brings people together from
      all corners of the world, fostering a community of{" "}
      <span className="fw-bolder">like-minded</span> souls who appreciate the
      beauty of the night. 🌠
      <span className="fw-bolder">Share</span> your thoughts, your passions, and
      your creativity through posts, images, and videos Connect with fellow
      night enthusiasts, artists, writers, and visionaries in an ambiance that
      perfectly complements the nocturnal spirit.
    </motion.p>

    <div className="gradient-03 z-0" />
  </motion.section>
);

export default About;
