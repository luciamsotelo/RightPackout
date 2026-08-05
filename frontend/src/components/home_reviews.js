import React, { useEffect, useState } from "react";
import "../App.css";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        if (!apiUrl) {
          throw new Error("The API URL is not configured.");
        }

        const response = await fetch(`${apiUrl}/api/reviews?limit=3`);

        if (!response.ok) {
          throw new Error("Unable to load reviews.");
        }

        const data = await response.json();

        const sortedReviews = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setReviews(sortedReviews.slice(0, 3));
        setStatus("success");
      } catch (error) {
        console.error("Error loading homepage reviews:", error);
        setStatus("error");
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    const safeRating = Math.max(
      1,
      Math.min(5, Number(rating) || 1)
    );

    return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
  };

  if (status === "error") {
    return null;
  }

  return (
    <section
      className="home-reviews-section"
      aria-labelledby="home-reviews-title"
    >
      <div className="container">
        <div className="home-reviews-heading">
          <span className="home-reviews-eyebrow">
            Customer Experiences
          </span>

          <h2 id="home-reviews-title">
            Trusted by the People We Serve
          </h2>

          <p>
            We are committed to providing careful, dependable service during
            every step of the packout and restoration process.
          </p>
        </div>

        {status === "loading" ? (
          <div className="reviews-loading">
            Loading customer reviews...
          </div>
        ) : reviews.length === 0 ? (
          <div className="reviews-empty">
            <p>
              Customer reviews will be displayed here as they are received.
            </p>

            <a href="/feedback" className="review-outline-button">
              Leave the First Review
            </a>
          </div>
        ) : (
          <>
            <div className="home-review-grid">
              {reviews.map((review) => (
                <article
                  className="home-review-card"
                  key={review.id}
                >
                  <span
                    className="review-quote-mark"
                    aria-hidden="true"
                  >
                    “
                  </span>

                  <div
                    className="home-review-stars"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {renderStars(review.rating)}
                  </div>

                  <blockquote>
                    “{review.message}”
                  </blockquote>

                  <div className="home-review-customer">
                    <div className="review-customer-details">
                      <strong>{review.name}</strong>
                      <span className="verified-review">
  Verified Customer
</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="home-reviews-actions">
              <a href="/review" className="review-primary-button">
                Read All Reviews
              </a>

              <a href="/feedback" className="review-outline-button">
                Leave Your Feedback
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HomeReviews;