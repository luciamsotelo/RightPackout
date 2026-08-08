import React from "react";

import Header from "../components/header";
import Construction from "../components/construction_cleaning";
import Footer from "../components/footer";

const ConstructionPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Construction />
      </main>

      <Footer />
    </div>
  );
};

export default ConstructionPage;