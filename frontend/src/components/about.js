import React from "react";
import "../styles/AboutPage.css";

const teamMembers = [
  {
    name: "Sharon Ward",
    role: "Contents Inventory & Operations",
    image:
      "https://img.freepik.com/fotos-kostenlos/laptop-auf-steinoberflaeche-und-meer-hintergrund_1232-430.jpg",
    imageAlt: "Temporary placeholder image for Sharon Ward",
    description:
      "Sharon is IICRC certified in odor control and brings specialized training in contents inventory and cleaning. Her experience coordinating schedules, managing vendors, and preparing Xactimate estimates supports organized projects, accurate planning, and dependable service.",
  },
  {
    name: "Emilio Vargas",
    role: "Contents Processing & Preservation",
    image:
      "https://t4.ftcdn.net/jpg/01/28/49/55/360_F_128495561_AxOj0KERPU6Vp4w3OWJqnkDySIsRMqHM.jpg",
    imageAlt: "Temporary placeholder image for Emilio Vargas",
    description:
      "Emilio is IICRC certified in Contents Processing and has specialized training in wedding gown preservation. With nearly 30 years of dry-cleaning experience, including owning and operating his own business, he brings extensive knowledge of garment care, cleaning, and preservation.",
  },
];

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-content">
          <span className="about-eyebrow">
            About The Right Pack Out
          </span>

          <h1>Experience. Care. Every Detail.</h1>

          <p>
            The Right Pack Out combines specialized training with decades of
            experience to provide professional packout, cleaning, inventory,
            storage, preservation, and restoration services with exceptional
            care.
          </p>
        </div>
      </section>

      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-copy">
            <span className="about-section-eyebrow">
              Working Together
            </span>

            <h2>Built on Experience. Driven by Care.</h2>

            <p>
              Together, Sharon Ward and Emilio Vargas provide decades of
              experience in contents inventory, restoration, cleaning,
              preservation, and insurance documentation.
            </p>

            <p>
              Their experience working with homeowners, contractors, and
              insurance professionals helps every project stay organized,
              accurate, and carefully managed from beginning to end.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight">
              <strong>30+ Years</strong>
              <span>Industry Experience</span>
            </div>

            <div className="about-highlight">
              <strong>IICRC</strong>
              <span>Certified Professionals</span>
            </div>

            <div className="about-highlight">
              <strong>Insurance</strong>
              <span>Documentation Expertise</span>
            </div>

            <div className="about-highlight">
              <strong>Contents</strong>
              <span>Handled With Care</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team-section">
        <div className="container">
          <div className="about-team-heading">
            <span className="about-section-eyebrow">
              Meet the Team
            </span>

            <h2>The People Behind The Right Pack Out</h2>

            <p>
              Experienced professionals committed to protecting, restoring,
              and carefully managing the belongings that matter most.
            </p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <article
                className="about-team-card"
                key={member.name}
              >
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className="about-team-image"
                />

                <div className="about-team-card-content">
                  <h3>{member.name}</h3>

                  <span className="about-team-role">
                    {member.role}
                  </span>

                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-content">
          <div>
            <span className="about-section-eyebrow">
              Here When You Need Us
            </span>

            <h2>Experience You Can Rely On.</h2>
          </div>

          <div className="about-cta-actions">
            <a
              href="tel:+16197867089"
              className="about-primary-button"
            >
              Call 619-786-7089
            </a>

            <a
              href="mailto:therightpackout@gmail.com?subject=Quote%20Request"
              className="about-secondary-button"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;