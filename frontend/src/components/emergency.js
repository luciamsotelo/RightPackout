import React from "react";
import "../styles/Emergency.css";

const Emergency = () => {
  return (
    <section className="emergency-banner" aria-label="Emergency services">
      <div className="emergency-banner-content">
        <div className="emergency-badge" aria-hidden="true">
          24/7
        </div>

        <div className="emergency-copy">
          <h2>Emergency Packout & Restoration Services</h2>
          <p>
            Disasters do not wait—and neither do we. Call anytime for immediate
            assistance.
          </p>
        </div>

        <a href="tel:+16197867089" className="emergency-call-button">
          Call 619-786-7089
        </a>
      </div>
    </section>
  );
};

export default Emergency;