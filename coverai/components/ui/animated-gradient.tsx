"use client";

import { motion } from "framer-motion";

export function AnimatedGradient() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(6,182,212,0.1),transparent)]" />
    </motion.div>
  );
}