"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerVariants, zoomIn } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="container position-relative"
  >
    <div className="d-flex align-items-center justify-content-between flex-column flex-md-row mb-4">
      <h2 className="text-center text-md-left" style={{ fontSize: 48 }}>
        Join Terminus now
      </h2>
      <Link href="#" className="me-md-4">
        <motion.button
          variants={zoomIn(0.4, 0.5)}
          className="btn btn-primary fs-5 text-uppercase"
        >
          Get started
        </motion.button>
      </Link>
    </div>
    <hr />
    <div className="row row-cols-1 gap-3 row-cols-md-3 gap-md-0 pt-3 pb-5">
      <div className="text-start">
        <motion.h2
          className="text-uppercase m-0 fw-bolder"
          whileHover={{ scale: [1, 1.2, 1, 1.2, 1, 1.2] }}
        >
          <Link href="/">Terminus</Link>
        </motion.h2>
      </div>
      <div className="text-center">
        <p className="mb-0 fw-normal opacity-50">
          Copyright © 2022 - 2023 Terminus. All rights reserved.
        </p>
      </div>
      <div className="text-end">
        {socials().map((social) => (
          <Link href="#" key={social.name}>
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  </motion.footer>
);

export default Footer;
