import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
    return (
        <div className="footer mt-3 py-3" style={{ 
            background: "linear-gradient(to right, #003366, #0055aa)", 
            fontSize: "100%",
            width: "100%",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
        }}>
            <Container>
                <Nav className="justify-content-center flex-wrap">
                    <Nav.Item className="mx-2 my-1">
                        <Nav.Link 
                            href="/about" 
                            className="text-white fw-medium"
                            style={{ transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                            onMouseLeave={(e) => (e.target.style.color = "white")}
                        >
                            Meet Our Team
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2 my-1">
                        <Nav.Link 
                            href="/review" 
                            className="text-white fw-medium"
                            style={{ transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                            onMouseLeave={(e) => (e.target.style.color = "white")}
                        >
                            Client Reviews
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2 my-1">
                        <Nav.Link 
                            href="/feedback" 
                            className="text-white fw-medium"
                            style={{ transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                            onMouseLeave={(e) => (e.target.style.color = "white")}
                        >
                            Your Feedback
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
};

export default Footer;
