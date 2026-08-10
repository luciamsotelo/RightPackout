import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Consultation from "../components/consultation";
import Footer from "../components/footer";

const ConsultationPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Insurance Contents Reporting San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional contents documentation and insurance reporting support throughout San Diego County. The Right Pack Out provides organized inventory and detailed documentation for property recovery projects."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/consultation" />

        <meta
          property="og:title"
          content="Insurance Contents Reporting San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Organized contents inventory, documentation, and insurance reporting support for property recovery projects throughout San Diego County."
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
          content="Insurance Contents Reporting San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional contents documentation and insurance reporting support throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Consultation />
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;