import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import HoarderCleaning from "../components/hoarder_cleaning";
import Footer from "../components/footer";

const HoarderPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Hoarding Cleanup Services San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional hoarding cleanup services throughout San Diego County. The Right Pack Out provides discreet, respectful support with sorting, contents handling, clutter removal, cleaning, and space preparation."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/hoarder" />

        <meta
          property="og:title"
          content="Hoarding Cleanup Services San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Respectful and discreet hoarding cleanup, sorting, contents handling, clutter removal, and cleaning services throughout San Diego County."
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
          content="Hoarding Cleanup Services San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional, respectful, and discreet hoarding cleanup services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <HoarderCleaning />
      </main>

      <Footer />
    </div>
  );
};

export default HoarderPage;