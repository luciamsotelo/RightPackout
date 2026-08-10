import React, { useState } from "react";
import "../styles/OurWorkPage.css";

/* ==========================================
   STANDARD BEFORE / AFTER PROJECTS
========================================== */

import furnitureBefore from "../images/Furniture.jpeg";
import furnitureAfter from "../images/FurnitureAfter.jpeg";

import chairBefore from "../images/ChairCleanA1.jpeg";
import chairAfter from "../images/chairCleanB1.jpeg";

import headboardBefore from "../images/headbefore1.jpeg";
import headboardAfter from "../images/headAfter1.jpeg";

/* ==========================================
   FIRE & SMOKE CASE STUDY
========================================== */

import jacketAfterLeft from "../images/FjacketA1.jpeg";
import jacketAfterRight from "../images/FjacketA2.jpeg";
import jacketBeforeLeft from "../images/FjacketB1.jpeg";
import jacketBeforeRight from "../images/FjacketB2.jpeg";
import jacketBeforeFull from "../images/FjacketB3.jpeg";

/* ==========================================
   CONTENTS CLEANING CASE STUDY
========================================== */

import couchBefore1 from "../images/vomitCouchB1.jpeg";
import couchBefore2 from "../images/vomitCouchB2.jpeg";
import couchBefore3 from "../images/vomitCouchB5.jpeg";
import couchTreatment from "../images/vomitCouch4.jpeg";
import couchAfter1 from "../images/vomitCouchA1.jpeg";
import couchAfter2 from "../images/vomitCouchB3.jpeg";

/* ==========================================
   WATER & MOLD CASE STUDY
========================================== */

import moldShoe from "../images/MB&Ashoe.jpeg";
import guitarCase1 from "../images/MGCase1.jpeg";
import guitarCase2 from "../images/MGCase2.jpeg";
import guitarCase3 from "../images/MGCase3.jpeg";
import guitarCase4 from "../images/MGCase4.jpeg";
import guitarCase5 from "../images/MGCase5.jpeg";

/* ==========================================
   DRAPERY DOCUMENTATION
========================================== */

import draperyCondition1 from "../images/consCurt2.jpeg";
import draperyCondition2 from "../images/consCurt3.jpeg";
import draperyCondition3 from "../images/consCurt4.jpeg";
import draperyCondition4 from "../images/consCurt5.jpeg";
import draperyLaceDamage from "../images/consdamlace.jpeg";
import draperyShade1 from "../images/consShade1.jpeg";
import draperyShade2 from "../images/consShade2.jpeg";
import draperyConditionFinal from "../images/curtain1.jpeg";

/* ==========================================
   COMPLETED DRAPERY WORK
========================================== */

import drapes1 from "../images/Drapes1.jpeg";
import drapes2 from "../images/Drapes2.jpeg";
import drapes3 from "../images/Drapes3.jpeg";
import drapes4 from "../images/Drapes4.jpeg";
import drapes5 from "../images/Drapes5.jpeg";
import drapesValances from "../images/DrapesValances1.jpeg";

/* ==========================================
   PACKOUT & STORAGE CASE STUDY
========================================== */

import packoutAfter from "../images/POAfter1.jpeg";
import closetA2 from "../images/POClosetA2.jpeg";
import closetA3 from "../images/POClosetA3.jpeg";
import closetA4 from "../images/POClosetA4.jpeg";
import closetB1 from "../images/POClosetB1.jpeg";
import closetB2 from "../images/POClosetB2.jpeg";
import closetB3 from "../images/POClosetB3.jpeg";
import napaPackout1 from "../images/PONapa1.jpeg";
import napaPackout2 from "../images/PONapa2.jpeg";
import storage1 from "../images/Storage1.jpeg";
import storage2 from "../images/Storage2.jpeg";
import storage4 from "../images/storage4.jpeg";
import storage11 from "../images/storage11.jpeg";
import storageOS1 from "../images/StorageOS1.jpeg";
import storageOS2 from "../images/StorageOS2.jpeg";
import storageRug from "../images/storage-rug.jpeg";

/* ==========================================
   FILTERS
========================================== */

const filters = [
  { label: "Fire & Smoke", value: "fire" },
  { label: "Water & Mold", value: "water" },
  { label: "Contents Cleaning", value: "cleaning" },
  { label: "Drapery & Textiles", value: "drapery" },
  { label: "Packout & Storage", value: "packout" },
  { label: "All Work", value: "all" },
];

