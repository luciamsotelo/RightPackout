import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Packout from "../components/packout";
import Footer from "../components/footer";

const PackoutPackbackPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Pack Out & Pack Back Services in San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional pack out and pack back services throughout San Diego County. The Right Pack Out carefully inventories, packs, transports, stores, and returns household contents during restoration and recovery projects."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/pack" />

        <meta
          property="og:title"
          content="Pack Out & Pack Back Services in San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Professional pack out and pack back services throughout San Diego County, including careful inventory, packing, transport, storage, and return of household contents."
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
          content="Pack Out & Pack Back Services in San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Careful pack out, inventory, transport, storage, and pack back services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Packout />
      </main>

      <Footer />
    </div>
  );
};

export default PackoutPackbackPage;