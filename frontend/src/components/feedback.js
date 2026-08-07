import React, { useState } from "react";
import "../styles/FeedbackPage.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rating: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

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
    setError("");

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      if (!apiUrl) {
        throw new Error("The API URL is not configured.");
      }

      const response = await fetch(`${apiUrl}/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rating: Number(formData.rating),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your review.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        rating: "",
        message: "",
      });
    } catch (submitError) {
      console.error("Error submitting review:", submitError);

      setError(
        submitError.message ||
          "We could not connect to the server. Please try again.",
      );

      setStatus("error");
    }
  };

  return (
    <>
      <section className="feedback-page-hero">
        <div className="container feedback-page-hero-content">
          <span className="feedback-page-eyebrow">
            Share Your Experience
          </span>

          <h1>Tell Us How We Did</h1>

          <p>
            Your feedback helps us continue improving our service and gives
            future customers confidence when choosing a team to care for their
            belongings.
          </p>

          <div className="feedback-rating-summary">
            <span className="feedback-rating-stars" aria-hidden="true">
              ★★★★★
            </span>

            <span className="feedback-rating-text">
              Customer experiences matter to us
            </span>
          </div>
        </div>
      </section>

      <section className="feedback-page-section">
        <div className="container feedback-page-layout">
          <aside className="feedback-page-intro">
            <span className="feedback-page-eyebrow">
              Customer Feedback
            </span>

            <h2>Your Experience Matters</h2>

            <p>
              We appreciate the opportunity to serve you. Please share a few
              details about your experience with The Right Pack Out.
            </p>

            <div className="feedback-page-benefits">
              <div className="feedback-page-benefit">
                <span aria-hidden="true">✓</span>

                <div>
                  <strong>Simple and Secure</strong>

                  <p>
                    Your contact information is not displayed publicly.
                  </p>
                </div>
              </div>

              <div className="feedback-page-benefit">
                <span aria-hidden="true">✓</span>

                <div>
                  <strong>Helpful to Future Customers</strong>

                  <p>
                    Your review can help others feel confident during a
                    difficult time.
                  </p>
                </div>
              </div>

              <div className="feedback-page-benefit">
                <span aria-hidden="true">✓</span>

                <div>
                  <strong>Directly Supports Our Team</strong>

                  <p>
                    We use customer feedback to recognize strengths and improve
                    our service.
                  </p>
                </div>
              </div>
            </div>

            <div className="feedback-contact-card">
              <span>Questions?</span>

              <strong>We're here to help.</strong>

              <a href="tel:+16197867089">
                Call 619-786-7089
              </a>
            </div>
          </aside>

          <div className="feedback-form-card">
            <div className="feedback-form-heading">
              <h2>Leave Your Feedback</h2>

              <p>Fields marked with an asterisk are required.</p>

              <span className="feedback-form-time">
                Most reviews take less than one minute to complete.
              </span>
            </div>

            {status === "success" && (
              <div
                className="feedback-message feedback-message-success"
                role="status"
              >
                Thank you. Your review has been submitted successfully.
              </div>
            )}

            {status === "error" && (
              <div
                className="feedback-message feedback-message-error"
                role="alert"
              >
                {error}
              </div>
            )}

            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="feedback-form-row">
                <div className="feedback-field">
                  <label htmlFor="feedback-name">Name *</label>

                  <input
                    id="feedback-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="feedback-field">
                  <label htmlFor="feedback-email">Email *</label>

                  <input
                    id="feedback-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="feedback-form-row">
                <div className="feedback-field">
                  <label htmlFor="feedback-phone">
                    Phone
                  </label>

                  <input
                    id="feedback-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Optional"
                  />
                </div>

                <div className="feedback-field">
                  <label htmlFor="feedback-rating">
                    Rating *
                  </label>

                  <select
                    id="feedback-rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a rating
                    </option>

                    <option value="5">
                      5 — Excellent
                    </option>

                    <option value="4">
                      4 — Very Good
                    </option>

                    <option value="3">
                      3 — Good
                    </option>

                    <option value="2">
                      2 — Fair
                    </option>

                    <option value="1">
                      1 — Poor
                    </option>
                  </select>
                </div>
              </div>

              <div className="feedback-field">
                <label htmlFor="feedback-message">
                  Your Review *
                </label>

                <textarea
                  id="feedback-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your experience."
                  required
                />
              </div>

              <button
                type="submit"
                className="feedback-submit-button"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "Submitting..."
                  : "Submit Your Feedback"}
              </button>

              <p className="feedback-privacy-note">
                Your email address and phone number will not appear with your
                public review.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackForm;