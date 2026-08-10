import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import HomeReviews from "../components/home_reviews";
import BeforeAfterGallery from "../components/before_after_gallery";

import heroImage from "../images/FurnitureAfter.jpeg";

import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* ==========================================
          SEO
      ========================================== */}
      <Helmet>
        <title>
          Contents Restoration & Packout Services in San Diego County | The
          Right Pack Out
        </title>

        <meta
          name="description"
          content="The Right Pack Out provides professional pack out, contents cleaning, inventory documentation, secure storage, restoration support, and specialty contents care throughout San Diego County."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://therightpackout.com/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contents Restoration & Packout Services in San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional pack out, contents cleaning, inventory documentation, secure storage, restoration support, and specialty contents care throughout San Diego County."
        />

        <meta property="og:type" content="website" />

        {/* Twitter / Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Contents Restoration & Packout Services in San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional contents care, pack out, cleaning, documentation, secure storage, and restoration support throughout San Diego County."
        />

        {/* ==========================================
            ORGANIZATION / SERVICE AREA SCHEMA
        ========================================== */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://therightpackout.com/#organization",
              "name": "The Right Pack Out",
              "url": "https://therightpackout.com/",
              "telephone": "+1-619-786-7089",
              "email": "therightpackout@gmail.com",
              "description": "Professional pack out, contents cleaning, secure storage, restoration support, inventory documentation, and specialty contents care serving San Diego County.",
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "San Diego County, California"
              }
            }
          `}
        </script>
      </Helmet>

      {/* ==========================================
          HEADER
      ========================================== */}
      <Header />

      <main>
        {/* ==========================================
            HERO
        ========================================== */}
        <section className="premium-home-hero">
          <div className="container premium-home-hero-grid">
            <div className="premium-home-hero-content">
              <span className="home-eyebrow">Professional Contents Care</span>

              <h1>
                Protecting Your Contents.
                <span> Restoring Your Peace of Mind.</span>
              </h1>

              <p className="premium-home-hero-description">
                Professional pack out, contents cleaning, inventory, secure
                storage, and restoration services throughout San Diego County,
                delivered with care when you need them most.
              </p>

              <div className="home-introduction-actions">
                <a href="/request-assistance" className="primary-home-button">
                  Start Your Recovery
                </a>

                <a href="/our-work" className="secondary-home-button">
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

            {/* ==========================================
                HERO IMAGE
            ========================================== */}
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

                  <strong>Careful service from pack out to return.</strong>
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
                    Pack out, cleaning, documentation, storage, and restoration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SERVICES
        ========================================== */}
        <Menu />

        {/* ==========================================
            FEATURED WORK
        ========================================== */}
        <div id="featured-work">
          <BeforeAfterGallery featuredOnly />
        </div>

        {/* ==========================================
            REVIEWS
        ========================================== */}
        <HomeReviews />
      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}
      <Footer />
    </div>
  );
};

export default HomePage;
