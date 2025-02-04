import React from "react";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
    return (
        <div
            className="footer d-flex flex-column align-items-center mt-3"
            style={{
                background: "linear-gradient(to right, #003366, #0055aa)", 
                fontSize: "85%",
                position: "fixed",
                bottom: "0",
                width: "100%",
                padding: "10px 0",
                boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Nav defaultActiveKey="/home" as="ul" className="d-flex justify-content-center">
                <Nav.Item as="li" className="mx-3">
                    <Nav.Link 
                        href="/about"
                        style={{
                            color: "white",
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                    >
                        Meet Our Team
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="mx-3">
                    <Nav.Link 
                        href="/review"
                        style={{
                            color: "white",
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                    >
                        Client Reviews
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="mx-3">
                    <Nav.Link 
                        href="/feedback"
                        style={{
                            color: "white",
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                    >
                        Your Feedback
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Footer;
