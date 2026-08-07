import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../images/logo1.png";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="professional-footer">
      <div className="footer-red-accent"></div>

      <Container>
        <div className="footer-grid">
          <div className="footer-brand-column">
            <a href="/" className="footer-brand">
              <img
                src={logo}
                alt="The Right Pack Out"
                className="footer-logo"
              />

              <div>
                <span className="footer-business-name">
                  The Right Pack Out
                </span>

                <span className="footer-business-tagline">
                  Contents Care, Cleaning & Restoration
                </span>
              </div>
            </a>

            <p className="footer-description">
              Professional packout, contents cleaning, secure storage,
              restoration support, and detailed reporting delivered with care.
            </p>
          </div>

          <div className="footer-column">
            <h2>Quick Links</h2>

            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              <a href="/">Home</a>
              <a href="/about">Meet Our Team</a>
              <a href="/review">Client Reviews</a>
              <a href="/feedback">Leave Feedback</a>
            </nav>
          </div>

          <div className="footer-column">
            <h2>Popular Services</h2>

            <nav
              className="footer-links"
              aria-label="Popular services"
            >
              <a href="/pack">Pack Out & Pack Back</a>
              <a href="/storage">Secure Storage</a>
              <a href="/fire">Fire Restoration</a>
              <a href="/mold">Mold Restoration</a>
              <a href="/consultation">Insurance Reporting</a>
            </nav>
          </div>

          <div className="footer-column">
            <h2>Contact Us</h2>

            <div className="footer-contact-list">
              <a href="tel:+16197867089">
                <span aria-hidden="true">☎</span>
                <span>619-786-7089</span>
              </a>

              <a href="mailto:therightpackout@gmail.com">
                <span aria-hidden="true">✉</span>
                <span>therightpackout@gmail.com</span>
              </a>

              <a
                href="tel:+16197867089"
                className="footer-emergency-button"
              >
                24/7 Emergency Call
              </a>

              <span className="footer-availability">
                Available 24 Hours a Day, 7 Days a Week
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} The Right Pack Out. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/feedback">Request Assistance</a>
            <a href="/review">Read Reviews</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;