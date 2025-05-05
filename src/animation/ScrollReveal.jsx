import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
