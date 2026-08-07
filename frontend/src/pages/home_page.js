import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Emergency from "../components/emergency";
import HomeReviews from "../components/home_reviews";
import BeforeAfterGallery from "../components/before_after_gallery";

import heroImage from "../images/FurnitureAfter.jpeg";

import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="site-page">
      <Header />
      <Emergency />

      <main>
        <section className="premium-home-hero">
          <div className="container premium-home-hero-grid">
            <div className="premium-home-hero-content">
              <span className="home-eyebrow">
                Professional Contents Care
              </span>

              <h1>
                Protecting Your Contents.
                <span>Restoring Your Peace of Mind.</span>
              </h1>

              <p className="premium-home-hero-description">
                When disaster strikes, every belonging matters. From careful
                packout and documentation to specialized cleaning, secure
                storage, and restoration, The Right Pack Out helps families
                and businesses recover with confidence.
              </p>

              <div className="home-introduction-actions">
                <a
                  href="mailto:therightpackout@gmail.com?subject=Quote%20Request"
                  className="primary-home-button"
                >
                  Request a Quote
                </a>

                <a
                  href="#featured-work"
                  className="secondary-home-button"
                >
                  View Our Work
                </a>
              </div>

              <div
                className="hero-trust-list"
                aria-label="Company service highlights"
              >
                <div className="hero-trust-item">
                  <span className="hero-trust-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>24/7 Emergency Response</span>
                </div>

                <div className="hero-trust-item">
                  <span className="hero-trust-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>Detailed Inventory Reporting</span>
                </div>

                <div className="hero-trust-item">
                  <span className="hero-trust-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>Careful Cleaning & Storage</span>
                </div>
              </div>
            </div>

            <div className="premium-home-hero-visual">
              <div className="hero-image-frame">
                <img
                  src={heroImage}
                  alt="Professionally cleaned and restored home furnishings"
                  className="premium-home-hero-image"
                />

                <div className="hero-image-overlay">
                  <span className="hero-image-overlay-label">
                    Trusted Contents Care
                  </span>

                  <strong>
                    Careful service from packout to return.
                  </strong>
                </div>

                <div className="hero-response-badge">
                  <strong>24/7</strong>
                  <span>Response</span>
                </div>
              </div>

              <div className="hero-experience-card">
                <span className="hero-experience-icon" aria-hidden="true">
                  ✓
                </span>

                <div>
                  <strong>Professional Care</strong>
                  <span>
                    Packout, cleaning, documentation, storage, and restoration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Menu />

        <div id="featured-work">
          <BeforeAfterGallery featuredOnly />
        </div>

        <HomeReviews />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;