import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Storage from "../components/storage";
import Footer from "../components/footer";

const StoragePage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Secure Contents Storage in San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Secure contents storage services throughout San Diego County. The Right Pack Out carefully stores household belongings during restoration, repairs, renovations, and property recovery projects."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/storage" />

        <meta
          property="og:title"
          content="Secure Contents Storage in San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional contents storage for household belongings during restoration, repairs, renovations, and recovery projects throughout San Diego County."
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
          content="Secure Contents Storage in San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Secure storage for household contents during restoration and property recovery projects throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Storage />
      </main>

      <Footer />
    </div>
  );
};

export default StoragePage;