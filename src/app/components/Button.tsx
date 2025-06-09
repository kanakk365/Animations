"use client";
import { motion } from "motion/react";

function Button() {
  return (
    <motion.button
      whileHover={{
        rotateX: 25,
        rotateY: 10,
        boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
      }}
      style={{
        translateZ: 100,
      }}
      transition={{
        duration: "0.3",
        ease: "easeInOut",
      }}
      className=" group relative bg-black text-neutral-500 px-12 py-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] "
    >
      <span className="group-hover:text-cyan-500 transition-colors duration-300" >Hello</span>
      <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto  "></span>
      <span className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm ">
        {" "}
      </span>
    </motion.button>
  );
}

export default Button;
