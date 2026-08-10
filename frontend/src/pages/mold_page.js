import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Mold from "../components/mold";
import Footer from "../components/footer";

const MoldPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Water & Mold Contents Cleaning San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional cleaning and handling of contents affected by water and mold throughout San Diego County. The Right Pack Out helps inventory, clean, protect, and manage belongings during property recovery."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/mold" />

        <meta
          property="og:title"
          content="Water & Mold Contents Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional contents cleaning, inventory, and careful handling for belongings affected by water and mold throughout San Diego County."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Water & Mold Contents Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional cleaning and careful handling of water- and mold-affected contents throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Mold />
      </main>

      <Footer />
    </div>
  );
};

export default MoldPage;