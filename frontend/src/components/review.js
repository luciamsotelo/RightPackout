import React, { useEffect, useMemo, useState } from "react";
import "../styles/ReviewPage.css";

const REVIEWS_PER_PAGE = 6;

const Review = () => {
  const [feedback, setFeedback] = useState([]);
  const [status, setStatus] = useState("loading");
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        if (!apiUrl) {
          throw new Error("The API URL is not configured.");
        }

        const response = await fetch(`${apiUrl}/api/reviews`);

        if (!response.ok) {
          throw new Error("Unable to load customer reviews.");
        }

        const data = await response.json();

        const sortedFeedback = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

        setFeedback(sortedFeedback);
        setStatus("success");
      } catch (error) {
        console.error("Error fetching feedback:", error);
        setStatus("error");
      }
    };

    fetchFeedback();
  }, []);

  const averageRating = useMemo(() => {
    if (feedback.length === 0) {
      return 0;
    }

    const total = feedback.reduce(
      (sum, review) => sum + (Number(review.rating) || 0),
      0,
    );

    return total / feedback.length;
  }, [feedback]);

  const visibleReviews = feedback.slice(0, visibleCount);
  const hasMoreReviews = visibleCount < feedback.length;

  const renderStars = (rating) => {
    const safeRating = Math.max(
      1,
      Math.min(5, Math.round(Number(rating) || 1)),
    );

    return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
  };

  const handleLoadMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + REVIEWS_PER_PAGE, feedback.length),
    );
  };

  return (
    <>
      <section className="review-page-hero">
        <div className="container review-page-hero-content">
          <span className="review-page-eyebrow">
            Customer Experiences
          </span>

          <h1>Reviews From the People We Serve</h1>

          <p>
            Read what customers have shared about their experience with The
            Right Pack Out and our approach to careful, dependable service.
          </p>

          <div className="review-page-hero-actions">
            <a href="/feedback" className="review-page-primary-button">
              Leave Your Feedback
            </a>

            <a
              href="tel:+16197867089"
              className="review-page-secondary-button"
            >
              Call 619-786-7089
            </a>
          </div>
        </div>
      </section>

      <section className="review-page-content">
        <div className="container">
          {status === "loading" ? (
            <div className="review-page-status">
              Loading customer reviews...
            </div>
          ) : status === "error" ? (
            <div className="review-page-status">
              Reviews are temporarily unavailable. Please check again soon.
            </div>
          ) : feedback.length === 0 ? (
            <div className="review-page-empty">
              <h2>Be the First to Share Your Experience</h2>

              <p>
                Customer reviews will appear here as they are received.
              </p>

              <a href="/feedback" className="review-page-primary-button">
                Leave a Review
              </a>
            </div>
          ) : (
            <>
              <div className="review-summary">
                <div className="review-summary-score">
                  <strong>{averageRating.toFixed(1)}</strong>
                  <span>Average Rating</span>
                </div>

                <div
                  className="review-summary-stars"
                  aria-label={`${averageRating.toFixed(1)} out of 5 stars`}
                >
                  {renderStars(averageRating)}
                </div>

                <div className="review-summary-count">
                  <strong>{feedback.length}</strong>

                  <span>
                    {feedback.length === 1
                      ? "Customer Review"
                      : "Customer Reviews"}
                  </span>
                </div>
              </div>

              <div className="review-page-grid">
                {visibleReviews.map((item, index) => (
                  <article
                    className="review-page-card"
                    key={item.id || `${item.name}-${index}`}
                  >
                    <span
                      className="review-page-quote-mark"
                      aria-hidden="true"
                    >
                      “
                    </span>

                    <div
                      className="review-page-stars"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {renderStars(item.rating)}
                    </div>

                    <blockquote>“{item.message}”</blockquote>

                    <div className="review-page-customer">
                      <strong>{item.name}</strong>

                      <span className="review-page-verified">
                        Verified Customer
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              {hasMoreReviews && (
                <div className="review-load-more-wrapper">
                  <button
                    type="button"
                    className="review-load-more-button"
                    onClick={handleLoadMore}
                  >
                    Load More Reviews
                  </button>

                  <span className="review-load-more-count">
                    Showing {visibleReviews.length} of {feedback.length}
                  </span>
                </div>
              )}

              <section className="review-page-cta">
                <div>
                  <span className="review-page-eyebrow">
                    Share Your Experience
                  </span>

                  <h2>Have You Worked With The Right Pack Out?</h2>

                  <p>
                    Your feedback helps future customers feel confident when
                    choosing a team to care for their belongings.
                  </p>
                </div>

                <a
                  href="/feedback"
                  className="review-page-primary-button"
                >
                  Leave Your Feedback
                </a>
              </section>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Review;