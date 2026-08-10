import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Footer from "../components/footer";
import RequestAssistance from "../components/request_assistance";

const RequestAssistancePage = () => {
  return (
    <div>
      <Helmet>
        <title>Request Assistance | The Right Pack Out San Diego County</title>

        <meta
          name="description"
          content="Contact The Right Pack Out for professional packout, contents cleaning, storage, restoration, documentation, and recovery assistance throughout San Diego County."
        />

        <meta name="robots" 
        content="index, follow" 
        />

        <link rel="canonical" href="https://therightpackout.com/request-assistance" />

        <meta
          property="og:title"
          content="Request Assistance | The Right Pack Out San Diego County"
        />

        <meta
          property="og:description"
          content="Need help protecting or recovering your belongings? Contact The Right Pack Out for professional contents care and restoration support throughout San Diego County."
        />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Request Assistance | The Right Pack Out San Diego County"
        />

        <meta
          name="twitter:description"
          content="Contact The Right Pack Out for professional contents care, packout, cleaning, storage, and restoration support throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <RequestAssistance />
      </main>

      <Footer />
    </div>
  );
};

export default RequestAssistancePage;
