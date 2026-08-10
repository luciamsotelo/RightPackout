import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Fire from "../components/fire";
import Footer from "../components/footer";

const FirePage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Fire & Smoke Contents Cleaning San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional fire and smoke contents cleaning throughout San Diego County. The Right Pack Out carefully inventories, packs, cleans, stores, and manages belongings affected by fire and smoke damage."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/fire" />

        <meta
          property="og:title"
          content="Fire & Smoke Contents Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional inventory, packout, cleaning, storage, and careful handling of belongings affected by fire and smoke damage throughout San Diego County."
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
          content="Fire & Smoke Contents Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional fire and smoke contents cleaning and recovery services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Fire />
      </main>

      <Footer />
    </div>
  );
};

export default FirePage;