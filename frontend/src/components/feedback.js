import React from "react";

const FeedbackForm = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Leave Your Feedback</h2>
      <iframe
        title="Feedback Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSf3mOyRg4Ul7Khbg36BBR9hlBvbuSnu6jAAPaW49Ue9tLE8oQ/viewform?embedded=true"
        width="640"
        height="939"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FeedbackForm;
