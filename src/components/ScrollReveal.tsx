import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ScrollRevealProps = {
    children: ReactNode;
    delay?: number;
};

const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
    const variants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
