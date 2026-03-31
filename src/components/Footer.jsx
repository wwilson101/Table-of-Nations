import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="logo-mark">✦</span>
            <span>Table of Nations</span>
          </div>
          <p>Equipping and sending healthcare leaders<br />to serve the nations for the glory of God.</p>
        </div>

        <div className="footer__nav">
          <div className="footer__col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer__col">
            <h4>Take Action</h4>
            <Link to="/give">Give Now</Link>
            <Link to="/get-involved">Partner With Us</Link>
            <Link to="/get-involved">Newsletter</Link>
            <a href="mailto:hello@tableofnations.org">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} Table of Nations. All rights reserved.</p>
        <p>A faith-based nonprofit committed to healthcare missions worldwide.</p>
      </div>
    </footer>
  )
}
