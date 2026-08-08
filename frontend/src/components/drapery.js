import React from "react";

import Drapes1 from "../images/Drapes1.jpeg";
import Drapes5 from "../images/Drapes5.jpeg";
import Drapes4 from "../images/Drapes4.jpeg";

import "../styles/DraperyPage.css";

function Drapery() {
  return (
    <main className="drapery-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="drapery-back">
        <a
          href="/#services"
          className="drapery-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="drapery-hero">
        <span className="drapery-eyebrow">
          Drapery Cleaning & Restoration
        </span>

        <h1>
          Professional Care for Draperies and Specialty Fabrics
        </h1>

        <p>
          Draperies and specialty fabrics deserve careful attention.
          The Right Pack Out provides professional take-down, cleaning,
          repair, and reinstallation services designed to protect their
          condition, appearance, and longevity.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="drapery-trust-strip">

        <div className="drapery-trust-item">
          <strong>
            Careful Take-Down
          </strong>

          <span>
            Draperies are removed with attention to fabrics and hardware
          </span>
        </div>

        <div className="drapery-trust-item">
          <strong>
            Specialty Cleaning
          </strong>

          <span>
            Cleaning methods are selected for the material and condition
          </span>
        </div>

        <div className="drapery-trust-item">
          <strong>
            Professional Reinstallation
          </strong>

          <span>
            Draperies are returned with attention to alignment and appearance
          </span>
        </div>

      </section>

      {/* ==========================================
          DRAPERY SERVICES
      ========================================== */}

      <section className="drapery-services">

        <div className="drapery-divider"></div>

        <div className="drapery-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Detailed Care From Removal to Reinstallation
          </h2>

          <p>
            Each stage is handled with attention to the fabric, hardware,
            placement, and overall appearance of the finished installation.
          </p>
        </div>

        <div className="drapery-service-grid">

          <article className="drapery-service-card">
            <div className="drapery-service-icon">
              🪜
            </div>

            <h3>
              Professional Take-Down
            </h3>

            <p>
              Draperies are carefully removed to help protect fabrics,
              hardware, and surrounding finishes.
            </p>
          </article>

          <article className="drapery-service-card">
            <div className="drapery-service-icon">
              🧼
            </div>

            <h3>
              Specialty Cleaning
            </h3>

            <p>
              Cleaning methods are selected based on fabric type,
              construction, condition, and restoration needs.
            </p>
          </article>

          <article className="drapery-service-card">
            <div className="drapery-service-icon">
              🧵
            </div>

            <h3>
              Repairs & Fabrication
            </h3>

            <p>
              Minor repairs or replacement fabrication can be coordinated
              when appropriate for the project.
            </p>
          </article>

          <article className="drapery-service-card">
            <div className="drapery-service-icon">
              🪟
            </div>

            <h3>
              Professional Reinstallation
            </h3>

            <p>
              Draperies are rehung with attention to placement,
              alignment, hardware, and finished appearance.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE AREA
      ========================================== */}

      <section className="drapery-feature">

        <div className="drapery-feature-copy">
          <span className="drapery-eyebrow">
            From Take-Down to Rehang
          </span>

          <h2>
            Managed With Care Through Every Stage
          </h2>

          <p>
            Drapery restoration involves more than cleaning alone.
            Careful removal, proper treatment, repairs when needed,
            and professional reinstallation all contribute to the final result.
          </p>

          <p>
            Our team helps coordinate the entire process so specialty fabrics
            and window treatments are handled thoughtfully from beginning
            to completion.
          </p>
        </div>

        <div className="drapery-feature-panel">
          <span className="drapery-feature-label">
            Finished With Care
          </span>

          <h3>
            Removed. Cleaned. Reinstalled.
          </h3>

          <p>
            A coordinated process helps protect the fabric while supporting
            a clean, polished, and properly finished installation.
          </p>
        </div>

      </section>

      {/* ==========================================
          REAL DRAPERY WORK
      ========================================== */}

      <section className="drapery-projects">

        <div className="drapery-section-heading">
          <span>
            Real Drapery Work
          </span>

          <h2>
            Careful Handling. Clean Results. Professional Reinstallation.
          </h2>

          <p>
            Examples of draperies and specialty window treatments handled
            through cleaning, restoration, and reinstallation.
          </p>
        </div>

        <div className="drapery-project-grid">

          <article className="drapery-project-card">
            <img
              src={Drapes1}
              alt="Professional drapery cleaning and restoration"
            />

            <div className="drapery-project-card-content">
              <span className="drapery-project-label">
                Drapery Care
              </span>

              <h3>
                Carefully Cleaned
              </h3>

              <p>
                Specialty fabrics are handled with care throughout
                the cleaning and restoration process.
              </p>
            </div>
          </article>

          <article className="drapery-project-card">
            <img
              src={Drapes5}
              alt="Restored draperies professionally rehung"
            />

            <div className="drapery-project-card-content">
              <span className="drapery-project-label">
                Reinstallation
              </span>

              <h3>
                Professionally Rehung
              </h3>

              <p>
                Draperies are carefully returned and reinstalled with
                attention to alignment, placement, and appearance.
              </p>
            </div>
          </article>

          <article className="drapery-project-card">
            <img
              src={Drapes4}
              alt="Finished drapery installation after professional cleaning"
            />

            <div className="drapery-project-card-content">
              <span className="drapery-project-label">
                Finished Result
              </span>

              <h3>
                Restored & Ready
              </h3>

              <p>
                The finished installation reflects careful cleaning,
                handling, and attention to detail throughout the project.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="drapery-benefits">

        <div className="drapery-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Specialty Care for Fabrics and Window Treatments
          </h2>
        </div>

        <div className="drapery-benefit-grid">

          <div className="drapery-benefit-item">
            <strong>
              Fabric-Focused Care
            </strong>

            <span>
              Treatment decisions are made with the material and
              construction of the drapery in mind.
            </span>
          </div>

          <div className="drapery-benefit-item">
            <strong>
              Careful Handling
            </strong>

            <span>
              Draperies, hardware, and surrounding finishes are handled
              thoughtfully throughout the process.
            </span>
          </div>

          <div className="drapery-benefit-item">
            <strong>
              Repair Coordination
            </strong>

            <span>
              Repairs or replacement fabrication can be coordinated
              when restoration alone is not enough.
            </span>
          </div>

          <div className="drapery-benefit-item">
            <strong>
              Finished Appearance
            </strong>

            <span>
              Reinstallation focuses on alignment, placement, and
              a professional finished result.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="drapery-cta">

        <div className="drapery-cta-content">

          <div>
            <span>
              From Fabric Care to Final Rehang
            </span>

            <h2>
              Drapery Care Managed From Start to Finish.
            </h2>

            <p className="drapery-cta-text">
              When you are ready to discuss drapery cleaning, repair,
              or reinstallation, use the Request Assistance button in
              the header and our team can help determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Drapery;