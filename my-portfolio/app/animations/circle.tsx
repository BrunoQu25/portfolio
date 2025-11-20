import { motion } from 'framer-motion';

export default function Circle() {
    return (
          <motion.div 
            className="flex-shrink-0 relative w-32 h-32"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <svg width="128" height="128" viewBox="0 0 128 128">
              <defs>
                <radialGradient id="sphereGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0.1" />
                </radialGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              
              {/* Background sphere glow */}
              <circle
                cx="64"
                cy="64"
                r="45"
                fill="url(#sphereGradient)"
                opacity="0.2"
              />
              
              {/* Network nodes - outer ring */}
              <motion.circle cx="64" cy="19" r="3" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.circle cx="93" cy="31" r="3" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.circle cx="109" cy="64" r="3" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
              <motion.circle cx="93" cy="97" r="3" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
              />
              <motion.circle cx="64" cy="109" r="3" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              />
              <motion.circle cx="35" cy="97" r="3" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
              <motion.circle cx="19" cy="64" r="3" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
              />
              <motion.circle cx="35" cy="31" r="3" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2.1 }}
              />
              
              {/* Network nodes - middle ring */}
              <motion.circle cx="64" cy="34" r="2.5" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }}
              />
              <motion.circle cx="88" cy="46" r="2.5" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
              />
              <motion.circle cx="94" cy="64" r="2.5" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }}
              />
              <motion.circle cx="88" cy="82" r="2.5" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 1.1 }}
              />
              <motion.circle cx="64" cy="94" r="2.5" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 1.4 }}
              />
              <motion.circle cx="40" cy="82" r="2.5" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 1.7 }}
              />
              <motion.circle cx="34" cy="64" r="2.5" fill="#3B82F6"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 2 }}
              />
              <motion.circle cx="40" cy="46" r="2.5" fill="#22C55E"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.1 }}
              />
              
              {/* Central hub */}
              <motion.circle
                cx="64"
                cy="64"
                r="6"
                fill="url(#lineGradient)"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Network connections - animated lines */}
              {/* From center to middle ring */}
              <motion.line x1="64" y1="64" x2="64" y2="34" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />
              <motion.line x1="64" y1="64" x2="88" y2="46" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.line x1="64" y1="64" x2="94" y2="64" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              />
              <motion.line x1="64" y1="64" x2="88" y2="82" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.1 }}
              />
              <motion.line x1="64" y1="64" x2="64" y2="94" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              />
              <motion.line x1="64" y1="64" x2="40" y2="82" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.7 }}
              />
              <motion.line x1="64" y1="64" x2="34" y2="64" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              />
              <motion.line x1="64" y1="64" x2="40" y2="46" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              />
              
              {/* From middle ring to outer ring */}
              <motion.line x1="64" y1="34" x2="64" y2="19" stroke="#22C55E" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
              />
              <motion.line x1="88" y1="46" x2="93" y2="31" stroke="#3B82F6" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.line x1="94" y1="64" x2="109" y2="64" stroke="#22C55E" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
              />
              <motion.line x1="88" y1="82" x2="93" y2="97" stroke="#3B82F6" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.9 }}
              />
              <motion.line x1="64" y1="94" x2="64" y2="109" stroke="#22C55E" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
              />
              <motion.line x1="40" y1="82" x2="35" y2="97" stroke="#3B82F6" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
              />
              <motion.line x1="34" y1="64" x2="19" y2="64" stroke="#22C55E" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
              />
              <motion.line x1="40" y1="46" x2="35" y2="31" stroke="#3B82F6" strokeWidth="0.8" opacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 2.1 }}
              />
              
              {/* Cross connections between middle ring nodes */}
              <motion.line x1="64" y1="34" x2="88" y2="46" stroke="#22C55E" strokeWidth="0.5" opacity="0.2"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
              />
              <motion.line x1="88" y1="46" x2="94" y2="64" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
              />
              <motion.line x1="94" y1="64" x2="88" y2="82" stroke="#22C55E" strokeWidth="0.5" opacity="0.2"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
              />
              <motion.line x1="88" y1="82" x2="64" y2="94" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.6 }}
              />
              <motion.line x1="64" y1="94" x2="40" y2="82" stroke="#22C55E" strokeWidth="0.5" opacity="0.2"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              <motion.line x1="40" y1="82" x2="34" y2="64" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2.4 }}
              />
              
              {/* Rotating orbit rings */}
              <motion.ellipse
                cx="64"
                cy="64"
                rx="45"
                ry="45"
                fill="none"
                stroke="#22C55E"
                strokeWidth="0.5"
                strokeDasharray="3 3"
                opacity="0.2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "64px 64px" }}
              />
              <motion.ellipse
                cx="64"
                cy="64"
                rx="30"
                ry="30"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                opacity="0.2"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "64px 64px" }}
              />
            </svg>
          </motion.div>
    );
}