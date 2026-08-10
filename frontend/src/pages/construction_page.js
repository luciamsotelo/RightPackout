import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Construction from "../components/construction_cleaning";
import Footer from "../components/footer";

const ConstructionPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Post-Construction Cleaning San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional post-construction cleaning throughout San Diego County. The Right Pack Out removes construction dust, debris, residue, and finishing mess to help prepare homes and businesses for occupancy."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/construction" />

        <meta
          property="og:title"
          content="Post-Construction Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Detailed post-construction cleaning for homes, businesses, renovations, and restoration projects throughout San Diego County."
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
          content="Post-Construction Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional post-construction cleaning services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Construction />
      </main>

      <Footer />
    </div>
  );
};

export default ConstructionPage;