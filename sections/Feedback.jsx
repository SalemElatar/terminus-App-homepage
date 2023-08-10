"use client";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className="container my-5 py-5">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="row row-cols-1 row-cols-md-3"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="col mb-3"
      >
        <div className="position-relative rounded-5 gradient-05 p-3 p-sm-5">
          <div className="feedback-gradient" />

          <div>
            <h4 className="fw-bold lead ">person 1</h4>
            <p className="mt-3 fw-normal">Founder Terminus</p>
          </div>

          <p className="mt-5 fw-normal">
            “With the development of today's technology, Terminus is very useful
            for today's work, you can involve at any community”
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="col mb-3"
      >
        <div className="position-relative rounded-5 gradient-05 p-3 p-sm-5">
          <div className="feedback-gradient" />

          <div>
            <h4 className="fw-bold lead ">person</h4>
            <p className="mt-3 fw-normal">his title</p>
          </div>

          <p className="mt-5 fw-normal">
            “With the development of today's technology, Terminus is very useful
            for today's work, you can involve at any community”
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="col mb-3"
      >
        <div className="position-relative rounded-5 gradient-05 p-3 p-sm-5">
          <div className="feedback-gradient" />

          <div>
            <h4 className="fw-bold lead ">person</h4>
            <p className="mt-3 fw-normal">his title</p>
          </div>

          <p className="mt-5 fw-normal">
            “With the development of today's technology, Terminus is very useful
            for today's work, you can involve at any community”
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
