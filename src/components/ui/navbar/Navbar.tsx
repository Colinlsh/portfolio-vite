import { useContext, useRef, useState } from "react";
import { ScrollContext } from "../ScrollObserver";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavBar = () => setNav(!nav);

  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div
      className={`flex bg-transparent transition-all duration-100 drop-shadow-md font-ubuntu ${
        progress === 1
          ? "fixed top-10 right-10 md:right-44 md:top-10 z-50 rounded-lg"
          : "relative w-full z-50"
      }`}
      ref={refContainer}
    >
      <div
        className={`absolute flex justify-around top-full right-0 px-10 py-5 md:pt-11 md:px-44 items-center h-fit w-full font-bold ${
          progress === 1 ? "-top-52" : ""
        }`}
      >
        <div className="w-full h-full flex select-none">
          <h1 className="h-full w-full">COLIN LEE</h1>
        </div>
        <div className="md:w-[50%] flex justify-center md:text-center text-end w-full h-full select-none items-center">
          <h1>Currently Blockchain Research Engineer at SIT</h1>
        </div>
        <div className="w-full h-full justify-end space-x-3 md:flex hidden">
          <div>
            <Link
              to="projects"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer text-black flex items-center hover:scale-125 transition-transform"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              to="techstacks"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer text-black flex items-center hover:scale-125 transition-transform"
            >
              TechStacks
            </Link>
          </div>

          <div>
            <Link
              to="contact"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer text-black flex items-center hover:scale-125 transition-transform"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`px-3 py-2 justify-between items-center w-auto bg-white border-thin border-customPrimary bg-opacity-95 rounded-lg h-full backdrop-blur-xl ${
          progress === 1 ? "flex relative" : "hidden"
        }`}
        onClick={() => handleNavBar()}
      >
        <div
          className={`justify-around items-center transition-width ease-out duration-500 cursor-pointer  bg-opacity-80 `}
        >
          <div>
            <HiMenuAlt1
              size={20}
              className={`fixed text-black transition-all duration-500  ${
                !nav ? "scale-1 rotate-360" : "scale-0"
              }`}
            />
            <AiOutlineClose
              size={20}
              className={`text-black transition-all duration-500 ${
                !nav ? "scale-0" : "scale-1 rotate-180"
              }`}
            />
          </div>
        </div>
        <motion.ul
          className={`absolute w-30 top-10 -right-48 bg-customPrimary rounded-lg space-y-5 transition-transform p-5 md:w-52 md:-right-[30rem] md:py-10 font-bold ${
            nav ? "-translate-x-48 md:-translate-x-[30rem]" : ""
          }`}
          transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
        >
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <div
              className="cursor-pointer text-white flex items-center justify-start space-x-3 w-full h-full md:px-10"
              onClick={() => {
                handleNavBar();
                scroll.scrollToTop();
              }}
            >
              <h1>Home</h1>
            </div>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="projects"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer text-white flex items-center justify-start space-x-3 w-full h-full md:px-10"
              onClick={() => {
                handleNavBar();
              }}
            >
              <h1>Projects</h1>
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="techstacks"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer text-white flex items-center justify-start space-x-3 w-full h-full md:px-10"
              onClick={() => {
                handleNavBar();
              }}
            >
              <h1>TechStacks</h1>
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="contact"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer text-white flex items-center justify-start space-x-3 w-full h-full md:px-10"
              onClick={() => {
                handleNavBar();
              }}
            >
              <h1>Contact</h1>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
