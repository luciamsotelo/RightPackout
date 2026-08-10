import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Management from "../components/management";
import Footer from "../components/footer";

const ManagementPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Restoration Project Coordination San Diego County | The Right Pack Out
        </title>

        <meta
          name="description"
          content="Professional restoration project coordination throughout San Diego County. The Right Pack Out helps organize site communication, scheduling, logistics, contents handling, and recovery support from start to finish."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link rel="canonical" href="https://therightpackout.com/management" />

        <meta
          property="og:title"
          content="Restoration Project Coordination San Diego County | The Right Pack Out"
        />

        <meta
          property="og:description"
          content="Organized project coordination, site communication, scheduling, logistics, and contents-related support for restoration projects throughout San Diego County."
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
          content="Restoration Project Coordination San Diego County | The Right Pack Out"
        />

        <meta
          name="twitter:description"
          content="Professional project coordination and contents-related support for restoration projects throughout San Diego County."
        />
      </Helmet>

      <Header />

      <main>
        <Management />
      </main>

      <Footer />
    </div>
  );
};

export default ManagementPage;