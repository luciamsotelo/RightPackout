import React from "react";

import ChairBefore from "../images/chairCleanB1.jpeg";
import ChairAfter from "../images/ChairCleanA1.jpeg";
import CouchBefore from "../images/vomitCouchB5.jpeg";
import CouchAfter from "../images/vomitCouchA1.jpeg";

import "../styles/RestorationPage.css";

function Restoration() {
  return (
    <main className="restoration-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="restoration-back">
        <a
          href="/#services"
          className="restoration-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="restoration-hero">
        <span className="restoration-eyebrow">
          Furniture Cleaning & Restoration
        </span>

        <h1>
          Professional Furniture Cleaning & Restoration
        </h1>

        <p>
          From everyday wear to stains, smoke, water, and other damage,
          The Right Pack Out provides professional furniture cleaning and
          restoration designed to improve appearance, protect materials,
          and help extend the life of your furnishings.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="restoration-trust-strip">

        <div className="restoration-trust-item">
          <strong>
            Careful Assessment
          </strong>

          <span>
            Each piece is reviewed for fabric, condition, and treatment needs
          </span>
        </div>

        <div className="restoration-trust-item">
          <strong>
            Specialty Cleaning
          </strong>

          <span>
            Cleaning methods are selected for the material and type of damage
          </span>
        </div>

        <div className="restoration-trust-item">
          <strong>
            Visible Results
          </strong>

          <span>
            Thoughtful treatment helps improve condition and appearance
          </span>
        </div>

      </section>

      {/* ==========================================
          FURNITURE CARE SERVICES
      ========================================== */}

      <section className="restoration-services">

        <div className="restoration-divider"></div>

        <div className="restoration-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Careful Treatment for Upholstered Furnishings
          </h2>

          <p>
            Every piece is different. Our process focuses on selecting
            appropriate treatment based on the material, condition,
            staining, and type of damage.
          </p>
        </div>

        <div className="restoration-service-grid">

          <article className="restoration-service-card">
            <div className="restoration-service-icon">
              🔎
            </div>

            <h3>
              Condition Assessment
            </h3>

            <p>
              Furniture is reviewed before cleaning to identify fabric,
              condition, staining, and restoration needs.
            </p>
          </article>

          <article className="restoration-service-card">
            <div className="restoration-service-icon">
              🎯
            </div>

            <h3>
              Spot Treatment
            </h3>

            <p>
              Visible stains and affected areas are evaluated for
              appropriate targeted treatment.
            </p>
          </article>

          <article className="restoration-service-card">
            <div className="restoration-service-icon">
              🧼
            </div>

            <h3>
              Upholstery Cleaning
            </h3>

            <p>
              Cleaning methods are selected based on the material,
              construction, and condition of the furnishing.
            </p>
          </article>

          <article className="restoration-service-card">
            <div className="restoration-service-icon">
              ✨
            </div>

            <h3>
              Final Review
            </h3>

            <p>
              Cleaned items are reviewed after treatment to document
              the finished condition and overall result.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE AREA
      ========================================== */}

      <section className="restoration-feature">

        <div className="restoration-feature-copy">
          <span className="restoration-eyebrow">
            Furniture Care
          </span>

          <h2>
            Helping Restore Appearance and Condition
          </h2>

          <p>
            Upholstered furniture can be affected by spills, stains,
            smoke, water, odors, contamination, and everyday wear.
            Careful evaluation helps determine the right cleaning or
            restoration approach for each piece.
          </p>

          <p>
            Our team focuses on thoughtful treatment designed to improve
            appearance and condition while respecting the fabrics,
            finishes, and construction of the furnishing.
          </p>
        </div>

        <div className="restoration-feature-panel">
          <span className="restoration-feature-label">
            Professional Furniture Care
          </span>

          <h3>
            Evaluate. Clean. Restore.
          </h3>

          <p>
            Specialty cleaning and restoration can help preserve furnishings
            while improving their overall condition and presentation.
          </p>
        </div>

      </section>

      {/* ==========================================
          REAL FURNITURE RESTORATION
      ========================================== */}

      <section className="restoration-projects">

        <div className="restoration-section-heading">
          <span>
            Real Cleaning Results
          </span>

          <h2>
            Before & After Furniture Care
          </h2>

          <p>
            Real examples of upholstered furnishings before and after
            professional cleaning and restoration.
          </p>
        </div>

        <div className="restoration-project-grid">

          {/* ==========================================
              CHAIR PROJECT
          ========================================== */}

          <article className="restoration-project-card">

            <div className="restoration-image-pair">

              <div className="restoration-image-wrap">
                <img
                  src={ChairBefore}
                  alt="Upholstered chair before professional cleaning"
                />

                <span className="restoration-image-label">
                  Before
                </span>
              </div>

              <div className="restoration-image-wrap">
                <img
                  src={ChairAfter}
                  alt="Upholstered chair after professional cleaning"
                />

                <span className="restoration-image-label">
                  After
                </span>
              </div>

            </div>

            <div className="restoration-project-card-content">
              <span className="restoration-project-label">
                Upholstery Cleaning
              </span>

              <h3>
                Upholstered Chair Cleaning
              </h3>

              <p>
                Professional cleaning helped address visible contamination
                and improve the chair's overall appearance and condition.
              </p>
            </div>

          </article>

          {/* ==========================================
              COUCH PROJECT
          ========================================== */}

          <article className="restoration-project-card">

            <div className="restoration-image-pair">

              <div className="restoration-image-wrap">
                <img
                  src={CouchBefore}
                  alt="Upholstered couch before professional stain cleaning"
                />

                <span className="restoration-image-label">
                  Before
                </span>
              </div>

              <div className="restoration-image-wrap">
                <img
                  src={CouchAfter}
                  alt="Upholstered couch after professional cleaning"
                />

                <span className="restoration-image-label">
                  After
                </span>
              </div>

            </div>

            <div className="restoration-project-card-content">
              <span className="restoration-project-label">
                Specialty Cleaning
              </span>

              <h3>
                Upholstery Stain Treatment
              </h3>

              <p>
                Careful treatment and professional cleaning helped restore
                this upholstered surface to a cleaner condition.
              </p>
            </div>

          </article>

        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="restoration-benefits">

        <div className="restoration-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Professional Care for Furnishings Worth Keeping
          </h2>
        </div>

        <div className="restoration-benefit-grid">

          <div className="restoration-benefit-item">
            <strong>
              Fabric-Focused Treatment
            </strong>

            <span>
              Cleaning decisions are based on the material, condition,
              and construction of each furnishing.
            </span>
          </div>

          <div className="restoration-benefit-item">
            <strong>
              Targeted Stain Care
            </strong>

            <span>
              Affected areas can receive focused treatment based on the
              type of staining or contamination present.
            </span>
          </div>

          <div className="restoration-benefit-item">
            <strong>
              Careful Handling
            </strong>

            <span>
              Fabrics, finishes, structure, and overall condition are
              considered throughout the cleaning process.
            </span>
          </div>

          <div className="restoration-benefit-item">
            <strong>
              Residential & Commercial
            </strong>

            <span>
              Furniture care can support homes, businesses, and
              restoration-related projects.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="restoration-cta">

        <div className="restoration-cta-content">

          <div>
            <span>
              Professional Care for Your Furnishings
            </span>

            <h2>
              Helping Furniture Look and Feel Cared For Again.
            </h2>

            <p className="restoration-cta-text">
              When you are ready to discuss furniture or upholstery cleaning,
              use the Request Assistance button in the header and our team
              can help determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Restoration;