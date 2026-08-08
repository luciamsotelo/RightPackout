import React from "react";

import Header from "../components/header";
import HoarderCleaning from "../components/hoarder_cleaning";
import Footer from "../components/footer";

const HoarderPage = () => {
  return (
    <div>
      <Header />

      <main>
        <HoarderCleaning />
      </main>

      <Footer />
    </div>
  );
};

export default HoarderPage;