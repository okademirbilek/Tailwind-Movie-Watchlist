import React from "react";
import { motion } from "framer-motion";
const styleContainer = {
  position: "relative",
  width: 50,
  height: 50,
};

const styleSpan = {
  display: "block",
  width: 50,
  height: 50,
  border: "7px solid #eee",
  borderTop: "7px solid #2D3134",
  borderRadius: "50%",
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  left: 0,
};

const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  duration: 1,
};

const LoadingDisplay = () => {
  return (
    <div className="flex items-center justify-center container mx-auto">
      <div className="flex gap-2 flex-col items-center justify-center w-[175px] h-[275px]  min-[420px]:w-[200px] min-[420px]:h-[300px] ">
        <div style={styleContainer}>
          <motion.span
            style={styleSpan}
            animate={{ rotate: 360 }}
            transition={spinTransition}
          />
        </div>
        <h2>Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingDisplay;
