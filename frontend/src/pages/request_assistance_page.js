import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import RequestAssistance from "../components/request_assistance";

const RequestAssistancePage = () => {
  return (
    <div>
      <Header />

      <main>
        <RequestAssistance />
      </main>

      <Footer />
    </div>
  );
};

export default RequestAssistancePage;