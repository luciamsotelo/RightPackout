import React from "react";

import ChairBefore from "../images/chairCleanB1.jpeg";
import ChairAfter from "../images/ChairCleanA1.jpeg";

import CouchBefore from "../images/vomitCouchB5.jpeg";
import CouchAfter from "../images/vomitCouchA1.jpeg";

import FireBefore from "../images/FjacketB3.jpeg";
import FireAfter from "../images/FjacketA1.jpeg";

import "../styles/BeforeAfterGallery.css";

const BeforeAfterGallery = ({ featuredOnly = false }) => {
  const projects = [
    {
      id: 1,
      title: "Furniture Cleaning & Restoration",
      description:
        "Detailed cleaning and restoration helped refresh this upholstered chair and improve its overall appearance.",
      beforeImage: ChairBefore,
      afterImage: ChairAfter,
    },

    {
      id: 2,
      title: "Upholstery Cleaning",
      description:
        "Professional treatment helped remove visible contamination and restore this couch to a cleaner condition.",
      beforeImage: CouchBefore,
      afterImage: CouchAfter,
    },

    {
      id: 3,
      title: "Fire-Damaged Garment Restoration",
      description:
        "Specialized contents cleaning helped restore this garment following exposure to fire and smoke damage.",
      beforeImage: FireBefore,
      afterImage: FireAfter,
    },
  ];

  const visibleProjects = featuredOnly
    ? projects.slice(0, 1)
    : projects;

  return (
    <section
      className={`before-after-section ${
        featuredOnly ? "featured-before-after" : ""
      }`}
      aria-labelledby="before-after-title"
    >
      <div className="container">
        <div className="before-after-heading">
          <span className="before-after-eyebrow">
            {featuredOnly
              ? "Featured Transformation"
              : "Our Work"}
          </span>

          <h2 id="before-after-title">
            See the Difference Professional Care Can Make
          </h2>

          <p>
            Explore examples of contents cleaning and restoration
            performed with careful attention to detail.
          </p>
        </div>

        <div className="before-after-grid">
          {visibleProjects.map((project) => (
            <article
              className="before-after-card"
              key={project.id}
            >
              <div className="before-after-images">
                <figure className="project-image-wrapper">
                  <img
                    src={project.beforeImage}
                    alt={`Before ${project.title}`}
                    className="project-comparison-image"
                  />

                  <span className="project-image-label before-label">
                    Before
                  </span>
                </figure>

                <div
                  className="comparison-arrow"
                  aria-hidden="true"
                >
                  →
                </div>

                <figure className="project-image-wrapper">
                  <img
                    src={project.afterImage}
                    alt={`After ${project.title}`}
                    className="project-comparison-image"
                  />

                  <span className="project-image-label after-label">
                    After
                  </span>
                </figure>
              </div>

              <div className="before-after-card-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href="/restoration"
                  className="project-details-link"
                >
                  Explore Restoration Services
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="before-after-actions">
          <a
            href="/our-work"
            className="before-after-primary-button"
          >
            View All Our Work
          </a>

          <a
            href="/request-assistance"
            className="before-after-outline-button"
          >
            Request Assistance
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;