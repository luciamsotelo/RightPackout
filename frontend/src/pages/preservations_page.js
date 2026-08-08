import React from "react";

import Header from "../components/header";
import Preservations from "../components/preservations";
import Footer from "../components/footer";

const PreservationsPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Preservations />
      </main>

      <Footer />
    </div>
  );
};

export default PreservationsPage;