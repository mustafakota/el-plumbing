import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../components/Navbar.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="container navbar-container">
          <a href="/" className="logo">
            EL Plumbing<span className="logo-dot">.</span>
          </a>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#products">Products</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <a href="#quote" className="nav-cta desktop-only">Request a Quote</a>
            
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="mobile-nav-footer">
          <a href="#quote" className="nav-cta full-width-cta" onClick={() => setMenuOpen(false)}>
            Request a Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
