import React, { ReactNode, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type ScrollRevealProps = {
    children: ReactNode;
    delay?: number;
};

const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const variants = {
        hidden: { 
            opacity: 0, 
            y: isMobile ? 30 : 60,
            scale: isMobile ? 0.98 : 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: isMobile ? 0.5 : 0.7,
                delay: isMobile ? delay * 0.5 : delay,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ 
                once: true, 
                amount: isMobile ? 0.08 : 0.15, 
                margin: isMobile ? "0px 0px -50px 0px" : "0px 0px -100px 0px" 
            }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
