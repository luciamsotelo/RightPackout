import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Moving from "../components/moving";
import Footer from "../components/footer";

const MovingPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contents Moving & Relocation San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional contents moving and relocation services throughout San Diego County. The Right Pack Out carefully packs, handles, transports, and relocates household belongings with organized, professional care."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/moving" />

        <meta
          property="og:title"
          content="Contents Moving & Relocation San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Careful packing, handling, transportation, and relocation of household contents throughout San Diego County."
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
          content="Contents Moving & Relocation San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional contents moving and relocation services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Moving />
      </main>

      <Footer />
    </div>
  );
};

export default MovingPage;