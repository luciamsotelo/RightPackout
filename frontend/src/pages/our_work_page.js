import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import OurWork from "../components/our_work";

const OurWorkPage = () => {
  return (
    <div>
      <Header />

      <main>
        <OurWork />
      </main>

      <Footer />
    </div>
  );
};

export default OurWorkPage;