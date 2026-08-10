import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Footer from "../components/footer";
import Review from "../components/review";

const ReviewPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Customer Reviews | The Right Pack Out San Diego County
        </title>

        <meta
          name="description"
          content="Read customer reviews for The Right Pack Out and learn about the care, communication, and professionalism our team brings to contents restoration and recovery projects throughout San Diego County."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/review" />

        <meta
          property="og:title"
          content="Customer Reviews | The Right Pack Out San Diego County"
        />

        <meta
          property="og:description"
          content="See what customers say about The Right Pack Out and our professional approach to contents care, restoration support, and recovery services throughout San Diego County."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Customer Reviews | The Right Pack Out San Diego County"
        />

        <meta
          name="twitter:description"
          content="Read customer reviews and learn why clients trust The Right Pack Out for professional contents care throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Review />
      </main>

      <Footer />
    </div>
  );
};

export default ReviewPage;