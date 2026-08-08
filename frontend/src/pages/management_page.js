import React from "react";

import Header from "../components/header";
import Management from "../components/management";
import Footer from "../components/footer";

const ManagementPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Management />
      </main>

      <Footer />
    </div>
  );
};

export default ManagementPage;