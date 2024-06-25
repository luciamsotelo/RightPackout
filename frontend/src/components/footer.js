import React from "react";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
    return (
        <div className="footer d-flex flex-column align-items-center mt-3" style={{backgroundColor: "blue", fontSize:"20px", position: "fixed", bottom: "0", width: "100%", paddingTop: "1px"}}>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link style = {{color: "white"}} href="/about">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link style = {{color: "white"}} href="/about">Reviews</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Footer;