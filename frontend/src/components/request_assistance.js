import React, { useState } from "react";
import "../styles/RequestAssistancePage.css";

const RequestAssistance = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    emergency: "",
    insuranceCompany: "",
    claimNumber: "",
    preferredContact: "",
    details: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (status === "success") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await fetch(`${apiUrl}/api/assistance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: formData.service,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phone,
          email: formData.email,
          message: `
Property Address:
${formData.address || "Not provided"}

Emergency:
${formData.emergency || "Not provided"}

Insurance Company:
${formData.insuranceCompany || "Not provided"}

Claim Number:
${formData.claimNumber || "Not provided"}

Preferred Contact Method:
${formData.preferredContact || "Not provided"}

Details:
${formData.details}
        `.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit assistance request");
      }

      setStatus("success");
    } catch (error) {
      console.error("Assistance request error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* ==========================================
          HERO
      ========================================== */}

      <section className="request-page-hero">
        <div className="container request-page-hero-content">
          <span className="request-page-eyebrow">Request Assistance</span>

          <h1>We're Ready to Help.</h1>

          <p>
            Tell us a little about your situation and our team will help
            determine the next steps for protecting, documenting, cleaning,
            storing, and restoring your contents.
          </p>

          <div className="request-page-emergency-line">
            <span>Need immediate assistance?</span>

            <a href="tel:+16197867089">Call 619-786-7089</a>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN SECTION
      ========================================== */}

      <section className="request-page-section">
        <div className="container request-page-layout">
          {/* LEFT SIDE */}

          <aside className="request-page-intro">
            <span className="request-page-eyebrow">
              Professional Contents Care
            </span>

            <h2>Start With a Few Details.</h2>

            <p>
              Whether you need packout, cleaning, storage, restoration,
              preservation, or insurance documentation support, we'll use this
              information to better understand your needs.
            </p>

            <div className="request-benefits">
              <div className="request-benefit">
                <span aria-hidden="true">✓</span>

                <div>
                  <strong>24/7 Emergency Response</strong>

                  <p>Immediate assistance when timing matters most.</p>
                </div>
              </div>

              <div className="request-benefit">
                <span aria-hidden="true">✓</span>

                <div>
                  <strong>Detailed Documentation</strong>

                  <p>
                    Organized inventory and reporting to support your project
                    and insurance process.
                  </p>
                </div>
              </div>

              <div className="request-benefit">
                <span aria-hidden="true">✓</span>

                <div>
                  <strong>Professional Contents Care</strong>

                  <p>
                    Careful handling, cleaning, storage, preservation, and
                    restoration.
                  </p>
                </div>
              </div>
            </div>

            <div className="request-emergency-card">
              <span>Immediate Assistance</span>

              <strong>
                Don't wait for the form if you need help right away.
              </strong>

              <a href="tel:+16197867089">Call 619-786-7089</a>

              <small>Available 24 hours a day, 7 days a week.</small>
            </div>
          </aside>

          {/* FORM */}

          <div className="request-form-card">
            <div className="request-form-heading">
              <h2>Tell Us How We Can Help</h2>

              <p>Fields marked with an asterisk are required.</p>

              <span>Most requests take only a few minutes to complete.</span>
            </div>

            {status === "success" && (
              <div className="request-message-success" role="status">
                Thank you! Your request has been received. A member of The Right
                Pack Out team will contact you soon.
              </div>
            )}

            {status === "error" && (
              <div className="request-message-error" role="alert">
                We were unable to submit your request. Please try again or call
                619-786-7089 for immediate assistance.
              </div>
            )}

            <form className="request-form" onSubmit={handleSubmit}>
              {/* NAME */}

              <div className="request-form-row">
                <div className="request-field">
                  <label htmlFor="request-first-name">First Name *</label>

                  <input
                    id="request-first-name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="request-field">
                  <label htmlFor="request-last-name">Last Name *</label>

                  <input
                    id="request-last-name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              {/* PHONE + EMAIL */}

              <div className="request-form-row">
                <div className="request-field">
                  <label htmlFor="request-phone">Phone *</label>

                  <input
                    id="request-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="request-field">
                  <label htmlFor="request-email">Email *</label>

                  <input
                    id="request-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* ADDRESS */}

              <div className="request-field">
                <label htmlFor="request-address">Property Address</label>

                <input
                  id="request-address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  placeholder="Optional"
                />
              </div>

              {/* SERVICE + EMERGENCY */}

              <div className="request-form-row">
                <div className="request-field">
                  <label htmlFor="request-service">Service Needed *</label>

                  <select
                    id="request-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>

                    <option value="Pack Out & Pack Back">
                      Pack Out & Pack Back
                    </option>

                    <option value="Contents Cleaning">Contents Cleaning</option>

                    <option value="Secure Storage">Secure Storage</option>

                    <option value="Fire & Smoke Restoration">
                      Fire & Smoke Restoration
                    </option>

                    <option value="Mold Restoration">Mold Restoration</option>

                    <option value="Drapery & Textile Cleaning">
                      Drapery & Textile Cleaning
                    </option>

                    <option value="Preservation Services">
                      Preservation Services
                    </option>

                    <option value="Inventory & Insurance Reporting">
                      Inventory & Insurance Reporting
                    </option>

                    <option value="Moving Services">Moving Services</option>

                    <option value="Construction Cleanup">
                      Construction Cleanup
                    </option>

                    <option value="Hoarder House Cleaning">
                      Hoarder House Cleaning
                    </option>

                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="request-field">
                  <label htmlFor="request-emergency">
                    Is This an Emergency? *
                  </label>

                  <select
                    id="request-emergency"
                    name="emergency"
                    value={formData.emergency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>

                    <option value="Yes">Yes</option>

                    <option value="No">No</option>

                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>

              {/* INSURANCE */}

              <div className="request-form-row">
                <div className="request-field">
                  <label htmlFor="request-insurance-company">
                    Insurance Company
                  </label>

                  <input
                    id="request-insurance-company"
                    type="text"
                    name="insuranceCompany"
                    value={formData.insuranceCompany}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </div>

                <div className="request-field">
                  <label htmlFor="request-claim-number">Claim Number</label>

                  <input
                    id="request-claim-number"
                    type="text"
                    name="claimNumber"
                    value={formData.claimNumber}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </div>
              </div>

              {/* CONTACT METHOD */}

              <div className="request-field">
                <label htmlFor="request-contact">
                  Preferred Contact Method *
                </label>

                <select
                  id="request-contact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a contact method</option>

                  <option value="Phone">Phone Call</option>

                  <option value="Text">Text Message</option>

                  <option value="Email">Email</option>
                </select>
              </div>

              {/* DETAILS */}

              <div className="request-field">
                <label htmlFor="request-details">Tell Us What Happened *</label>

                <textarea
                  id="request-details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Briefly describe the situation, damage, or services you may need."
                  required
                />
              </div>

              <button
                type="submit"
                className="request-submit-button"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "Preparing Request..."
                  : "Submit Request"}
              </button>

              <p className="request-privacy-note">
                Your information will only be used to respond to your request
                for assistance.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestAssistance;
