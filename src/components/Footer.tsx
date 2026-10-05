
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          <div>
            <div className="footer-logo">EL PLUMBING.</div>
            <div className="footer-sub">PLUMBING • SANITARY • BUILDING MATERIALS</div>
          </div>
          
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">[PHONE]</a></li>
              <li><a href="#">[WHATSAPP]</a></li>
              <li><a href="#">[EMAIL]</a></li>
              <li><a href="#">[ADDRESS]</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} EL Plumbing. All rights reserved.</span>
          <span>Designed & Built for Projects.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
