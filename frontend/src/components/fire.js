import React, { useState } from "react";

import RequestAssistanceModal from "./RequestAssistanceModal";

import FireBeforeFull from "../images/FjacketB3.jpeg";
import FireBeforeDetail from "../images/FjacketB1.jpeg";
import FireAfterLeft from "../images/FjacketA1.jpeg";
import FireAfterRight from "../images/FjacketA2.jpeg";

import "../styles/FirePage.css";

function Fire() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="fire-page">

        {/* ==========================================
            BACK TO SERVICES
        ========================================== */}

        <div className="fire-back">
          <a
            href="/#services"
            className="fire-back-link"
          >
            ← Back to All Services
          </a>
        </div>

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="fire-hero">
          <span className="fire-eyebrow">
            Fire & Smoke Damage Restoration
          </span>

          <h1>
            Restoring What Fire and Smoke Have Damaged
          </h1>

          <p>
            Fire damage can be overwhelming. The Right Pack Out carefully
            evaluates, documents, cleans, and restores affected belongings
            whenever possible, helping protect the items that still matter
            after a loss.
          </p>
        </section>

        {/* ==========================================
            TRUST STRIP
        ========================================== */}

        <section className="fire-trust-strip">

          <div className="fire-trust-item">
            <strong>
              Careful Assessment
            </strong>

            <span>
              Contents are evaluated for condition and restoration potential
            </span>
          </div>

          <div className="fire-trust-item">
            <strong>
              Specialized Cleaning
            </strong>

            <span>
              Appropriate methods are selected for smoke, soot, and residue
            </span>
          </div>

          <div className="fire-trust-item">
            <strong>
              Detailed Documentation
            </strong>

            <span>
              Organized records support restoration and insurance communication
            </span>
          </div>

        </section>

        {/* ==========================================
            FIRE RESTORATION SERVICES
        ========================================== */}

        <section className="fire-services">

          <div className="fire-divider"></div>

          <div className="fire-section-heading">
            <span>
              What's Included
            </span>

            <h2>
              Specialized Care for Fire & Smoke-Damaged Contents
            </h2>

            <p>
              Every loss is different. Our process focuses on identifying
              what can be restored and selecting appropriate cleaning methods
              for each item.
            </p>
          </div>

          <div className="fire-service-grid">

            <article className="fire-service-card">
              <div className="fire-service-icon">
                🔎
              </div>

              <h3>
                Condition Assessment
              </h3>

              <p>
                Affected contents are reviewed to determine condition,
                contamination, and restoration potential.
              </p>
            </article>

            <article className="fire-service-card">
              <div className="fire-service-icon">
                🧼
              </div>

              <h3>
                Smoke & Soot Cleaning
              </h3>

              <p>
                Cleaning methods are selected based on the material,
                condition, and type of residue present.
              </p>
            </article>

            <article className="fire-service-card">
              <div className="fire-service-icon">
                🌫️
              </div>

              <h3>
                Odor Treatment
              </h3>

              <p>
                Smoke odor concerns can be addressed as part of the
                contents restoration process when appropriate.
              </p>
            </article>

            <article className="fire-service-card">
              <div className="fire-service-icon">
                📋
              </div>

              <h3>
                Restoration Documentation
              </h3>

              <p>
                Contents can be photographed and documented to support
                project records and insurance communication.
              </p>
            </article>

          </div>
        </section>

        {/* ==========================================
            FEATURE AREA
        ========================================== */}

        <section className="fire-feature">

          <div className="fire-feature-copy">
            <span className="fire-eyebrow">
              Restoration First
            </span>

            <h2>
              Saving What Can Be Restored
            </h2>

            <p>
              Not every fire-damaged item is a total loss. When restoration
              is possible, affected belongings are carefully documented,
              cleaned, treated, and evaluated with the goal of preserving
              as much as possible.
            </p>

            <p>
              Garments, textiles, furnishings, and specialty contents may
              require different treatment methods depending on material,
              contamination, and overall condition.
            </p>
          </div>

          <div className="fire-feature-panel">
            <span className="fire-feature-label">
              Thoughtful Recovery
            </span>

            <h3>
              Assess. Clean. Restore.
            </h3>

            <p>
              Professional contents restoration helps identify what may be
              recoverable and provides organized care throughout the process.
            </p>
          </div>

        </section>

        {/* ==========================================
            REAL FIRE RESTORATION
        ========================================== */}

        <section className="fire-projects">

          <div className="fire-section-heading">
            <span>
              Real Restoration Work
            </span>

            <h2>
              From Smoke-Damaged to Restored
            </h2>

            <p>
              This garment shows how careful specialty cleaning can help
              recover contents affected by fire and smoke exposure.
            </p>
          </div>

          <div className="fire-project-grid">

            <article className="fire-project-card">

              <div className="fire-image-grid">
                <img
                  src={FireBeforeFull}
                  alt="Smoke and fire damaged jacket before restoration"
                />

                <img
                  src={FireBeforeDetail}
                  alt="Close view of smoke damaged jacket before cleaning"
                />
              </div>

              <div className="fire-project-card-content">
                <span className="fire-project-label">
                  Before Restoration
                </span>

                <h3>
                  Visible Smoke & Fire Damage
                </h3>

                <p>
                  The garment was documented before cleaning to record
                  its condition and visible contamination.
                </p>
              </div>

            </article>

            <article className="fire-project-card">

              <div className="fire-image-grid">
                <img
                  src={FireAfterLeft}
                  alt="Restored jacket after professional fire and smoke cleaning"
                />

                <img
                  src={FireAfterRight}
                  alt="Second view of restored jacket after specialty cleaning"
                />
              </div>

              <div className="fire-project-card-content">
                <span className="fire-project-label">
                  After Restoration
                </span>

                <h3>
                  Professionally Cleaned & Restored
                </h3>

                <p>
                  Specialized contents cleaning helped improve the garment's
                  condition while preserving its materials and appearance.
                </p>
              </div>

            </article>

          </div>
        </section>

        {/* ==========================================
            WHY CHOOSE US
        ========================================== */}

        <section className="fire-benefits">

          <div className="fire-section-heading">
            <span>
              Why Choose The Right Pack Out
            </span>

            <h2>
              Careful Restoration When It Matters Most
            </h2>
          </div>

          <div className="fire-benefit-grid">

            <div className="fire-benefit-item">
              <strong>
                Detailed Assessment
              </strong>

              <span>
                Each item is reviewed to determine condition and restoration potential.
              </span>
            </div>

            <div className="fire-benefit-item">
              <strong>
                Specialty Contents Care
              </strong>

              <span>
                Treatment methods can be selected based on material and damage type.
              </span>
            </div>

            <div className="fire-benefit-item">
              <strong>
                Organized Documentation
              </strong>

              <span>
                Project records help support clear communication throughout recovery.
              </span>
            </div>

            <div className="fire-benefit-item">
              <strong>
                Residential & Commercial
              </strong>

              <span>
                Fire and smoke contents services can support homes and businesses.
              </span>
            </div>

          </div>
        </section>

        {/* ==========================================
            FINAL CTA
        ========================================== */}

        <section className="fire-cta">

          <div className="fire-cta-content">

            <div>
              <span>
                Here When You Need Us
              </span>

              <h2>
                Need Help With Fire or Smoke-Damaged Contents?
              </h2>
            </div>

            <div className="fire-cta-actions">

              <button
                type="button"
                className="fire-primary-button"
                onClick={handleShowModal}
              >
                Request Assistance
              </button>

              <a
                href="tel:+16197867089"
                className="fire-secondary-button"
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
        service="Fire & Smoke Damage Restoration"
      />

    </>
  );
}

export default Fire;