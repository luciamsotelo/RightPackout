import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Images from "../components/carousel_images";
import Footer from "../components/footer";
import Emergency from "../components/emergency";
import HomeReviews from "../components/home_reviews";
import "../App.css";

const HomePage = () => {
  return (
    <div className="site-page">
      <Header />
      <Emergency />

      <main>
        <section className="home-introduction">
          <div className="container">
            <span className="home-eyebrow">
              Professional Contents Care
            </span>

            <h1>
              Packout, Cleaning, Storage and Restoration Support You Can Trust
            </h1>

            <p>
              The Right Pack Out helps homeowners, contractors, and insurance
              professionals protect, document, clean, store, and restore
              valuable contents with care.
            </p>

            <div className="home-introduction-actions">
              <a href="/pack" className="primary-home-button">
                Explore Packout Services
              </a>

              <a
                href="mailto:therightpackout@gmail.com?subject=Quote%20Request"
                className="secondary-home-button"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-strip-grid">
            <div className="trust-item">
              <strong>24/7</strong>
              <span>Emergency Response</span>
            </div>

            <div className="trust-item">
              <strong>Experienced</strong>
              <span>Contents Professionals</span>
            </div>

            <div className="trust-item">
              <strong>Detailed</strong>
              <span>Inventory Reporting</span>
            </div>

            <div className="trust-item">
              <strong>Careful</strong>
              <span>Cleaning & Storage</span>
            </div>
          </div>
        </section>

        <Menu />

        <section className="home-carousel-section">
          <div className="container">
            <Images />
          </div>
        </section>

        <HomeReviews />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;