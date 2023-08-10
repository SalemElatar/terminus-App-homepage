"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RxActivityLog } from "react-icons/rx";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import Link from "next/link";
import { slideIn } from "../utils/motion";

const NavDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenu.Trigger
        className="bg-transparent border-0"
        style={{ outline: 0 }}
      >
        <RxActivityLog size={35} color="#fff" />
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {dropdownOpen && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              asChild
              loop
              sideOffset={5}
              align="end"
              className="position-relative px-2"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.3, 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <DropdownMenu.Item className="transition_all_04 border-end pe-3 py-2 outline-0 dropdown_item">
                  <Link href="/">About</Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item className="transition_all_04 border-end pe-3 py-2 outline-0 dropdown_item">
                  <Link href="/">Get Started</Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item className="transition_all_04 border-end pe-3 py-2 outline-0 dropdown_item">
                  <Link href="/">What's New</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="transition_all_04 border-end pe-3 py-2 outline-0 dropdown_item">
                  <Link href="/">Feedback</Link>
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};

export default NavDropdown;
