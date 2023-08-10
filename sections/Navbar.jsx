"use client";

import { motion } from "framer-motion";
import { fadeFromTop } from "../utils/motion";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import Link from "next/link";
import NavDropdown from "../components/NavDropdown";

const Navbar = () => {
  return (
    <motion.nav
      className="py-3 position-relative"
      variants={fadeFromTop}
      initial="hidden"
      whileInView="show"
    >
      <div className="position-absolute z-0 w-50 top-0 start-0 bottom-0 end-0 gradient-01" />

      <div className="container">
        <div className="row row-cols-3">
          <div className="col z-3">
            <Link href="/" title="Download Now">
              <BsFillCloudDownloadFill size="35" />
            </Link>
          </div>

          <div className="col text-center z-3">
            <motion.h2
              className="text-uppercase m-0 fw-bolder"
              whileHover={{ scale: [1, 1.2, 1, 1.2, 1, 1.2] }}
            >
              <Link href="/">Terminus</Link>
            </motion.h2>
          </div>

          <div className="col text-end">
            <NavDropdown />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
