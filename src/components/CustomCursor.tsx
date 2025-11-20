import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <motion.div
                className="custom-cursor hidden md:block"
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
            <motion.div
                className="fixed w-1 h-1 bg-cyan-400 rounded-full pointer-events-none z-[9998] hidden md:block"
                style={{
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
                }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 35,
                    mass: 0.2,
                }}
            />
        </>
    );
};

export default CustomCursor;
