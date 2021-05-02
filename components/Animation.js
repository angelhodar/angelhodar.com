import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Animation = (props) => {
  const {
    initialState = { opacity: 0 },
    finalState = { opacity: 1 },
    duration = 0.5,
    showWhenVisible = true,
    children,
  } = props;

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView || !showWhenVisible) controls.start(finalState);
  }, [controls, inView, initialState]);

  return (
    <motion.div
      initial={initialState}
      animate={controls}
      transition={{ duration }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
