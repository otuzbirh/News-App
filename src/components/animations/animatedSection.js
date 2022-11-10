import React, { forwardRef } from 'react';
import { motion } from "framer-motion"
import { Box } from "@mui/material"

const BoxRef = forwardRef((props, ref) => <Box component="section" ref={ref} {...props} />)

const AnimatedBox = motion(BoxRef, { forwardMotionProps: false })

const sectionAnimation = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const AnimatedSection = (props) => {

  return <AnimatedBox variants={sectionAnimation} initial="initial" animate="animate" {...props} />
}

export default AnimatedSection