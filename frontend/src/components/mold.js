import React from "react";

import MoldShoe from "../images/MB&Ashoe.jpeg";
import MoldChamber from "../images/mchamb4.jpeg";

import "../styles/MoldPage.css";

function Mold() {
  return (
    <main className="mold-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="mold-back">
        <a
          href="/#services"
          className="mold-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="mold-hero">
        <span className="mold-eyebrow">
          Water & Mold Contents
        </span>

        <h1>
          Restoring What Water and Mold Have Damaged.
        </h1>

        <p>
          Water and mold damage can affect the belongings that matter most.
          The Right Pack Out carefully documents, evaluates, cleans, and
          restores affected contents whenever possible, helping protect your
          possessions throughout every stage of the recovery process.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="mold-trust-strip">

        <div className="mold-trust-item">
          <strong>
            Detailed Assessment
          </strong>

          <span>
            Affected contents are reviewed for condition and restoration potential
          </span>
        </div>

        <div className="mold-trust-item">
          <strong>
            Controlled Handling
          </strong>

          <span>
            Items are managed carefully to help limit unnecessary disturbance
          </span>
        </div>

        <div className="mold-trust-item">
          <strong>
            Organized Documentation
          </strong>

          <span>
            Project records help support clear communication throughout recovery
          </span>
        </div>

      </section>

      {/* ==========================================
          CONTENTS RECOVERY SERVICES
      ========================================== */}

      <section className="mold-services">

        <div className="mold-divider"></div>

        <div className="mold-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Careful Recovery for Water- and Mold-Affected Contents
          </h2>

          <p>
            Every affected item is different. Our process focuses on
            documentation, appropriate handling, and identifying what may
            be safely restored.
          </p>
        </div>

        <div className="mold-service-grid">

          <article className="mold-service-card">
            <div className="mold-service-icon">
              📷
            </div>

            <h3>
              Condition Documentation
            </h3>

            <p>
              Affected contents can be photographed and documented before
              treatment to help record their condition.
            </p>
          </article>

          <article className="mold-service-card">
            <div className="mold-service-icon">
              💧
            </div>

            <h3>
              Moisture Assessment
            </h3>

            <p>
              Water-affected items are reviewed to help determine their
              condition and appropriate next steps.
            </p>
          </article>

          <article className="mold-service-card">
            <div className="mold-service-icon">
              🔎
            </div>

            <h3>
              Contamination Review
            </h3>

            <p>
              Visible mold or contamination is documented so affected
              contents can be handled appropriately.
            </p>
          </article>

          <article className="mold-service-card">
            <div className="mold-service-icon">
              🧼
            </div>

            <h3>
              Specialty Cleaning
            </h3>

            <p>
              Cleaning methods are selected based on the item, material,
              condition, and type of contamination.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE AREA
      ========================================== */}

      <section className="mold-feature">

        <div className="mold-feature-copy">
          <span className="mold-eyebrow">
            Contents Recovery
          </span>

          <h2>
            Careful Handling From Assessment to Restoration
          </h2>

          <p>
            Water and mold can affect contents differently depending on
            material, exposure, and condition. Careful evaluation helps
            determine whether an item may be cleaned, treated, dried,
            or prepared for additional restoration.
          </p>

          <p>
            Our process emphasizes thoughtful handling and clear documentation
            so affected belongings remain organized throughout recovery.
          </p>
        </div>

        <div className="mold-feature-panel">
          <span className="mold-feature-label">
            Thoughtful Recovery
          </span>

          <h3>
            Assess. Clean. Protect.
          </h3>

          <p>
            Professional contents care helps identify what may be recoverable
            while supporting organized handling throughout the process.
          </p>
        </div>

      </section>

      {/* ==========================================
          REAL PROJECT EXAMPLES
      ========================================== */}

      <section className="mold-projects">

        <div className="mold-section-heading">
          <span>
            Real Contents Recovery
          </span>

          <h2>
            Careful Assessment. Visible Results.
          </h2>

          <p>
            Real examples of contents affected by water or mold and the
            specialized care used during the recovery process.
          </p>
        </div>

        <div className="mold-project-grid">

          <article className="mold-project-card">
            <img
              src={MoldShoe}
              alt="Before and after mold cleaning on a specialty shoe"
            />

            <div className="mold-project-card-content">
              <span className="mold-project-label">
                Before & After
              </span>

              <h3>
                Specialty Contents Cleaning
              </h3>

              <p>
                This item was carefully inspected and cleaned to address
                visible mold contamination while preserving the item
                whenever possible.
              </p>
            </div>
          </article>

          <article className="mold-project-card">
            <img
              src={MoldChamber}
              alt="Controlled chamber used during specialty contents treatment"
            />

            <div className="mold-project-card-content">
              <span className="mold-project-label">
                Treatment Process
              </span>

              <h3>
                Controlled Contents Care
              </h3>

              <p>
                Specialty contents may require controlled treatment and
                careful handling as part of the cleaning and recovery process.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="mold-benefits">

        <div className="mold-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Organized Care for Affected Belongings
          </h2>
        </div>

        <div className="mold-benefit-grid">

          <div className="mold-benefit-item">
            <strong>
              Detailed Documentation
            </strong>

            <span>
              Contents can be photographed and organized to support
              project records and communication.
            </span>
          </div>

          <div className="mold-benefit-item">
            <strong>
              Controlled Handling
            </strong>

            <span>
              Affected items are handled carefully to help reduce unnecessary
              disturbance or cross-contamination.
            </span>
          </div>

          <div className="mold-benefit-item">
            <strong>
              Specialty Contents Care
            </strong>

            <span>
              Treatment approaches can be selected based on the material,
              condition, and type of damage.
            </span>
          </div>

          <div className="mold-benefit-item">
            <strong>
              Residential & Commercial
            </strong>

            <span>
              Contents recovery can support homes, businesses, and
              restoration-related projects.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="mold-cta">

        <div className="mold-cta-content">

          <div>
            <span>
              Care Through the Recovery Process
            </span>

            <h2>
              Thoughtful Care for Water- and Mold-Affected Contents.
            </h2>

            <p className="mold-cta-text">
              When you are ready to discuss water- or mold-affected belongings,
              use the Request Assistance button in the header and our team can
              help determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Mold;