/* ==========================================
   STANDARD PROJECTS
========================================== */

const standardProjects = [
  {
    id: "furniture-cleaning",
    category: "cleaning",
    eyebrow: "Furniture Cleaning",
    title: "Furniture Cleaning & Restoration",
    description:
      "Detailed contents cleaning helped refresh this upholstered item and improve its overall appearance.",
    before: furnitureBefore,
    after: furnitureAfter,
  },
  {
    id: "chair-cleaning",
    category: "cleaning",
    eyebrow: "Upholstery Cleaning",
    title: "Upholstered Chair Cleaning",
    description:
      "Professional cleaning helped remove visible contamination and restore this upholstered chair to a cleaner condition.",
    before: chairAfter,
    after: chairBefore,
  },
  {
    id: "spot-treatment",
    category: "cleaning",
    eyebrow: "Spot Treatment",
    title: "Upholstery Spot Treatment",
    description:
      "Targeted professional cleaning helped remove a visible spot while preserving the surrounding fabric and texture.",
    before: headboardBefore,
    after: headboardAfter,
  },
];

/* ==========================================
   REUSABLE COMPONENTS
========================================== */

const FilterButtons = ({ activeFilter, onChange }) => (
  <div className="work-filter-buttons" aria-label="Filter projects">
    {filters.map((filter) => (
      <button
        key={filter.value}
        type="button"
        className={
          activeFilter === filter.value
            ? "work-filter-button active"
            : "work-filter-button"
        }
        onClick={() => onChange(filter.value)}
      >
        {filter.label}
      </button>
    ))}
  </div>
);

const SectionHeading = ({ title, description, result = false }) => (
  <div
    className={
      result
        ? "work-case-study-subheading result-heading"
        : "work-case-study-subheading"
    }
  >
    <span>{title}</span>
    {description && <p>{description}</p>}
  </div>
);

const CaseStudyImage = ({ src, alt, label, labelType = "document" }) => {
  const labelClass =
    labelType === "before"
      ? "work-image-label work-before-label"
      : labelType === "after"
        ? "work-image-label work-after-label"
        : "work-documentation-label";

  return (
    <figure className="work-case-study-image">
      <img src={src} alt={alt} />
      {label && <span className={labelClass}>{label}</span>}
    </figure>
  );
};

const GalleryItem = ({ src, alt, text }) => (
  <div className="gallery-item">
    <img src={src} alt={alt} />
    <p>{text}</p>
  </div>
);

const StandardProjectCard = ({ project }) => (
  <article className="work-project-card">
    <div className="work-project-images">
      <figure className="work-image-wrapper">
        <img
          src={project.before}
          alt={`Before ${project.title}`}
          className="work-project-image"
        />

        <span className="work-image-label work-before-label">Before</span>
      </figure>

      <div className="work-comparison-arrow" aria-hidden="true">
        →
      </div>

      <figure className="work-image-wrapper">
        <img
          src={project.after}
          alt={`After ${project.title}`}
          className="work-project-image"
        />

        <span className="work-image-label work-after-label">After</span>
      </figure>
    </div>

    <div className="work-project-content">
      <span className="work-project-eyebrow">{project.eyebrow}</span>

      <h3>{project.title}</h3>

      <p>{project.description}</p>
    </div>
  </article>
);

