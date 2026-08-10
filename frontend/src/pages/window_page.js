import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Window from "../components/window";
import Footer from "../components/footer";

const WindowPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Professional Window Cleaning San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional window cleaning services throughout San Diego County. The Right Pack Out provides detailed interior and exterior window cleaning for homes, businesses, and properties requiring careful attention."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/window" />

        <meta
          property="og:title"
          content="Professional Window Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Detailed interior and exterior window cleaning services for homes and businesses throughout San Diego County."
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
          content="Professional Window Cleaning San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional residential and commercial window cleaning services throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Window />
      </main>

      <Footer />
    </div>
  );
};

export default WindowPage;