import React from "react";

import "../styles/ManagementPage.css";

function Management() {
  return (
    <main className="management-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="management-back">
        <a
          href="/#services"
          className="management-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="management-hero">
        <span className="management-eyebrow">
          Project Coordination
        </span>

        <h1>
          Keeping Your Project on Track
        </h1>

        <p>
          The Right Pack Out helps keep every stage of your project organized
          through clear communication, coordinated scheduling, and careful
          oversight from start to finish.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="management-trust-strip">

        <div className="management-trust-item">
          <strong>
            Clear Communication
          </strong>

          <span>
            Homeowners, contractors, vendors, and project partners stay informed
          </span>
        </div>

        <div className="management-trust-item">
          <strong>
            Coordinated Scheduling
          </strong>

          <span>
            Project activities are organized around access, timelines, and priorities
          </span>
        </div>

        <div className="management-trust-item">
          <strong>
            Organized Oversight
          </strong>

          <span>
            Contents-related work is tracked from planning through completion
          </span>
        </div>

      </section>

      {/* ==========================================
          PROJECT COORDINATION SERVICES
      ========================================== */}

      <section className="management-services">

        <div className="management-divider"></div>

        <div className="management-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Organized Support From Planning to Completion
          </h2>

          <p>
            Restoration projects can involve many moving parts. Our role is
            to help coordinate the details so everyone involved has a clearer
            understanding of timing, responsibilities, and next steps.
          </p>
        </div>

        <div className="management-service-grid">

          <article className="management-service-card">
            <div className="management-service-icon">
              📅
            </div>

            <h3>
              Schedule Coordination
            </h3>

            <p>
              Project timing, access, and service activities are coordinated
              around restoration, construction, and occupancy needs.
            </p>
          </article>

          <article className="management-service-card">
            <div className="management-service-icon">
              🤝
            </div>

            <h3>
              Vendor Coordination
            </h3>

            <p>
              Communication with contractors, vendors, and service providers
              helps keep responsibilities clear and reduce unnecessary delays.
            </p>
          </article>

          <article className="management-service-card">
            <div className="management-service-icon">
              📦
            </div>

            <h3>
              Contents Logistics
            </h3>

            <p>
              Packout, storage, cleaning, delivery, and return activities can
              be organized as the project moves through each phase.
            </p>
          </article>

          <article className="management-service-card">
            <div className="management-service-icon">
              📋
            </div>

            <h3>
              Progress Tracking
            </h3>

            <p>
              Project stages are monitored to help identify what has been
              completed and what still requires attention.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE SECTION
      ========================================== */}

      <section className="management-feature">

        <div className="management-feature-copy">
          <span className="management-eyebrow">
            Coordinated From Start to Finish
          </span>

          <h2>
            One Organized Approach to a Complex Project
          </h2>

          <p>
            Contents restoration often overlaps with construction, insurance,
            specialty cleaning, storage, and multiple service providers.
            Without clear coordination, schedules and responsibilities can
            quickly become difficult to manage.
          </p>

          <p>
            The Right Pack Out helps connect the moving parts through
            organized communication, project planning, and thoughtful
            coordination throughout the recovery process.
          </p>
        </div>

        <div className="management-feature-panel">
          <span className="management-feature-label">
            Project Oversight
          </span>

          <h3>
            Plan. Coordinate. Complete.
          </h3>

          <p>
            Clear communication and organized project oversight help support
            a smoother transition from the first phase of recovery through
            final completion.
          </p>
        </div>

      </section>

      {/* ==========================================
          PROJECT SUPPORT
      ========================================== */}

      <section className="management-details">

        <div className="management-section-heading">
          <span>
            Project Support
          </span>

          <h2>
            Site Coordination and Project Management
          </h2>

          <p>
            These services work together to help keep contents-related work
            organized and moving in the right direction.
          </p>
        </div>

        <div className="management-detail-grid">

          <article className="management-detail-card">
            <span className="management-detail-label">
              Site Coordination
            </span>

            <h3>
              Keeping On-Site Activities Aligned
            </h3>

            <p>
              Site coordination focuses on scheduling, access, communication,
              logistics, and the day-to-day details needed to keep
              contents-related services moving efficiently.
            </p>
          </article>

          <article className="management-detail-card">
            <span className="management-detail-label">
              Project Management
            </span>

            <h3>
              Organized Oversight Through Every Phase
            </h3>

            <p>
              Project management brings together planning, progress tracking,
              communication, and coordination so each stage remains organized
              from beginning to completion.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="management-benefits">

        <div className="management-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Clear Communication. Organized Execution.
          </h2>

          <p>
            Strong coordination helps reduce confusion, clarify
            responsibilities, and support a smoother restoration process.
          </p>
        </div>

        <div className="management-benefit-grid">

          <div className="management-benefit-item">
            <strong>
              Central Communication
            </strong>

            <span>
              Clear communication helps keep homeowners, contractors,
              vendors, and project partners aligned.
            </span>
          </div>

          <div className="management-benefit-item">
            <strong>
              Schedule Coordination
            </strong>

            <span>
              Project timing and access can be coordinated around
              restoration and construction activities.
            </span>
          </div>

          <div className="management-benefit-item">
            <strong>
              Contents Logistics
            </strong>

            <span>
              Packout, storage, cleaning, delivery, and return activities
              can be organized throughout the project.
            </span>
          </div>

          <div className="management-benefit-item">
            <strong>
              Progress Tracking
            </strong>

            <span>
              Project stages are monitored to help identify what has been
              completed and what requires attention.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="management-cta">

        <div className="management-cta-content">

          <div>
            <span>
              Here From Start to Finish
            </span>

            <h2>
              Coordinated Support Through Every Stage of the Project.
            </h2>

            <p className="management-cta-text">
              When you are ready to discuss site coordination or project
              management, use the Request Assistance button in the header
              and our team can help determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Management;