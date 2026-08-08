import React from "react";

import RugsDrying from "../images/RugsDrying.jpeg";

import "../styles/PreservationsPage.css";

function Preservations() {
  return (
    <main className="preservation-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="preservation-back">
        <a
          href="/#services"
          className="preservation-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="preservation-hero">
        <span className="preservation-eyebrow">
          Preservation Services
        </span>

        <h1>
          Preserving the Things That Carry Meaning.
        </h1>

        <p>
          Some belongings carry more than material value. The Right Pack Out
          provides thoughtful preservation services designed to protect
          specialty contents, textiles, and meaningful belongings throughout
          the restoration process.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="preservation-trust-strip">

        <div className="preservation-trust-item">
          <strong>
            Individual Assessment
          </strong>

          <span>
            Each item is reviewed based on its material and condition
          </span>
        </div>

        <div className="preservation-trust-item">
          <strong>
            Delicate Handling
          </strong>

          <span>
            Specialty contents receive careful and thoughtful attention
          </span>
        </div>

        <div className="preservation-trust-item">
          <strong>
            Protective Care
          </strong>

          <span>
            Preservation helps reduce unnecessary exposure and deterioration
          </span>
        </div>

      </section>

      {/* ==========================================
          PRESERVATION SERVICES
      ========================================== */}

      <section className="preservation-services">

        <div className="preservation-divider"></div>

        <div className="preservation-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Thoughtful Care for Specialty Contents
          </h2>

          <p>
            Preservation begins with understanding the item, its condition,
            and the type of care needed to help protect it throughout the
            restoration process.
          </p>
        </div>

        <div className="preservation-service-grid">

          <article className="preservation-service-card">
            <div className="preservation-service-icon">
              🔎
            </div>

            <h3>
              Condition Review
            </h3>

            <p>
              Items are carefully inspected before preservation work begins
              so the appropriate approach can be selected.
            </p>
          </article>

          <article className="preservation-service-card">
            <div className="preservation-service-icon">
              🧼
            </div>

            <h3>
              Careful Cleaning
            </h3>

            <p>
              Cleaning methods are chosen based on the material, condition,
              and needs of the individual item.
            </p>
          </article>

          <article className="preservation-service-card">
            <div className="preservation-service-icon">
              🧵
            </div>

            <h3>
              Specialty Handling
            </h3>

            <p>
              Textiles, garments, rugs, and other specialty contents receive
              careful handling throughout the process.
            </p>
          </article>

          <article className="preservation-service-card">
            <div className="preservation-service-icon">
              🛡️
            </div>

            <h3>
              Protective Preparation
            </h3>

            <p>
              Items are prepared to help reduce unnecessary exposure,
              handling, and long-term deterioration.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE AREA
      ========================================== */}

      <section className="preservation-feature">

        <div className="preservation-feature-copy">
          <span className="preservation-eyebrow">
            Specialty Preservation
          </span>

          <h2>
            Protecting More Than Just an Item
          </h2>

          <p>
            Preservation is about protecting the meaning and value attached
            to a belonging. Some contents require more thoughtful care than
            everyday cleaning or storage can provide.
          </p>

          <p>
            Our approach focuses on careful inspection, appropriate treatment,
            and protective handling throughout each stage of the restoration
            process.
          </p>
        </div>

        <div className="preservation-feature-panel">
          <span className="preservation-feature-label">
            Thoughtful Care
          </span>

          <h3>
            Inspect. Protect. Preserve.
          </h3>

          <p>
            Each item is approached individually so the preservation process
            reflects its material, condition, and importance.
          </p>
        </div>

      </section>

      {/* ==========================================
          PRESERVATION EXAMPLE
      ========================================== */}

      <section className="preservation-projects">

        <div className="preservation-section-heading">
          <span>
            Preservation in Practice
          </span>

          <h2>
            Professional Care for Specialty Contents
          </h2>

          <p>
            Careful drying, cleaning, handling, and protection can help preserve
            specialty contents throughout restoration.
          </p>
        </div>

        <article className="preservation-project-card">
          <img
            src={RugsDrying}
            alt="Professional rug drying and preservation services"
          />

          <div className="preservation-project-card-content">
            <span className="preservation-project-label">
              Specialty Preservation
            </span>

            <h3>
              Professional Preservation Solutions
            </h3>

            <p>
              Specialty contents such as rugs and textiles may require careful
              drying, treatment, and handling to help protect their condition
              throughout the restoration process.
            </p>
          </div>
        </article>

      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="preservation-benefits">

        <div className="preservation-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Thoughtful Care for Meaningful Belongings
          </h2>
        </div>

        <div className="preservation-benefit-grid">

          <div className="preservation-benefit-item">
            <strong>
              Individual Attention
            </strong>

            <span>
              Each item is considered based on its material, condition,
              and preservation needs.
            </span>
          </div>

          <div className="preservation-benefit-item">
            <strong>
              Delicate Handling
            </strong>

            <span>
              Specialty belongings receive careful and limited handling
              throughout the process.
            </span>
          </div>

          <div className="preservation-benefit-item">
            <strong>
              Specialized Knowledge
            </strong>

            <span>
              Experience with textiles and specialty contents helps guide
              appropriate care decisions.
            </span>
          </div>

          <div className="preservation-benefit-item">
            <strong>
              Long-Term Protection
            </strong>

            <span>
              Preservation helps support the continued care of meaningful
              belongings after restoration.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="preservation-cta">

        <div className="preservation-cta-content">

          <div>
            <span>
              Protecting What Matters
            </span>

            <h2>
              Thoughtful Preservation From Start to Finish.
            </h2>

            <p className="preservation-cta-text">
              When you are ready to discuss a specialty item or preservation
              need, use the Request Assistance button in the header and our
              team can help determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Preservations;