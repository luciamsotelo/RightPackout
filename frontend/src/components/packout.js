import React, { useState } from "react";

import RequestAssistanceModal from "./RequestAssistanceModal";

import Storage2 from "../images/PONapa2.jpeg";
import FurnitureAfter from "../images/FurnitureAfter.jpeg";

import "../styles/PackOutPage.css";

function Packout() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="packout-page">

        {/* ==========================================
            BACK TO SERVICES
        ========================================== */}

        <div className="packout-back">
          <a
            href="/#services"
            className="packout-back-link"
          >
            ← Back to All Services
          </a>
        </div>

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="packout-hero">
          <span className="packout-eyebrow">
            Contents Restoration Services
          </span>

          <h1>
            Protecting What Matters Most
          </h1>

          <p>
            When fire, water, smoke, mold, or renovation disrupts your home
            or business, The Right Pack Out is here to help. From careful
            inventory and professional packing to secure storage and thoughtful
            return, we treat your belongings with care throughout the process.
          </p>
        </section>

        {/* ==========================================
            TRUST STRIP
        ========================================== */}

        <section className="packout-trust-strip">

          <div className="packout-trust-item">
            <strong>
              Detailed Inventory
            </strong>

            <span>
              Organized documentation and tracking from the start
            </span>
          </div>

          <div className="packout-trust-item">
            <strong>
              Careful Handling
            </strong>

            <span>
              Professional packing and protection for your belongings
            </span>
          </div>

          <div className="packout-trust-item">
            <strong>
              Organized Return
            </strong>

            <span>
              Coordinated pack back once your property is ready
            </span>
          </div>

        </section>

        {/* ==========================================
            PACK OUT / PACK BACK
        ========================================== */}

        <section className="packout-services">

          <div className="packout-divider"></div>

          <div className="packout-section-heading">
            <span>
              What's Included
            </span>

            <h2>
              From Careful Removal to Thoughtful Return
            </h2>

            <p>
              Every stage is organized to help protect your belongings
              and keep the restoration process moving smoothly.
            </p>
          </div>

          <div className="packout-service-grid">

            <article className="packout-service-card">
              <div className="packout-service-icon">
                📋
              </div>

              <h3>
                Detailed Inventory
              </h3>

              <p>
                Contents are documented and organized for accurate
                tracking throughout the project.
              </p>
            </article>

            <article className="packout-service-card">
              <div className="packout-service-icon">
                📦
              </div>

              <h3>
                Professional Packing
              </h3>

              <p>
                Belongings are carefully wrapped, boxed, labeled,
                and prepared for secure transport.
              </p>
            </article>

            <article className="packout-service-card">
              <div className="packout-service-icon">
                🏢
              </div>

              <h3>
                Secure Storage
              </h3>

              <p>
                Contents can be organized and protected while restoration
                or repair work is underway.
              </p>
            </article>

            <article className="packout-service-card">
              <div className="packout-service-icon">
                🏠
              </div>

              <h3>
                Pack Back & Return
              </h3>

              <p>
                Items are carefully returned and coordinated for placement
                once the property is ready.
              </p>
            </article>

          </div>
        </section>

        {/* ==========================================
            FEATURE AREA
        ========================================== */}

        <section className="packout-feature">

          <div className="packout-feature-copy">
            <span className="packout-eyebrow">
              From Start to Finish
            </span>

            <h2>
              Organized Care Throughout the Recovery Process
            </h2>

            <p>
              Pack out begins with careful documentation, packing,
              labeling, and preparation for transportation or storage.
            </p>

            <p>
              Once restoration work is complete, belongings are coordinated
              for return so the home or business can begin returning to normal.
            </p>
          </div>

          <div className="packout-feature-panel">
            <span className="packout-feature-label">
              Complete Contents Care
            </span>

            <h3>
              Documented. Protected. Returned.
            </h3>

            <p>
              From the first inventory to the final placement, your contents
              remain organized and carefully managed throughout the project.
            </p>
          </div>

        </section>

        {/* ==========================================
            PROJECT PHOTOS
        ========================================== */}

        <section className="packout-projects">

          <div className="packout-section-heading">
            <span>
              Pack Out to Pack Back
            </span>

            <h2>
              Care at Every Stage
            </h2>

            <p>
              Your belongings are carefully managed from preparation
              and storage through final return.
            </p>
          </div>

          <div className="packout-project-grid">

            <article className="packout-project-card">
              <img
                src={Storage2}
                alt="Professionally packed and organized contents prepared for secure storage"
              />

              <div className="packout-project-card-content">
                <span className="packout-step">
                  Pack Out
                </span>

                <h3>
                  Carefully Packed & Organized
                </h3>

                <p>
                  Contents are inventoried, professionally packed,
                  labeled, and organized for secure transportation or storage.
                </p>
              </div>
            </article>

            <article className="packout-project-card">
              <img
                src={FurnitureAfter}
                alt="Restored home furnishings after professional contents return"
              />

              <div className="packout-project-card-content">
                <span className="packout-step">
                  Pack Back
                </span>

                <h3>
                  Returned With Care
                </h3>

                <p>
                  After restoration is complete, belongings are carefully
                  returned and coordinated for placement back into the property.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* ==========================================
            WHY CHOOSE US
        ========================================== */}

        <section className="packout-benefits">

          <div className="packout-section-heading">
            <span>
              Why Choose The Right Pack Out
            </span>

            <h2>
              Professional Care for Your Contents
            </h2>
          </div>

          <div className="packout-benefit-grid">

            <div className="packout-benefit-item">
              <strong>
                Detailed Documentation
              </strong>

              <span>
                Organized records help track contents throughout the project.
              </span>
            </div>

            <div className="packout-benefit-item">
              <strong>
                Careful Protection
              </strong>

              <span>
                Belongings are handled, packed, and stored with attention to detail.
              </span>
            </div>

            <div className="packout-benefit-item">
              <strong>
                Coordinated Service
              </strong>

              <span>
                Packout, storage, restoration, and return can be organized together.
              </span>
            </div>

            <div className="packout-benefit-item">
              <strong>
                Residential & Commercial
              </strong>

              <span>
                Services can support homes, businesses, and restoration projects.
              </span>
            </div>

          </div>
        </section>

        {/* ==========================================
            FINAL CTA
        ========================================== */}

        <section className="packout-cta">

          <div className="packout-cta-content">

            <div>
              <span>
                Here When You Need Us
              </span>

              <h2>
                Need Help With a Pack Out or Pack Back?
              </h2>
            </div>

            <div className="packout-cta-actions">

              <button
                type="button"
                className="packout-primary-button"
                onClick={handleShowModal}
              >
                Request Assistance
              </button>

              <a
                href="tel:+16197867089"
                className="packout-secondary-button"
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
        service="Pack Out & Pack Back"
      />

    </>
  );
}

export default Packout;