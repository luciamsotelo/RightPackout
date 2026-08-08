import React from "react";

import Header from "../components/header";
import Restoration from "../components/restoration";
import Footer from "../components/footer";

const RestorationPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Restoration />
      </main>

      <Footer />
    </div>
  );
};

export default RestorationPage;