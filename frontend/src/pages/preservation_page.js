import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Preservations from "../components/preservations";
import Footer from "../components/footer";

const PreservationsPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contents Preservation San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional contents preservation services throughout San Diego County. The Right Pack Out helps protect, document, handle, and preserve belongings during restoration and property recovery projects."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/preservation" />

        <meta
          property="og:title"
          content="Contents Preservation San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional contents preservation and careful handling of belongings during restoration and property recovery projects throughout San Diego County."
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
          content="Contents Preservation San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional contents preservation services for restoration and property recovery projects throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Preservations />
      </main>

      <Footer />
    </div>
  );
};

export default PreservationsPage;