/* ==========================================
   CASE STUDIES
========================================== */
const FireCaseStudy = () => (
  <article className="work-case-study">
    <div className="work-case-study-heading">
      <span className="work-project-eyebrow">Fire & Smoke</span>

      <h2>Smoke Damage Garment Restoration</h2>

      <p>
        This varsity jacket showed visible smoke and soot contamination.
        Specialized textile cleaning helped improve the garment while preserving
        its materials, colors, and embroidered details.
      </p>
    </div>

    <SectionHeading
      title="Documented Condition"
      description="Smoke and soot contamination was documented before specialized cleaning began."
    />

    <div className="work-case-study-grid">
      <CaseStudyImage
        src={jacketBeforeFull}
        alt="Varsity jacket before smoke damage restoration"
        label="Before"
        labelType="before"
      />

      <CaseStudyImage
        src={jacketBeforeLeft}
        alt="Smoke contamination on jacket sleeve before cleaning"
        label="Before Detail"
        labelType="before"
      />

      <CaseStudyImage
        src={jacketBeforeRight}
        alt="Visible soot contamination before garment restoration"
        label="Before Detail"
        labelType="before"
      />
    </div>

    <SectionHeading
      title="After Specialized Cleaning"
      description="Specialized textile care improved the appearance while preserving the garment's original details."
      result
    />

    <div className="work-case-study-grid work-case-study-results">
      <CaseStudyImage
        src={jacketAfterLeft}
        alt="Jacket sleeve after specialized textile cleaning"
        label="After"
        labelType="after"
      />

      <CaseStudyImage
        src={jacketAfterRight}
        alt="Restored jacket sleeve after professional cleaning"
        label="After"
        labelType="after"
      />
    </div>
  </article>
);

const WaterMoldCaseStudy = () => (
  <article className="work-case-study">
    <div className="work-case-study-heading">
      <span className="work-project-eyebrow">Water & Mold</span>

      <h2>Water & Mold Contents Assessment</h2>

      <p>
        Water-related losses can affect contents in ways that are not always
        immediately visible. Careful inspection and documentation help identify
        contamination, affected materials, and potential restoration needs.
      </p>
    </div>

    <SectionHeading
      title="Mold-Damaged Shoe Restoration"
      description="This shoe showed visible mold contamination before cleaning. Professional treatment helped restore the material and significantly improve its appearance."
    />

    <div className="case-study-gallery">
      <GalleryItem
        src={moldShoe}
        alt="Before and after mold-damaged shoe restoration"
        text="Before and after professional mold cleaning and restoration."
      />

      <GalleryItem
        src={guitarCase1}
        alt="Specialty instrument case during water and mold assessment"
        text="Exterior condition documented before detailed inspection."
      />

      <GalleryItem
        src={guitarCase2}
        alt="Interior of specialty instrument case during inspection"
        text="Interior materials inspected for signs of moisture-related contamination."
      />
    </div>

    <SectionHeading
      title="Condition Details"
      description="Close inspection helps determine which contents may be candidates for professional cleaning or restoration."
    />

    <div className="case-study-gallery">
      <GalleryItem
        src={guitarCase3}
        alt="Detailed interior condition of specialty instrument case"
        text="Interior condition documented during the specialty contents assessment."
      />

      <GalleryItem
        src={guitarCase4}
        alt="Specialty instrument case during restoration process"
        text="Detailed inspection and professional care performed on specialty materials."
      />

      <GalleryItem
        src={guitarCase5}
        alt="Instrument case documented during project"
        text="Final project documentation provides a record of the item's condition and handling."
      />
    </div>
  </article>
);

const CleaningCaseStudy = () => (
  <article className="work-case-study">
    <div className="work-case-study-heading">
      <span className="work-project-eyebrow">Contents Cleaning</span>

      <h2>Upholstery Cleaning & Contamination Removal</h2>

      <p>
        This upholstered sectional required detailed cleaning after visible
        contamination affected the cushions and seating surfaces. The project
        included inspection, treatment, cleaning, and final presentation.
      </p>
    </div>

    <SectionHeading
      title="Initial Condition"
      description="Affected areas were photographed and documented before professional cleaning began."
    />

    <div className="work-case-study-grid">
      <CaseStudyImage
        src={couchBefore1}
        alt="Upholstered sectional before professional cleaning"
        label="Before"
        labelType="before"
      />

      <CaseStudyImage
        src={couchBefore2}
        alt="Visible upholstery contamination before cleaning"
        label="Before Detail"
        labelType="before"
      />

      <CaseStudyImage
        src={couchBefore3}
        alt="Sectional contamination before restoration"
        label="Overall View"
        labelType="before"
      />
    </div>

    <SectionHeading
      title="Professional Cleaning & Final Result"
      description="Furniture components were individually treated and cleaned before final inspection and reassembly."
      result
    />

    <div className="work-case-study-grid">
      <CaseStudyImage
        src={couchTreatment}
        alt="Upholstery during professional cleaning"
        label="During Cleaning"
      />

      <CaseStudyImage
        src={couchAfter1}
        alt="Clean upholstered cushion after professional treatment"
        label="After"
        labelType="after"
      />

      <CaseStudyImage
        src={couchAfter2}
        alt="Finished sectional after upholstery cleaning"
        label="Finished Result"
        labelType="after"
      />
    </div>
  </article>
);

