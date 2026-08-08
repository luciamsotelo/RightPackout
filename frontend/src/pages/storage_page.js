import React from "react";

import Header from "../components/header";
import Storage from "../components/storage";
import Footer from "../components/footer";

const StoragePage = () => {
  return (
    <div>
      <Header />

      <main>
        <Storage />
      </main>

      <Footer />
    </div>
  );
};

export default StoragePage;