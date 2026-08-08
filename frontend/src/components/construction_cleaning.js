import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ConstructionCleanup = () => {
  return (
    <Container
      style={{
        marginTop: "50px",
        marginBottom: "50px",
        textAlign: "center",
        maxWidth: "900px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          marginBottom: "8px",
          color: "#c9232d",
          fontSize: "0.7rem",
          fontWeight: "800",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        Specialty Cleaning
      </span>

      <h2
        style={{
          color: "#07386c",
          fontWeight: "800",
          marginBottom: "16px",
        }}
      >
        Construction Cleanup
      </h2>

      <p
        style={{
          color: "#5f6b7a",
          lineHeight: "1.7",
          maxWidth: "760px",
          margin: "0 auto 24px",
        }}
      >
        Construction cleanup helps prepare newly constructed or renovated
        spaces for use by removing dust, debris, and leftover materials.
        Detailed cleaning of surfaces, fixtures, windows, and surrounding
        areas helps create a cleaner, safer, and more presentable
        environment.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <Button
          href="/request-assistance"
          variant="danger"
          style={{
            fontWeight: "700",
            padding: "10px 18px",
          }}
        >
          Request Assistance
        </Button>

        <Button
          href="tel:+16197867089"
          variant="outline-danger"
          style={{
            fontWeight: "700",
            padding: "10px 18px",
          }}
        >
          Call 619-786-7089
        </Button>
      </div>
    </Container>
  );
};

export default ConstructionCleanup;