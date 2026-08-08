import React from "react";

import Header from "../components/header";
import Consultation from "../components/consultation";
import Footer from "../components/footer";

const ConsultationPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Consultation />
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;