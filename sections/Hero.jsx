"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="container py-5 my-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="container-fluid d-flex flex-column position-relative"
      >
        <motion.div
          variants={textVariant(1)}
          className="text-center fw-bold z-2 position-relative mt-5"
        >
          <h3 className="h1">feel the rhythm of the night</h3>
          <h3
            className="user-select-none d-inline-block text-uppercase fw-bolder mb-0"
            style={{ fontSize: 82 }}
          >
            as you e
          </h3>
          <div className="d-inline-block">
            <div className="cross_letter position-relative"></div>
          </div>

          <h3
            className=" d-inline-block text-uppercase fw-bolder mb-0 user-select-none "
            style={{ fontSize: 82 }}
          >
            plore
          </h3>
        </motion.div>

        <motion.div
          className="position-relative w-100"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <div
            className="position-absolute hero-gradient w-100"
            style={{ height: 300, top: -20, left: 0, borderTopLeftRadius: 200 }}
          />
          <img
            src="/cover2.jpg"
            alt="Cover"
            className="w-100 object-fit-cover z-3 position-relative"
            style={{ height: 450, borderTopLeftRadius: 200 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
