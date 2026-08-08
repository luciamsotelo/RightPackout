import React from "react";

import storage11 from "../images/storage11.jpeg";
import storageRug from "../images/Storerug1.jpeg";
import storage4 from "../images/storage4.jpeg";

import "../styles/StoragePage.css";

function Storage() {
  return (
    <main className="storage-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="storage-back">
        <a
          href="/#services"
          className="storage-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="storage-hero">
        <span className="storage-eyebrow">
          Secure Contents Storage
        </span>

        <h1>
          Your Belongings, Secure Until They Return Home
        </h1>

        <p>
          When your home or business is disrupted, The Right Pack Out
          keeps your belongings organized, protected, and carefully
          managed until they are ready to return.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="storage-trust-strip">

        <div className="storage-trust-item">
          <strong>
            Organized Storage
          </strong>

          <span>
            Contents remain labeled, grouped, and easy to track
          </span>
        </div>

        <div className="storage-trust-item">
          <strong>
            Careful Protection
          </strong>

          <span>
            Belongings are packed and protected throughout storage
          </span>
        </div>

        <div className="storage-trust-item">
          <strong>
            Coordinated Return
          </strong>

          <span>
            Contents are prepared for pack back when the property is ready
          </span>
        </div>

      </section>

      {/* ==========================================
          STORAGE SERVICES
      ========================================== */}

      <section className="storage-services">

        <div className="storage-divider"></div>

        <div className="storage-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Organized Protection Throughout the Restoration Process
          </h2>

          <p>
            Storage needs vary by project. Our goal is to keep your
            belongings protected, identifiable, and organized while
            restoration or repair work is completed.
          </p>
        </div>

        <div className="storage-service-grid">

          <article className="storage-service-card">
            <div className="storage-service-icon">
              📋
            </div>

            <h3>
              Inventory Tracking
            </h3>

            <p>
              Contents are documented and organized to support accurate
              tracking throughout the project.
            </p>
          </article>

          <article className="storage-service-card">
            <div className="storage-service-icon">
              🏷️
            </div>

            <h3>
              Labeled Storage
            </h3>

            <p>
              Boxes and specialty items are clearly labeled and grouped
              for organized handling and future return.
            </p>
          </article>

          <article className="storage-service-card">
            <div className="storage-service-icon">
              📦
            </div>

            <h3>
              Protected Contents
            </h3>

            <p>
              Belongings are packed and protected to help reduce
              unnecessary handling and exposure.
            </p>
          </article>

          <article className="storage-service-card">
            <div className="storage-service-icon">
              🏠
            </div>

            <h3>
              Coordinated Return
            </h3>

            <p>
              Stored contents can be prepared for pack back once
              restoration is complete and the property is ready.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE AREA
      ========================================== */}

      <section className="storage-feature">

        <div className="storage-feature-copy">
          <span className="storage-eyebrow">
            Storage That Fits the Project
          </span>

          <h2>
            Protected, Organized, and Ready for Return
          </h2>

          <p>
            Packed contents are carefully organized and stored while
            restoration or repair work is underway. Clear labeling and
            project organization help keep belongings identifiable
            throughout the process.
          </p>

          <p>
            Depending on the needs of the project, contents may be
            coordinated for appropriate off-site or on-site storage
            while remaining protected and organized.
          </p>
        </div>

        <div className="storage-feature-panel">
          <span className="storage-feature-label">
            Secure Contents Care
          </span>

          <h3>
            Stored. Protected. Organized.
          </h3>

          <p>
            Thoughtful storage helps reduce disruption and supports
            a smoother return once the property is ready.
          </p>
        </div>

      </section>

      {/* ==========================================
          REAL STORAGE EXAMPLES
      ========================================== */}

      <section className="storage-projects">

        <div className="storage-section-heading">
          <span>
            Real Storage Examples
          </span>

          <h2>
            Careful Organization. Protected Contents.
          </h2>

          <p>
            Real examples of contents prepared and organized for storage
            during restoration-related projects.
          </p>
        </div>

        <div className="storage-project-grid">

          <article className="storage-project-card">
            <img
              src={storage11}
              alt="Labeled boxes organized for contents storage"
            />

            <div className="storage-project-card-content">
              <span className="storage-project-label">
                Organized Storage
              </span>

              <h3>
                Labeled & Documented
              </h3>

              <p>
                Packed contents are organized and labeled to support
                accurate tracking throughout the project.
              </p>
            </div>
          </article>

          <article className="storage-project-card">
            <img
              src={storageRug}
              alt="Professionally wrapped rugs prepared for storage"
            />

            <div className="storage-project-card-content">
              <span className="storage-project-label">
                Specialty Contents
              </span>

              <h3>
                Protected for Storage
              </h3>

              <p>
                Specialty items such as rugs and textiles are carefully
                prepared and protected while awaiting return.
              </p>
            </div>
          </article>

          <article className="storage-project-card">
            <img
              src={storage4}
              alt="Organized contents boxes stored during restoration"
            />

            <div className="storage-project-card-content">
              <span className="storage-project-label">
                Project Organization
              </span>

              <h3>
                Ready When the Property Is
              </h3>

              <p>
                Contents remain organized so they can be efficiently
                coordinated for pack back when restoration is complete.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="storage-benefits">

        <div className="storage-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Professional Care While Your Contents Are Away
          </h2>
        </div>

        <div className="storage-benefit-grid">

          <div className="storage-benefit-item">
            <strong>
              Organized Tracking
            </strong>

            <span>
              Contents remain documented and managed throughout
              the storage process.
            </span>
          </div>

          <div className="storage-benefit-item">
            <strong>
              Specialty Item Care
            </strong>

            <span>
              Rugs, textiles, furnishings, and specialty belongings
              receive appropriate protection.
            </span>
          </div>

          <div className="storage-benefit-item">
            <strong>
              Flexible Solutions
            </strong>

            <span>
              Storage can be coordinated around the specific needs
              and timeline of each project.
            </span>
          </div>

          <div className="storage-benefit-item">
            <strong>
              Smooth Pack Back
            </strong>

            <span>
              Organized storage helps support an efficient return
              once the property is ready.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="storage-cta">

        <div className="storage-cta-content">

          <div>
            <span>
              Protected Until It's Time to Return
            </span>

            <h2>
              Secure Storage With an Organized Return in Mind.
            </h2>

            <p className="storage-cta-text">
              When you are ready to discuss storage needs for your project,
              use the Request Assistance button in the header and our team
              can help determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Storage;
