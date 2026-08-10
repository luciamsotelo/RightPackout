import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Footer from "../components/footer";
import OurWork from "../components/our_work";

const OurWorkPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Restoration Before & After Projects | The Right Pack Out
        </title>

        <meta
          name="description"
          content="View real before-and-after restoration projects from The Right Pack Out, including contents cleaning, fire and smoke recovery, water and mold care, drapery restoration, packout, and storage work throughout San Diego County."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/our-work" />

        <meta
          property="og:title"
          content="Restoration Before & After Projects | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Explore real restoration and contents-care projects from The Right Pack Out, including before-and-after cleaning, fire and smoke recovery, water and mold care, drapery restoration, packout, and storage."
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
          content="Restoration Before & After Projects | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="See real before-and-after restoration projects completed by The Right Pack Out throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <OurWork />
      </main>

      <Footer />
    </div>
  );
};

export default OurWorkPage;