import React from "react";

import Header from "../components/header";
import Window from "../components/window";
import Footer from "../components/footer";

const WindowPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Window />
      </main>

      <Footer />
    </div>
  );
};

export default WindowPage;