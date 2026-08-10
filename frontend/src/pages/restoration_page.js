import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Restoration from "../components/restoration";
import Footer from "../components/footer";

const RestorationPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contents Restoration San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional contents restoration services throughout San Diego County. The Right Pack Out carefully cleans, restores, protects, and manages belongings affected by property damage."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/restoration" />

        <meta
          property="og:title"
          content="Contents Restoration San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional cleaning, restoration, and careful handling of household contents affected by property damage throughout San Diego County."
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
          content="Contents Restoration San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional contents restoration and recovery services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Restoration />
      </main>

      <Footer />
    </div>
  );
};

export default RestorationPage;