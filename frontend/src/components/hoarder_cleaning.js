import React from "react";

import Hoarder1 from "../images/hhcleanup1.jpeg";
import Hoarder2 from "../images/hhcleanup2.jpeg";
import Hoarder3 from "../images/hhcleanup3.jpeg";
import Hoarder4 from "../images/hhcleanup4.jpeg";

import "../styles/HoarderPage.css";

function HoarderCleaning() {
  return (
    <main className="hoarder-page">

      {/* ==========================================
          BACK TO SERVICES
      ========================================== */}

      <div className="hoarder-back">
        <a
          href="/#services"
          className="hoarder-back-link"
        >
          ← Back to All Services
        </a>
      </div>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="hoarder-hero">
        <span className="hoarder-eyebrow">
          Specialty Cleaning
        </span>

        <h1>
          Cleanup With Care and Respect
        </h1>

        <p>
        We know that asking for help isn't always easy. That's why every cleanup is approached with patience, compassion, and complete respect. Our goal is to create a safe, comfortable environment while treating every person, every family, and every cherished belonging with the care they deserve.
        </p>
      </section>

      {/* ==========================================
          TRUST STRIP
      ========================================== */}

      <section className="hoarder-trust-strip">

        <div className="hoarder-trust-item">
          <strong>
            Respectful Approach
          </strong>

          <span>
            Every project is handled with discretion, patience, and care
          </span>
        </div>

        <div className="hoarder-trust-item">
          <strong>
            Organized Sorting
          </strong>

          <span>
            Belongings can be separated and organized throughout cleanup
          </span>
        </div>

        <div className="hoarder-trust-item">
          <strong>
            Detailed Cleaning
          </strong>

          <span>
            Cleared spaces receive careful cleaning and final attention
          </span>
        </div>

      </section>

      {/* ==========================================
          HOARDING CLEANUP SERVICES
      ========================================== */}

      <section className="hoarder-services">

        <div className="hoarder-divider"></div>

        <div className="hoarder-section-heading">
          <span>
            What's Included
          </span>

          <h2>
            Organized Support for Challenging Cleanup Projects
          </h2>

          <p>
            Every property is different. Our approach focuses on careful
            sorting, organized removal, detailed cleaning, and thoughtful
            handling throughout the process.
          </p>
        </div>

        <div className="hoarder-service-grid">

          <article className="hoarder-service-card">
            <div className="hoarder-service-icon">
              📦
            </div>

            <h3>
              Sorting & Organization
            </h3>

            <p>
              Belongings can be reviewed, separated, and organized to help
              identify what should remain, be relocated, or be removed.
            </p>
          </article>

          <article className="hoarder-service-card">
            <div className="hoarder-service-icon">
              🧹
            </div>

            <h3>
              Clutter Removal
            </h3>

            <p>
              Excess clutter and unwanted materials can be systematically
              removed to help make the space safer and more manageable.
            </p>
          </article>

          <article className="hoarder-service-card">
            <div className="hoarder-service-icon">
              🧼
            </div>

            <h3>
              Detailed Cleaning
            </h3>

            <p>
              Once areas are cleared, surfaces and surrounding spaces can
              receive thorough cleaning and attention.
            </p>
          </article>

          <article className="hoarder-service-card">
            <div className="hoarder-service-icon">
              🏠
            </div>

            <h3>
              Space Preparation
            </h3>

            <p>
              Final cleanup can help prepare the property for continued use,
              repairs, restoration work, or the next stage of recovery.
            </p>
          </article>

        </div>
      </section>

      {/* ==========================================
          FEATURE SECTION
      ========================================== */}

      <section className="hoarder-feature">

        <div className="hoarder-feature-copy">
          <span className="hoarder-eyebrow">
            A Thoughtful Approach
          </span>

          <h2>
            More Than Just Removing Clutter
          </h2>

          <p>
            Hoarding cleanup often involves personal belongings,
            sentimental items, safety concerns, and difficult decisions.
            A careful process helps bring order to the property without
            treating the project like an ordinary cleanout.
          </p>

          <p>
            Our team focuses on organization, respectful handling, and
            clear progress so each stage of the cleanup can move forward
            in a manageable way.
          </p>
        </div>

        <div className="hoarder-feature-panel">
          <span className="hoarder-feature-label">
            Respectful Cleanup
          </span>

          <h3>
            Sort. Clear. Clean.
          </h3>

          <p>
            A structured approach helps transform an overwhelming space
            into a cleaner, more organized, and more manageable environment.
          </p>
        </div>

      </section>

      {/* ==========================================
          REAL CLEANUP EXAMPLES
      ========================================== */}

      <section className="hoarder-projects">

        <div className="hoarder-section-heading">
          <span>
            Real Cleanup Work
          </span>

          <h2>
            Organized Progress, One Space at a Time
          </h2>

          <p>
            Hoarding cleanup is approached carefully and methodically so
            clutter, belongings, and affected areas can be addressed in an
            organized and respectful way.
          </p>
        </div>

        <div className="hoarder-project-grid">

          {/* PROJECT 1 */}

          <article className="hoarder-project-card">

            <img
              src={Hoarder1}
              alt="Hoarding cleanup project before organized cleanup"
            />

            <div className="hoarder-project-card-content">

              <span className="hoarder-project-label">
                Initial Assessment
              </span>

              <h3>
                Understanding the Space
              </h3>

              <p>
                Each cleanup begins by reviewing the condition of the
                property and identifying the safest and most organized
                way to move forward.
              </p>

            </div>

          </article>

          {/* PROJECT 2 */}

          <article className="hoarder-project-card">

            <img
              src={Hoarder2}
              alt="Professional hoarding cleanup and sorting process"
            />

            <div className="hoarder-project-card-content">

              <span className="hoarder-project-label">
                Organized Sorting
              </span>

              <h3>
                Addressing Belongings With Care
              </h3>

              <p>
                Items and clutter are addressed systematically to help
                create a more organized and manageable cleanup process.
              </p>

            </div>

          </article>

          {/* PROJECT 3 */}

          <article className="hoarder-project-card">

            <img
              src={Hoarder3}
              alt="Hoarding cleanup project in progress"
            />

            <div className="hoarder-project-card-content">

              <span className="hoarder-project-label">
                Cleanup in Progress
              </span>

              <h3>
                Creating Safer, Usable Space
              </h3>

              <p>
                Areas are cleared in stages so cleaning, organization,
                and property recovery can continue in a structured way.
              </p>

            </div>

          </article>

          {/* PROJECT 4 */}

          <article className="hoarder-project-card">

            <img
              src={Hoarder4}
              alt="Completed professional hoarding cleanup project"
            />

            <div className="hoarder-project-card-content">

              <span className="hoarder-project-label">
                Final Cleanup
              </span>

              <h3>
                Preparing the Property for What Comes Next
              </h3>

              <p>
                Final cleaning helps prepare the space for continued use,
                repairs, restoration work, or the next stage of recovery.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="hoarder-benefits">

        <div className="hoarder-section-heading">
          <span>
            Why Choose The Right Pack Out
          </span>

          <h2>
            Professional Cleanup With a Respectful Approach
          </h2>
        </div>

        <div className="hoarder-benefit-grid">

          <div className="hoarder-benefit-item">
            <strong>
              Discreet Service
            </strong>

            <span>
              Projects are approached with privacy, professionalism,
              and respect for the people involved.
            </span>
          </div>

          <div className="hoarder-benefit-item">
            <strong>
              Organized Process
            </strong>

            <span>
              Sorting and cleanup are handled in stages to help make
              challenging spaces more manageable.
            </span>
          </div>

          <div className="hoarder-benefit-item">
            <strong>
              Careful Contents Handling
            </strong>

            <span>
              Belongings can be handled thoughtfully throughout sorting,
              removal, storage, or relocation.
            </span>
          </div>

          <div className="hoarder-benefit-item">
            <strong>
              Detailed Final Cleaning
            </strong>

            <span>
              Cleared areas receive additional cleaning to help prepare
              the property for its next use.
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}

      <section className="hoarder-cta">

        <div className="hoarder-cta-content">

          <div>
            <span>
              A More Manageable Path Forward
            </span>

            <h2>
              Thoughtful Cleanup for Challenging Spaces.
            </h2>

            <p className="hoarder-cta-text">
              When you are ready to discuss a hoarding cleanup project,
              use the contact button in the header and our team can help
              determine the next steps.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default HoarderCleaning;