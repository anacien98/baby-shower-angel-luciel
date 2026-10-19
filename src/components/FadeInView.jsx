import React from 'react';
import { motion } from 'framer-motion';

export const FadeInView = ({ children, delay = 0 }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ 
            duration: 0.8, 
            delay: delay, 
            ease: [0.25, 0.1, 0.25, 1.0] 
        }}
        >
        {children}
        </motion.div>
    );
};