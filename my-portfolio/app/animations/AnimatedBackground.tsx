'use client';

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
        {/* Geometric network pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-50">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          {/* Animated lines */}
          <motion.line
            x1="10%" y1="10%" x2="40%" y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="40%" y1="30%" x2="70%" y2="20%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.line
            x1="70%" y1="20%" x2="90%" y2="40%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          <motion.line
            x1="20%" y1="60%" x2="50%" y2="70%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
          />
          <motion.line
            x1="50%" y1="70%" x2="80%" y2="80%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.3, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
          />
          <motion.line
            x1="30%" y1="40%" x2="60%" y2="60%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.6, repeat: Infinity, repeatType: "reverse", delay: 1.2 }}
          />
          {/* Connection nodes */}
          <motion.circle cx="10%" cy="10%" r="3" fill="#22C55E"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle cx="40%" cy="30%" r="3" fill="#3B82F6"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle cx="70%" cy="20%" r="3" fill="#22C55E"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
          />
          <motion.circle cx="90%" cy="40%" r="3" fill="#3B82F6"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle cx="20%" cy="60%" r="3" fill="#22C55E"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.3, repeat: Infinity, delay: 0.8 }}
          />
          <motion.circle cx="50%" cy="70%" r="3" fill="#3B82F6"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: 1.2 }}
          />
          <motion.circle cx="80%" cy="80%" r="3" fill="#22C55E"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 }}
          />
          <motion.circle cx="30%" cy="40%" r="3" fill="#3B82F6"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.7, repeat: Infinity, delay: 1.5 }}
          />
          <motion.circle cx="60%" cy="60%" r="3" fill="#22C55E"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.1, repeat: Infinity, delay: 0.9 }}
          />
        </svg>
      </div>
  );
}