const DraperyCaseStudy = () => (
  <article className="work-case-study">
    <div className="work-case-study-heading">
      <span className="work-project-eyebrow">Drapery & Textiles</span>

      <h2>Drapery Inspection, Documentation & Professional Care</h2>

      <p>
        Drapery projects often require more than cleaning. Detailed inspection
        can identify shrinkage, damaged lace, missing components, improper
        finishing, and installation concerns before corrective work is
        determined.
      </p>
    </div>

    <SectionHeading
      title="Documented Conditions"
      description="Examples of conditions identified during professional inspection and documentation."
    />

    <div className="work-documentation-grid">
      <CaseStudyImage
        src={draperyCondition1}
        alt="Documented drapery condition"
        label="Condition Review"
      />

      <CaseStudyImage
        src={draperyCondition2}
        alt="Documented drapery shrinkage"
        label="Shrinkage"
      />

      <CaseStudyImage
        src={draperyCondition3}
        alt="Drapery condition requiring attention"
        label="Installation Review"
      />

      <CaseStudyImage
        src={draperyCondition4}
        alt="Missing drapery components"
        label="Missing Components"
      />

      <CaseStudyImage
        src={draperyLaceDamage}
        alt="Lace damage documented during inspection"
        label="Lace Damage"
      />

      <CaseStudyImage
        src={draperyShade1}
        alt="Window shade condition"
        label="Shade Condition"
      />

      <CaseStudyImage
        src={draperyShade2}
        alt="Window treatment installation detail"
        label="Installation Detail"
      />

      <CaseStudyImage
        src={draperyConditionFinal}
        alt="Drapery condition during project review"
        label="Detailed Review"
      />
    </div>

    <SectionHeading
      title="Professional Drapery Results"
      description="Examples of cleaned, properly hung, and professionally presented window treatments."
      result
    />

    <div className="work-finished-drapery-grid">
      {[
        [
          drapes1,
          "Professionally installed drapery",
          "Professional Installation",
        ],
        [
          drapes2,
          "Professionally hung window treatments",
          "Detailed Installation",
        ],
        [drapes3, "Professionally installed sheer drapery", "Sheer Drapery"],
        [
          drapes4,
          "Finished patterned drapery installation",
          "Finished Presentation",
        ],
        [drapes5, "Finished doorway drapery installation", "Custom Drapery"],
        [
          drapesValances,
          "Professionally installed drapery and valances",
          "Valances & Drapery",
        ],
      ].map(([src, alt, label]) => (
        <figure className="work-finished-drapery-image" key={label}>
          <img src={src} alt={alt} />
          <span>{label}</span>
        </figure>
      ))}
    </div>
  </article>
);

