import React from "react";

import StorageOS2 from "../images/storage-os2.jpeg";
import Storage2 from "../images/Storage2.jpeg";

import "../styles/MovingPage.css";

function Moving() {
  return (
    <main className="moving-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="moving-back">
        <a
          href="/#services"
          className="moving-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="moving-hero">
        <span className="moving-eyebrow">
          Professional Moving Support
        </span>

        <h1>
          Organized. Protected. Relocated.
        </h1>

        <p>
          Relocating your belongings can feel overwhelming. The Right Pack Out
          provides careful packing, secure handling, and organized transport
          to help make the transition as smooth and stress-free as possible.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="moving-trust-strip">

        <div className="moving-trust-item">
          <strong>
            Careful Packing
          </strong>

          <span>
            Belongings are protected and organized before the move begins
          </span>
        </div>

        <div className="moving-trust-item">
          <strong>
            Secure Handling
          </strong>

          <span>
            Thoughtful care throughout loading, transport, and unloading
          </span>
        </div>

        <div className="moving-trust-item">
          <strong>
            Organized Placement
          </strong>

          <span>
            Coordinated delivery helps make settling in easier
          </span>
        </div>

      </section>

      {/* ==========================================
          MOVING SERVICES
      ========================================== */}

      <section className="moving-services">

        <div className="moving-divider"></div>

        <div className="moving-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Organized Care From One Location to the Next
          </h2>

          <p>
            Every move is approached with careful planning, clear
            organization, and respect for the belongings entrusted to us.
          </p>
        </div>

        <div className="moving-service-grid">

          <article className="moving-service-card">
            <div className="moving-service-icon">
              📦
            </div>

            <h3>
              Careful Packing
            </h3>

            <p>
              Belongings are wrapped and packed with attention to their
              size, material, condition, and transportation needs.
            </p>
          </article>

          <article className="moving-service-card">
            <div className="moving-service-icon">
              🏷️
            </div>

            <h3>
              Organized Labeling
            </h3>

            <p>
              Boxes and contents are clearly labeled to help keep the
              relocation organized from beginning to end.
            </p>
          </article>

          <article className="moving-service-card">
            <div className="moving-service-icon">
              🚚
            </div>

            <h3>
              Secure Transport
            </h3>

            <p>
              Items are carefully handled during loading, transportation,
              and unloading to help protect them throughout the move.
            </p>
          </article>

          <article className="moving-service-card">
            <div className="moving-service-icon">
              🏠
            </div>

            <h3>
              Thoughtful Placement
            </h3>

            <p>
              Belongings can be coordinated for placement at the destination
              to help make the transition easier and more organized.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE AREA
      ========================================== */}

      <section className="moving-feature">

        <div className="moving-feature-copy">
          <span className="moving-eyebrow">
            From Start to Finish
          </span>

          <h2>
            A More Organized Moving Experience
          </h2>

          <p>
            A successful move starts before anything leaves the property.
            Careful preparation, packing, labeling, and coordination help
            protect belongings and keep the process organized.
          </p>

          <p>
            From loading and transportation through unloading and placement,
            our team focuses on thoughtful handling and clear organization
            every step of the way.
          </p>
        </div>

        <div className="moving-feature-panel">
          <span className="moving-feature-label">
            Professional Moving Support
          </span>

          <h3>
            Packed. Protected. Delivered.
          </h3>

          <p>
            Your belongings remain carefully managed throughout the move,
            helping create a smoother transition from one location to the next.
          </p>
        </div>

      </section>

      {/* ==========================================
          MOVING EXAMPLES
      ========================================== */}

      <section className="moving-projects">

        <div className="moving-section-heading">
          <span>
            Professional Moving Services
          </span>

          <h2>
            Every Move Begins With Careful Preparation
          </h2>

          <p>
            Proper packing and organization help protect belongings
            throughout loading, transportation, and final placement.
          </p>
        </div>

        <div className="moving-project-grid">

          <article className="moving-project-card">
            <img
              src={StorageOS2}
              alt="Professionally packed household belongings prepared for relocation"
            />

            <div className="moving-project-card-content">
              <span className="moving-project-label">
                Organized Packing
              </span>

              <h3>
                Ready for Safe Transport
              </h3>

              <p>
                Items are carefully wrapped, organized, and packed to help
                protect them throughout the moving process.
              </p>
            </div>
          </article>

          <article className="moving-project-card">
            <img
              src={Storage2}
              alt="Professionally organized household belongings during relocation"
            />

            <div className="moving-project-card-content">
              <span className="moving-project-label">
                Professional Handling
              </span>

              <h3>
                Organized Every Step of the Way
              </h3>

              <p>
                From preparation and loading through final delivery, belongings
                remain organized and carefully handled throughout the move.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="moving-benefits">

        <div className="moving-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Professional Care Throughout Your Move
          </h2>
        </div>

        <div className="moving-benefit-grid">

          <div className="moving-benefit-item">
            <strong>
              Careful Preparation
            </strong>

            <span>
              Packing begins with organization and attention to the needs
              of each item.
            </span>
          </div>

          <div className="moving-benefit-item">
            <strong>
              Furniture Protection
            </strong>

            <span>
              Furnishings receive appropriate protection during handling
              and transportation.
            </span>
          </div>

          <div className="moving-benefit-item">
            <strong>
              Coordinated Delivery
            </strong>

            <span>
              Delivery can be organized around the needs and schedule
              of the destination.
            </span>
          </div>

          <div className="moving-benefit-item">
            <strong>
              Residential & Commercial
            </strong>

            <span>
              Moving support can be coordinated for homes, businesses,
              and restoration-related projects.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="moving-cta">

        <div className="moving-cta-content">

          <div>
            <span>
              A Smoother Transition
            </span>

            <h2>
              Moving With Care From Start to Finish.
            </h2>

            <p className="moving-cta-text">
              When you're ready to discuss your move, use the Request
              Assistance button in the header and our team can help you
              determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Moving;