import React from "react";
import "../App.css";

function Menu() {
  const serviceGroups = [
    {
      icon: "📦",
      title: "Content Packing",
      description:
        "Careful packing, inventory, transportation, storage, and return of your belongings.",
      items: [
        { label: "Pack Out & Pack Back", href: "/pack" },
        { label: "Storage", href: "/storage" },
        { label: "Moving Items", href: "/moving" },
        { label: "Preservation Services", href: "/preservations" },
      ],
    },
    {
      icon: "✨",
      title: "Cleaning & Restoration",
      description:
        "Specialized cleaning and restoration for furniture, drapery, fire, mold, and windows.",
      items: [
        { label: "Drapery Services", href: "/drapery" },
        { label: "Mold Restoration", href: "/mold" },
        { label: "Fire Restoration", href: "/fire" },
        { label: "Furniture Cleaning", href: "/restoration" },
        { label: "Window Cleaning", href: "/window" },
      ],
    },
    {
      icon: "📋",
      title: "Consultation Guidance",
      description:
        "Professional documentation and guidance for property owners and insurance professionals.",
      items: [
        { label: "Contents Consultation", href: "/consultation" },
        { label: "Insurance Reports", href: "/consultation" },
        { label: "Total Loss Inventory", href: "/consultation" },
      ],
    },
    {
      icon: "🤝",
      title: "Management Services",
      description:
        "Organized project coordination to help keep each phase moving efficiently.",
      items: [
        { label: "Site Coordination", href: "/management" },
        { label: "Site Management", href: "/management" },
      ],
    },
    {
      icon: "🧹",
      title: "Specialty Cleaning",
      description:
        "Thoughtful cleanup solutions for challenging residential and commercial environments.",
      items: [
        { label: "Construction Cleanup", href: "/construction" },
        { label: "Hoarder House Cleaning", href: "/hoarder" },
      ],
    },
  ];

  return (
    <section className="services-navigation" aria-labelledby="services-title">
      <div className="container">
        <div className="services-navigation-heading">
          <span className="services-eyebrow">Explore Our Services</span>

          <h2 id="services-title">How The Right Pack Out Can Help</h2>

          <p>
            From careful packouts and secure storage to specialized cleaning,
            restoration, and detailed reporting, our team is here to help.
          </p>
        </div>

        <div className="service-card-grid">
          {serviceGroups.map((group) => (
            <article className="service-category-card" key={group.title}>
              <div className="service-card-icon" aria-hidden="true">
                {group.icon}
              </div>

              <h3>{group.title}</h3>

              <p className="service-card-description">
                {group.description}
              </p>

              <div className="service-card-links">
                {group.items.map((item) => (
                  <a
                    href={item.href}
                    key={`${group.title}-${item.label}`}
                    className="service-card-link"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
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