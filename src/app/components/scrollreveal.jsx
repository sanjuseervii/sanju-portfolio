"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      // 1. first 0 opacity and 50px down
      initial={{ opacity: 0, y: 50 }}
      
//now full orignal
      whileInView={{ opacity: 1, y: 0 }}
      
      //animation duration and easing
      transition={{ duration: 0.8, ease: "easeOut" }}
      
      // 2. only animate once when it enters the viewport and trigger when 20% of the component is visible
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;