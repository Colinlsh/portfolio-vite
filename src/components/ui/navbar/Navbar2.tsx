import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../ScrollObserver";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { setIsCMS } from "../../../app/slice/uiStateSlice";

const Navbar2 = () => {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavBar = () => setNav(!nav);

  const { scrollY } = useContext(ScrollContext);

  const navItemContainerTransition = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const navItemTransition = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const controlNavbar = () => {
    if (scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar

      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      controlNavbar();
    }
  }, [scrollY]);

  // dashboard
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname.includes("cms")) {
      dispatch(setIsCMS(true));
    } else {
      dispatch(setIsCMS(false));
    }
  }, [location]);

  return (
    <div
      className={`flex font-ubuntu fixed w-full z-50 min-h-fit h-20 dark:text-white text-black`}
    >
      <div
        className={`absolute flex justify-around top-0 right-0 items-center h-full w-full font-bold transition-transform duration-500  ${
          show !== true ? "-translate-y-full" : ""
        }`}
      >
        <div className="h-full flex select-none items-center justify-start ">
          <h1
            className="cursor-pointer"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            COLIN LEE
          </h1>
        </div>
        <div className="lg:flex hidden justify-center text-center h-full select-none items-center font-thin">
          <h1>Currently Research Engineer at SIT</h1>
        </div>
        <div className="h-full justify-end items-center gap-5 lg:flex hidden ">
          <div>
            <Link
              to="resume"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer flex items-center hover:scale-125 transition-transform"
            >
              Resume
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer flex items-center hover:scale-125 transition-transform"
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
              className="cursor-pointer flex items-center hover:scale-125 transition-transform"
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
              className="cursor-pointer flex items-center hover:scale-125 transition-transform"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="lg:w-[40%] w-[50%] flex justify-end items-center lg:hidden ">
          <div className="" onClick={() => handleNavBar()}>
            <HiMenuAlt1
              size={25}
              className={`fixed transition-all duration-500  ${
                !nav ? "scale-1 rotate-360" : "scale-0"
              }`}
            />
            <AiOutlineClose
              size={25}
              className={`transition-all duration-500 ${
                !nav ? "scale-0" : "scale-1 rotate-180"
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute h-screen w-screen bg-white dark:bg-customDark dark:text-white text-customDark z-50 bottom-full p-10 lg:py-11 lg:px-44 transition-transform duration-500 flex flex-col ${
          nav === true ? "translate-y-full" : ""
        }`}
      >
        <div className="flex justify-end" onClick={() => handleNavBar()}>
          <HiMenuAlt1
            size={25}
            className={`fixed transition-all duration-500  ${
              !nav ? "scale-1 rotate-360" : "scale-0"
            }`}
          />
          <AiOutlineClose
            size={25}
            className={`transition-all duration-500 ${
              !nav ? "scale-0" : "scale-1 rotate-180"
            }`}
          />
        </div>
        <motion.ul
          className={`rounded-lg space-y-5 transition-transform duration-500 font-bold h-[80%] flex flex-col justify-end items-start text-2xl`}
          variants={navItemContainerTransition}
          initial="hidden"
          animate={nav ? "show" : "hidden"}
        >
          <motion.li variants={navItemTransition}>
            <div
              className="cursor-pointer flex items-center justify-start space-x-3 w-full h-full lg:px-10"
              onClick={() => {
                handleNavBar();
                scroll.scrollToTop();
              }}
            >
              <h1>Home</h1>
            </div>
          </motion.li>
          <motion.li variants={navItemTransition}>
            <Link
              to="resume"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer flex items-center justify-start space-x-3 w-full h-full lg:px-10"
              onClick={() => {
                handleNavBar();
              }}
            >
              <h1>Resume</h1>
            </Link>
          </motion.li>
          <motion.li variants={navItemTransition}>
            <Link
              to="projects"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer flex items-center justify-start space-x-3 w-full h-full lg:px-10"
              onClick={() => {
                handleNavBar();
              }}
            >
              <h1>Projects</h1>
            </Link>
          </motion.li>
          <motion.li variants={navItemTransition}>
            <Link
              to="techstacks"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer flex items-center justify-start space-x-3 w-full h-full lg:px-10"
              onClick={() => {
                handleNavBar();
              }}
            >
              <h1>TechStacks</h1>
            </Link>
          </motion.li>
          <motion.li variants={navItemTransition}>
            <Link
              to="contact"
              offset={0}
              duration={500}
              smooth={true}
              className="cursor-pointer flex items-center justify-start space-x-3 w-full h-full lg:px-10"
              onClick={() => {
                handleNavBar();
              }}
            >
              <h1>Contact</h1>
            </Link>
          </motion.li>
          <motion.li variants={navItemTransition}>
            <div className="flex justify-start text-start w-[50%] select-none items-start text-xl font-thin">
              <h1>Currently Research Engineer at SIT</h1>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar2;
