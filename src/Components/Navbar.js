import React, { useState } from 'react';
import { Search, Heart } from 'lucide-react';
import RolexLogo from '../Images/Logo/rolex-special-logo-removebg-preview.png'
import Mappin from '../Images/Icons/MapIcon.svg'
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <div className="relative ">
      <nav className="bg-[#006039] text-white" style={{ background: 'linear-gradient(90deg, #0b3e27, #197149)' }}>
        <div className="max-w-full mx-auto md:px-20">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Left Section - Menu */}
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-[#007346] transition-colors duration-200 flex items-center"
              >
                <div className="relative flex flex-col gap-1 w-5 items-center justify-center h-4">
                  <span className={`absolute w-3 h-[1px] bg-white block transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-[6px]' : 'rotate-0 top-[5px]'}`}></span>
                  <span className={`absolute w-3 h-[1px] bg-white block transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-[6px]' : 'rotate-0 top-[10px]'}`}></span>
                </div>
                <span className="text-xxs font-medium hidden md:block">Menu</span>
              </button>
            </div>

            {/* Center Section - Logo */}
            <div className="flex justify-center items-center" href='/'>
              <img
                
                src={RolexLogo}
                alt="Rolex Logo"
                className="h-9 object-contain"
              />
            </div>

            {/* Right Section - Icons */}
            <div className="flex justify-end items-center space-x-6 md:space-x-10">
              <button onClick={toggleSearch} className="flex items-center space-x-1 hover:text-[#CCA355] transition-colors duration-200 group">
                <Search className="h-4 w-4 md:h-3 md:w-3 group-hover:scale-110 transition-transform duration-200" strokeWidth={3} />
                <span className="text-xxs font-medium  hidden md:block">Search</span>
              </button>

              <button className="flex items-center space-x-1 hover:text-[#CCA355] transition-colors duration-200 group">
                <img src={Mappin} alt="" className='h-3 w-3 group-hover:scale-110 transition-transform duration-200' />
                <span className="text-xxs font-medium  hidden md:block">Store Locator</span>
              </button>

              <button className="flex items-center space-x-1 hover:text-[#CCA355] transition-colors duration-200 group">
                <Heart className="h-4 w-4 md:h-3 md:w-3 group-hover:scale-110 transition-transform duration-200" strokeWidth={4} />
                <span className="text-xxs font-medium  hidden md:block">Favorites</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar with Animation */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full overflow-hidden border-t border-[#197149]"
              style={{ background: 'linear-gradient(90deg, #0b3e27, #197149)' }}
            >
              <div className="py-4 px-4">
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Rolex"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-[#CCA355]"
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/60" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Dropdown with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full overflow-hidden border-t border-[#197149]"
              style={{ background: 'linear-gradient(90deg, #0b3e27, #197149)' }}
            >
              <div className="py-6 px-4 md:px-12">
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-[#CCA355] text-xxs font-medium mb-4">WATCHES</h3>


                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        to="/watch2024"
                        className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      >
                        New Watches 2024
                      </Link>
                    </motion.div>

                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Configure your Watch
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Men's Watches
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Women's Watches
                    </motion.a>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[#CCA355] text-xxs font-medium mb-4">COLLECTIONS</h3>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Rolex Datejust
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Rolex Daytona
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Rolex Submariner
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      View All Collections
                    </motion.a>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[#CCA355] text-xxs font-medium mb-4">WORLD OF ROLEX</h3>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Our History
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Sports & Yachting
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Partnerships
                    </motion.a>
                    <motion.a
                      href="/"
                      className="block text-white text-xxs font-light hover:text-[#CCA355] transition-colors duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      News & Events
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;