import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Parent container variant to stagger desktop links
    const navContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // Individual link variant
    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const menuVariants = {
        closed: { 
            clipPath: "circle(0% at 90% 5%)",
            transition: { type: "spring", stiffness: 400, damping: 40 }
        },
        opened: { 
            clipPath: "circle(150% at 90% 5%)",
            transition: { type: "spring", stiffness: 20, restDelta: 2 }
        }
    };

    const navItems = ['HOME', 'CLUBS', 'EVENTS', 'CONNECT'];

    return (
        <header className="relative flex justify-between items-center py-6 px-4 lg:px-20 text-white z-[100]">
            
            {/* Logo and Title - Animates in from the left */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 z-50"
            >
                <Link to="/" className="hover:opacity-80 transition-opacity">
                    <img 
                        src="/WebAssets/logo.png" 
                        alt="Logo" 
                        className="h-8 md:h-12 w-auto object-contain"
                    />
                </Link>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light m-0 tracking-tighter">
                    TECH FEST
                </h1>
            </motion.div>

            {/* Desktop Navigation - Staggered entrance */}
            <motion.nav 
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className="hidden md:flex items-center gap-12 ml-auto"
            >
                {navItems.map((item) => (
                    <motion.div key={item} variants={linkVariants}>
                        <Link 
                            to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} 
                            className="relative text-sm tracking-[0.2em] transition-colors hover:text-[#e99b63] group"
                        >
                            {item}
                            {/* Animated underline effect */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e99b63] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </motion.div>
                ))}
            </motion.nav>

            {/* Mobile Toggle Button */}
            <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsOpen(!isOpen)} 
                className='md:hidden text-3xl p-2 z-[60] flex items-center justify-center focus:outline-none'
            >
                <motion.i 
                    animate={{ 
                        rotate: isOpen ? 90 : 0,
                        scale: isOpen ? 1.2 : 1
                    }} 
                    className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} 
                />
            </motion.button>

            {/* Mobile Menu Overlay - Reveal animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        variants={menuVariants} 
                        initial="closed" 
                        animate="opened" 
                        exit="closed" 
                        className="fixed inset-0 z-[40] bg-[#0a0a0a] flex flex-col items-center justify-center"
                    >
                        <nav className='flex flex-col gap-8 items-center'>
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <Link 
                                        to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} 
                                        onClick={() => setIsOpen(false)} 
                                        className="text-3xl tracking-[0.3em] font-light hover:text-[#e99b63] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;