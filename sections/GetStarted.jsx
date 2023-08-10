"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeFromTop,
  rotateVariant,
  staggerContainer,
  zoomIn,
} from "../utils/motion";
import { startingFeatures } from "../constants";
import { RxRocket } from "react-icons/rx";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="position-relative z-3 container py-5 mb-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="row"
      >
        <motion.div
          variants={rotateVariant("left")}
          className="col-12 col-md-6 text-center mb-3"
        >
          <RxRocket size="300" color="rgb(250, 190, 92)" />
        </motion.div>
        <div className="col-12 col-md-6 d-flex justify-center flex-column">
          <div className="d-flex justify-content-between mb-3">
            <motion.p variants={zoomIn(0.3, 0.5)}>
              | How Terminus Works
            </motion.p>
            <Link href="#" className="me-md-4">
              <motion.button
                variants={zoomIn(0.4, 0.5)}
                className=" btn btn-primary"
              >
                Get started
              </motion.button>
            </Link>
          </div>
          <motion.h3
            className="h1 fw-bolder text-md-start text-center"
            variants={fadeFromTop}
          >
            Get started with just a few clicks
          </motion.h3>
          <div className="mt-3 row">
            {startingFeatures.map((feature, index) => (
              <motion.div
                variants={fadeIn(
                  index % 2 == 0 ? "left" : "right",
                  "tween",
                  0.7,
                  0.5
                )}
                key={index}
                className="mb-3 col-12 col-md-6 px-5"
              >
                <div className="row flex-center ">
                  <div className="flex-center p-3 col-3 rounded-3 glassmorphism">
                    <p className="fw-bold m-0">{`${index < 10 ? "0" : ""} ${
                      index + 1
                    }`}</p>
                  </div>
                  <p className="col-9">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
