import React from "react";

import WindowPhoto from "../images/drapes-need-clean1.jpeg";
import "../styles/WindowPage.css";

function Window() {
  return (
    <main className="window-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="window-back">
        <a
          href="/#services"
          className="window-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="window-hero">
        <span className="window-eyebrow">
          Professional Window Cleaning
        </span>

        <h1>
          Clearer Windows. Brighter Spaces.
        </h1>

        <p>
          The Right Pack Out provides professional interior and exterior
          window cleaning designed to remove dirt, buildup, and streaks
          while helping your home or business feel brighter, cleaner,
          and well cared for.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="window-trust-strip">

        <div className="window-trust-item">
          <strong>
            Interior & Exterior
          </strong>

          <span>
            Detailed cleaning for glass inside and outside the property
          </span>
        </div>

        <div className="window-trust-item">
          <strong>
            Detail-Focused Care
          </strong>

          <span>
            Surrounding finishes are treated thoughtfully during cleaning
          </span>
        </div>

        <div className="window-trust-item">
          <strong>
            Residential & Commercial
          </strong>

          <span>
            Professional service for homes, businesses, and projects
          </span>
        </div>

      </section>

      {/* ==========================================
          WINDOW CLEANING SERVICES
      ========================================== */}

      <section className="window-services">

        <div className="window-divider"></div>

        <div className="window-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Professional Care Inside and Out
          </h2>

          <p>
            Our window cleaning process focuses on careful cleaning,
            clear results, and attention to the details that help
            a property feel finished.
          </p>
        </div>

        <div className="window-service-grid">

          <article className="window-service-card">
            <div className="window-service-icon">
              🪟
            </div>

            <h3>
              Interior Glass Cleaning
            </h3>

            <p>
              Interior windows are carefully hand cleaned to remove
              fingerprints, dust, residue, and streaks.
            </p>
          </article>

          <article className="window-service-card">
            <div className="window-service-icon">
              ✨
            </div>

            <h3>
              Exterior Window Cleaning
            </h3>

            <p>
              Exterior glass is professionally cleaned to help remove
              dirt, buildup, and environmental residue.
            </p>
          </article>

          <article className="window-service-card">
            <div className="window-service-icon">
              💧
            </div>

            <h3>
              Purified Water Cleaning
            </h3>

            <p>
              Filtered water methods can help provide cleaner,
              clearer exterior results where appropriate.
            </p>
          </article>

          <article className="window-service-card">
            <div className="window-service-icon">
              🏢
            </div>

            <h3>
              Multi-Story Access
            </h3>

            <p>
              Professional equipment can be used for elevated windows
              when property and site conditions allow.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE AREA
      ========================================== */}

      <section className="window-feature">

        <div className="window-feature-copy">
          <span className="window-eyebrow">
            Professional Results
          </span>

          <h2>
            Cleaner Glass Can Transform the Space
          </h2>

          <p>
            Clean windows help improve clarity, natural light, and the
            overall appearance of a property. Dirt, dust, fingerprints,
            and environmental buildup can make even a well-maintained
            space feel unfinished.
          </p>

          <p>
            Our approach focuses on careful cleaning and a polished
            finished appearance while treating surrounding surfaces
            and finishes with care.
          </p>
        </div>

        <div className="window-feature-panel">
          <span className="window-feature-label">
            Clearer Results
          </span>

          <h3>
            Clean. Bright. Polished.
          </h3>

          <p>
            Professional window cleaning helps create clearer views,
            brighter rooms, and a cleaner overall presentation.
          </p>
        </div>

      </section>

      {/* ==========================================
          WINDOW CLEANING EXAMPLE
      ========================================== */}

      <section className="window-projects">

        <div className="window-section-heading">
          <span>
            Window Cleaning in Practice
          </span>

          <h2>
            Clean Glass. Clear Views.
          </h2>

          <p>
            Professional window cleaning helps improve clarity,
            natural light, and the finished appearance of your property.
          </p>
        </div>

        <article className="window-project-card">

          <img
            src={WindowPhoto}
            alt="Professional residential and commercial window cleaning"
          />

          <div className="window-project-card-content">
            <span className="window-project-label">
              Window Cleaning
            </span>

            <h3>
              Detailed Care for a Cleaner Finish
            </h3>

            <p>
              Interior and exterior windows are carefully cleaned with
              attention to clarity, presentation, and a professional
              finished appearance.
            </p>
          </div>

        </article>

      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="window-benefits">

        <div className="window-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Detailed Window Care for a Finished Property
          </h2>
        </div>

        <div className="window-benefit-grid">

          <div className="window-benefit-item">
            <strong>
              Interior & Exterior Care
            </strong>

            <span>
              Window cleaning can be coordinated for both sides
              of the glass as appropriate.
            </span>
          </div>

          <div className="window-benefit-item">
            <strong>
              Careful Surface Protection
            </strong>

            <span>
              Surrounding finishes, furnishings, and surfaces are
              treated thoughtfully throughout the process.
            </span>
          </div>

          <div className="window-benefit-item">
            <strong>
              Professional Equipment
            </strong>

            <span>
              Appropriate tools and cleaning methods are selected
              based on the property and window location.
            </span>
          </div>

          <div className="window-benefit-item">
            <strong>
              Residential & Commercial
            </strong>

            <span>
              Service can support homes, businesses, renovations,
              and restoration-related projects.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="window-cta">

        <div className="window-cta-content">

          <div>
            <span>
              A Cleaner Finished Look
            </span>

            <h2>
              Clearer Windows for a Brighter Space.
            </h2>

            <p className="window-cta-text">
              When you are ready to discuss window cleaning for your
              home, business, or project, use the Request Assistance
              button in the header and our team can help determine
              the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Window;