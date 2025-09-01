import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ScrollRevealProps = {
    children: ReactNode;
    delay?: number;
};

const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;