import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Footer from "../components/footer";
import Feedback from "../components/feedback";

const FeedbackPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Leave Feedback | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Share your experience with The Right Pack Out. We appreciate your feedback and the opportunity to continually provide professional, dependable service."
        />

        <meta
          name="robots"
          content="noindex, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/feedback" />

        <meta
          property="og:title"
          content="Leave Feedback | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Share your experience with The Right Pack Out. Your feedback helps us continue providing professional and dependable service."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Header />

      <main>
        <Feedback />
      </main>

      <Footer />
    </div>
  );
};

export default FeedbackPage;