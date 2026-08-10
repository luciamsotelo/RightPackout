import React from "react";
import "../styles/Menu.css";

function Menu() {
  const serviceGroups = [
    {
      icon: "📦",
      title: "Content Packing",
      description: "Careful handling from packout through return.",
      items: [
        { label: "Pack Out & Pack Back", href: "/pack" },
        { label: "Storage", href: "/storage" },
        { label: "Moving Items", href: "/moving" },
        { label: "Preservation Services", href: "/preservation" },
      ],
    },

    {
      icon: "✨",
      title: "Cleaning & Restoration",
      description:
        "Specialized cleaning and restoration for damaged contents and furnishings.",
      items: [
        { label: "Fire Damage Restoration", href: "/fire" },
        { label: "Water & Mold Contents", href: "/mold" },
        { label: "Drapery Cleaning", href: "/drapery" },
        { label: "Furniture Restoration", href: "/restoration" },
        { label: "Window Treatments", href: "/window" },
      ],
    },

    {
      icon: "📋",
      title: "Contents Documentation",
      description:
        "Professional inventory and documentation for owners, contractors, and insurance claims.",
      items: [
        {
          label: "Contents Documentation",
          href: "/consultation",
        },
      ],
    },

    {
      icon: "🤝",
      title: "Project Coordination",
      description:
        "Organized coordination from packout through restoration and return.",
      items: [
        {
          label: "Project Management & Coordination",
          href: "/management",
        },
      ],
    },

    {
      icon: "🧹",
      title: "Specialty Cleaning",
      description:
        "Thoughtful solutions for challenging spaces and specialized cleaning needs.",
      items: [
        {
          label: "Construction Dust Cleaning",
          href: "/construction",
        },
        {
          label: "Hoarding Cleanup",
          href: "/hoarder",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="services-navigation-section"
    >
      <div className="container">

        {/* ==========================================
            SECTION HEADING
        ========================================== */}

        <div className="services-navigation-heading">
          <span className="services-eyebrow">
            Our Services
          </span>

          <h2 id="services-title">
            Complete Contents Care, From Packout to Return
          </h2>

          <p>
            Professional packing, cleaning, restoration, storage, and
            documentation services designed to protect your belongings
            through every stage of recovery.
          </p>
        </div>

        {/* ==========================================
            SERVICE GRID
        ========================================== */}

        <div className="compact-service-grid">
          {serviceGroups.map((group) => (
            <article
              className="compact-service-card"
              key={group.title}
            >
              {/* ==========================================
                  CARD HEADER
              ========================================== */}

              <div className="compact-service-header">
                <div
                  className="compact-service-icon"
                  aria-hidden="true"
                >
                  {group.icon}
                </div>

                <div>
                  <h3>
                    {group.title}
                  </h3>

                  <p>
                    {group.description}
                  </p>
                </div>
              </div>

              {/* ==========================================
                  CARD LINKS
              ========================================== */}

              <div className="compact-service-links">
                {group.items.map((item) => (
                  <a
                    href={item.href}
                    key={`${group.title}-${item.label}`}
                    className="compact-service-link"
                  >
                    <span>
                      {item.label}
                    </span>

                    <span aria-hidden="true">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Menu;