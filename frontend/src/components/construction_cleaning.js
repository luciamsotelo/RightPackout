import React, { useState } from "react";

import RequestAssistanceModal from "./RequestAssistanceModal";

import "../styles/ConstructionPage.css";

function ConstructionCleanup() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="construction-page">

        {/* ==========================================
            BACK TO SERVICES
        ========================================== */}

        <div className="construction-back">
          <a
            href="/#services"
            className="construction-back-link"
          >
            ← Back to All Services
          </a>
        </div>

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="construction-hero">
          <span className="construction-eyebrow">
            Specialty Cleaning
          </span>

          <h1>
            Construction Cleanup
          </h1>

          <p>
            Once construction or renovation is complete, the final details
            still matter. The Right Pack Out provides thorough cleaning to
            remove dust, debris, and residue so your space feels finished,
            clean, and ready to use.
          </p>
        </section>

        {/* ==========================================
            TRUST STRIP
        ========================================== */}

        <section className="construction-trust-strip">

          <div className="construction-trust-item">
            <strong>
              Post-Construction
            </strong>

            <span>
              Detailed cleanup after renovations and builds
            </span>
          </div>

          <div className="construction-trust-item">
            <strong>
              Residential & Commercial
            </strong>

            <span>
              Flexible service for homes and businesses
            </span>
          </div>

          <div className="construction-trust-item">
            <strong>
              Final Detail Focus
            </strong>

            <span>
              Careful attention before move-in or reopening
            </span>
          </div>

        </section>

        {/* ==========================================
            SERVICES
        ========================================== */}

        <section className="construction-services">

          <div className="construction-divider"></div>

          <div className="construction-section-heading">
            <span>
              What's Included
            </span>

            <h2>
              Detailed Cleaning for a Finished Space
            </h2>

            <p>
              We focus on the fine dust, residue, and finishing details
              that can remain after construction or renovation work is complete.
            </p>
          </div>

          <div className="construction-service-grid">

            <article className="construction-service-card">

              <div className="construction-service-icon">
                🧹
              </div>

              <h3>
                Construction Dust Removal
              </h3>

              <p>
                Fine dust is carefully removed from surfaces, trim,
                cabinetry, shelving, floors, and surrounding areas.
              </p>

            </article>

            <article className="construction-service-card">

              <div className="construction-service-icon">
                🪣
              </div>

              <h3>
                Surface Cleaning
              </h3>

              <p>
                Counters, fixtures, built-ins, appliances, and finished
                surfaces are cleaned with attention to detail.
              </p>

            </article>

            <article className="construction-service-card">

              <div className="construction-service-icon">
                🪟
              </div>

              <h3>
                Window & Glass Cleaning
              </h3>

              <p>
                Interior glass is cleaned to remove dust, fingerprints,
                and construction-related residue.
              </p>

            </article>

            <article className="construction-service-card">

              <div className="construction-service-icon">
                🏠
              </div>

              <h3>
                Final Detail Cleaning
              </h3>

              <p>
                A final detail pass helps prepare the space for move-in,
                reopening, or project completion.
              </p>

            </article>

          </div>
        </section>

        {/* ==========================================
            FEATURE AREA
        ========================================== */}

        <section className="construction-feature">

          <div className="construction-feature-copy">

            <span className="construction-eyebrow">
              The Final Step
            </span>

            <h2>
              From Construction Zone to Finished Space
            </h2>

            <p>
              Even when the construction work is finished, fine dust and
              debris can remain throughout a property. Detailed cleanup
              helps protect new finishes, improve presentation, and prepare
              the space for the people who will use it.
            </p>

            <p>
              Our team approaches each project with careful attention to
              newly installed surfaces, fixtures, flooring, cabinetry, and
              surrounding areas.
            </p>

          </div>

          <div className="construction-feature-panel">

            <span className="construction-feature-label">
              Ready for Occupancy
            </span>

            <h3>
              Clean. Detailed. Finished.
            </h3>

            <p>
              Professional post-construction cleaning helps turn a completed
              project into a clean and welcoming environment.
            </p>

          </div>

        </section>

        {/* ==========================================
            WHY CHOOSE US
        ========================================== */}

        <section className="construction-benefits">

          <div className="construction-section-heading">

            <span>
              Why Choose The Right Pack Out
            </span>

            <h2>
              Professional Care Through the Final Detail
            </h2>

          </div>

          <div className="construction-benefit-grid">

            <div className="construction-benefit-item">
              <strong>
                Detail-Focused Cleaning
              </strong>

              <span>
                Careful attention to surfaces, fixtures, corners,
                and finishing details.
              </span>
            </div>

            <div className="construction-benefit-item">
              <strong>
                Flexible Scheduling
              </strong>

              <span>
                Cleanup can be coordinated around contractors,
                project timelines, and occupancy needs.
              </span>
            </div>

            <div className="construction-benefit-item">
              <strong>
                Residential & Commercial
              </strong>

              <span>
                Cleaning services can support homes, businesses,
                renovations, and restoration projects.
              </span>
            </div>

            <div className="construction-benefit-item">
              <strong>
                Careful Surface Handling
              </strong>

              <span>
                Newly installed finishes and materials are treated
                with attention and care.
              </span>
            </div>

          </div>

        </section>

        {/* ==========================================
            FINAL CTA
        ========================================== */}

        <section className="construction-cta">

          <div className="construction-cta-content">

            <div>
              <span>
                Ready for the Final Step?
              </span>

              <h2>
                Let Us Help Get Your Space Ready.
              </h2>
            </div>

            <div className="construction-cta-actions">

              <button
                type="button"
                className="construction-primary-button"
                onClick={handleShowModal}
              >
                Request Assistance
              </button>

              <a
                href="tel:+16197867089"
                className="construction-secondary-button"
              >
                Call 619-786-7089
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* ==========================================
          SHARED REQUEST ASSISTANCE MODAL
      ========================================== */}

      <RequestAssistanceModal
        show={showModal}
        onHide={handleCloseModal}
        service="Construction Cleanup"
      />

    </>
  );
}

export default ConstructionCleanup;