const PackoutCaseStudy = () => {
  const steps = [
    {
      title: "1. Initial Home Documentation",
      description:
        "Rooms and contents are documented before removal so belongings can be carefully tracked throughout the packout process.",
      gridClass: "work-case-study-grid",
      images: [
        [
          closetB1,
          "Closet contents before professional packout",
          "Before Packout",
        ],
        [
          closetB2,
          "Closet contents documented before packing",
          "Contents Documented",
        ],
        [
          closetB3,
          "Additional closet contents before packout",
          "Room Inventory",
        ],
      ],
    },
    {
      title: "2. Organized Contents Removal",
      description:
        "Contents are systematically removed while maintaining organization and documenting the condition of each area.",
      gridClass: "work-case-study-grid",
      images: [
        [
          closetA2,
          "Closet during professional contents removal",
          "Packout In Progress",
        ],
        [
          closetA3,
          "Closet after contents have been removed",
          "Contents Removed",
        ],
        [
          closetA4,
          "Cleared closet following professional packout",
          "Area Cleared",
        ],
      ],
    },
    {
      title: "3. Professional Packing & Labeling",
      description:
        "Contents are packed, protected, and organized to support accurate tracking and efficient handling throughout the project.",
      gridClass: "work-case-study-grid",
      images: [
        [
          napaPackout1,
          "Professionally packed boxes during residential packout",
          "Professional Packing",
        ],
        [
          napaPackout2,
          "Organized boxes prepared during professional packout",
          "Organized & Labeled",
        ],
        [
          storage11,
          "Packed contents organized for storage",
          "Ready for Storage",
        ],
      ],
    },
    {
      title: "4. Organized Storage",
      description:
        "Packed contents and specialty items are protected and organized while awaiting the next phase of the restoration process.",
      gridClass: "work-documentation-grid",
      result: true,
      images: [
        [
          storage1,
          "Professionally packed contents in storage",
          "Stored Contents",
        ],
        [
          storage2,
          "Organized boxes stored during restoration",
          "Organized Storage",
        ],
        [storage4, "Labeled boxes organized for storage", "Labeled Inventory"],
        [
          storageOS1,
          "Stored contents organized by project",
          "Project Organization",
        ],
        [
          storageOS2,
          "Additional organized storage documentation",
          "Contents Storage",
        ],
        [
          storageRug,
          "Professionally wrapped rugs stored during restoration",
          "Protected Specialty Items",
        ],
      ],
    },
  ];

  return (
    <article className="work-case-study">
      <div className="work-case-study-heading">
        <span className="work-project-eyebrow">Packout & Storage</span>

        <h2>Professional Packout, Inventory & Secure Storage</h2>

        <p>
          A successful packout is more than placing belongings into boxes. Our
          process includes careful documentation, organized packing, labeling,
          protection, storage, and preparation for the eventual return of
          contents to the home.
        </p>
      </div>

      {steps.map((step) => (
        <React.Fragment key={step.title}>
          <SectionHeading
            title={step.title}
            description={step.description}
            result={step.result}
          />

          <div className={step.gridClass}>
            {step.images.map(([src, alt, label]) => (
              <CaseStudyImage key={label} src={src} alt={alt} label={label} />
            ))}
          </div>
        </React.Fragment>
      ))}

      <SectionHeading
        title="5. Prepared for Return"
        description="Once restoration work is complete, contents can be coordinated for return and placement back into the property."
        result
      />

      <div className="work-case-study-grid work-case-study-results">
        <CaseStudyImage
          src={packoutAfter}
          alt="Home area after professional contents return"
          label="Return Complete"
          labelType="after"
        />
      </div>
    </article>
  );
};

/* ==========================================
   MAIN COMPONENT
========================================== */

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? standardProjects
      : standardProjects.filter((project) => project.category === activeFilter);

  const showAll = activeFilter === "all";

  const showFire = showAll || activeFilter === "fire";

  const showWater = showAll || activeFilter === "water";

  const showCleaning = showAll || activeFilter === "cleaning";

  const showDrapery = showAll || activeFilter === "drapery";

  const showPackout = showAll || activeFilter === "packout";

  return (
    <>
      {/* ==========================================
          HERO + FILTERS
      ========================================== */}

      <section className="work-page-hero">
        <div className="container work-page-hero-content">
          <span className="work-page-eyebrow">Our Work</span>

          <h1>Professional Restoration. Visible Results.</h1>

          <p>
            Trusted by homeowners, insurance professionals, and restoration
            companies throughout Southern California for expert contents
            cleaning. textile care, water damage recover, and packout services.
          </p>

          <FilterButtons
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>
      </section>

      {/* ==========================================
          PROJECT PORTFOLIO
      ========================================== */}

      <section className="work-page-section">
        <div className="container">
          {showFire && <FireCaseStudy />}

          {showWater && <WaterMoldCaseStudy />}

          {showCleaning && <CleaningCaseStudy />}

          {showDrapery && <DraperyCaseStudy />}

          {showPackout && <PackoutCaseStudy />}

          {visibleProjects.length > 0 && (
            <div className="work-project-grid">
              {visibleProjects.map((project) => (
                <StandardProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
          CALL TO ACTION
      ========================================== */}

      <section className="work-page-cta">
        <div className="container work-page-cta-content">
          <div>
            <span className="work-page-eyebrow">Need Assistance?</span>

            <h2>Let Our Team Help With Your Recovery.</h2>
          </div>

          <div className="work-page-cta-actions">
            <a href="/request-assistance" className="work-primary-button">
              Request Assistance
            </a>

            <a href="tel:+16197867089" className="work-secondary-button">
              Call 619-786-7089
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
