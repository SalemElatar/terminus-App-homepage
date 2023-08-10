"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  zoomIn,
  fadeFromTop,
  rotateVariant,
} from "../utils/motion";

const WhatsNew = () => {
  const newFeatures = [
    {
      imgUrl: "/vrpano.svg",
      title: "A new world",
      subtitle: "we have the latest update with new features for you to try",
    },
    {
      imgUrl: "/headset.svg",
      title: "More modern",
      subtitle: "In the latest update, you got the latest modern experince",
    },
  ];

  return (
    <section className="position-relative z-3 container py-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="row row-cols-2"
      >
        <div className="col-12 col-md-6 d-flex justify-center flex-column">
          <motion.p variants={zoomIn(0.3, 0.5)} className="">
            | Whats new?
          </motion.p>
          <motion.h3 className="h1 fw-bolder" variants={fadeFromTop}>
            What's new about Metaversus?
          </motion.h3>
          <div className="mt-4 row row-cols-2">
            {newFeatures.map((feature, index) => (
              <motion.div variants={fadeFromTop} className="col" key={index}>
                <motion.div
                  variants={zoomIn(0.7, 0.6)}
                  className="rounded-5 glassmorphism d-inline-block p-3"
                  style={{ width: 80, height: 80 }}
                >
                  <img
                    src={feature.imgUrl}
                    alt="icon"
                    className="w-100 h-100 object-fit-contain"
                  />
                </motion.div>
                <h3 className="mt-4 fw-bold">{feature.title}</h3>
                <p className="lead">{feature.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          variants={rotateVariant("right")}
          className="col-12 col-md-6 text-center"
        >
          <img
            src="/sunAndDesert.jpg"
            alt="get-started"
            className="sunAndDesertImg img-fluid object-fit-contain"
            style={{ borderRadius: 100, height: "480px" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
