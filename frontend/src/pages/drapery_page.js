import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Footer from "../components/footer";
import Drapery from "../components/drapery";

const DraperyPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Drapery Cleaning San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional drapery and curtain cleaning services throughout San Diego County. The Right Pack Out provides careful cleaning and handling to help restore drapes, curtains, and window treatments."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/drapery" />

        <meta
          property="og:title"
          content="Drapery Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional cleaning and careful handling of drapes, curtains, and window treatments throughout San Diego County."
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
          content="Drapery Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional drapery, curtain, and window treatment cleaning services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Drapery />
      </main>

      <Footer />
    </div>
  );
};

export default DraperyPage;