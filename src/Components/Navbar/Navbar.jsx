import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 fixed top-0 w-full z-50 bg-black bg-opacity-80"
      >
        <span className="text-xl font-bold tracking-wide">Portfolio</span>

        <ul
          className={`${
            menu ? "block" : "hidden"
          }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
        >
          <a href="#About">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              About
            </li>
          </a>
          <a href="#Experience">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Experience
            </li>
          </a>
          <a href="#Projects">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Projects
            </li>
          </a>
          <a href="#Footer">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Contact
            </li>
          </a>
        </ul>
        {showMenu ? (
          <RiMenu2Line
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenu);
            }}
          />
        ) : (
          <RiCloseLine
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
          />
        )}
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
