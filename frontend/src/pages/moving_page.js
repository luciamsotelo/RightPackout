import React from "react";

import Header from "../components/header";
import Moving from "../components/moving";
import Footer from "../components/footer";

const MovingPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Moving />
      </main>

      <Footer />
    </div>
  );
};

export default MovingPage;