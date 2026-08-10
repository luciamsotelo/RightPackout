import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          About The Right Pack Out | Contents Care San Diego County
        </title>

        <meta
          name="description"
          content="Learn about The Right Pack Out and our commitment to professional contents care throughout San Diego County. Meet the team dedicated to careful service, communication, and property recovery support."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/about" />

        <meta
          property="og:title"
          content="About The Right Pack Out | Contents Care San Diego County"
        />

        <meta
          property="og:description"
          content="Meet The Right Pack Out team and learn about our commitment to professional contents care, careful service, and dependable recovery support throughout San Diego County."
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
          content="About The Right Pack Out | Contents Care San Diego County"
        />

        <meta
          name="twitter:description"
          content="Meet the team behind The Right Pack Out and learn about our commitment to professional contents care throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;