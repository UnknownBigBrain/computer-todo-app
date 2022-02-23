// Main
import React from "react";
import { AppBar, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import NavBar from "./Navbar";

// Types
interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const variants = {
    hidden: { opacity: 0, y: -200, x: 0 },
    enter: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: 0, x: -100 },
  };

  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className=""
    >
      <Box className="min-h-screen py-4 bg-black bg-opacity-50">
        <img
          src="./bg.jpg"
          className="fixed w-full h-full top-0 left-0 bottom-0 right-0 z-[-1] cover"
        />
        {/* <NavBar /> */}

        <Box pb="40px" className="w-[100%] md:w-[70%] mx-auto">
          {children}
        </Box>
      </Box>
    </motion.main>
  );
};

export default Layout;
