import React from "react";
import "../styles/FloatingQuoteButton.css";

function FloatingQuoteButton() {
  const quoteEmail =
    "mailto:therightpackout@gmail.com?subject=Quote%20Request";

  return (
    <div className="floating-quote-wrapper">
      <a
        href="tel:+16197867089"
        className="floating-call-button"
        aria-label="Call The Right Pack Out"
      >
        <span aria-hidden="true">☎</span>
        Call Now
      </a>

      <a
        href={quoteEmail}
        className="floating-quote-button"
        aria-label="Request a quote from The Right Pack Out"
      >
        Request a Quote
      </a>
    </div>
  );
}

export default FloatingQuoteButton;