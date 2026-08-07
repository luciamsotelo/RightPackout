import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Review from "../components/review";

const ReviewPage = () => {
  return (
    <div className="site-page">
      <Header />

      <main>
        <Review />
      </main>

      <Footer />
    </div>
  );
};

export default ReviewPage;