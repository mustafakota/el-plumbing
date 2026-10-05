import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
          
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#products" onClick={toggleMobileMenu}>Products</a></li>
          <li><a href="#solutions" onClick={toggleMobileMenu}>Solutions</a></li>
          <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
          <li><a href="#gallery" onClick={toggleMobileMenu}>Gallery</a></li>
          <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
        </ul>
        <div className="mobile-nav-footer">
          <a href="#quote" className="nav-cta full-width-cta" onClick={toggleMobileMenu}>
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
