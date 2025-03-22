import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          {/* Logo & Description */}
          <Col md={3} sm={6} className="footer-box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Multimart</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.</p>
          </Col>

          {/* About Us */}
          <Col md={3} sm={6} className="footer-box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          {/* Customer Care */}
          <Col md={3} sm={6} className="footer-box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Returns & Refunds</li>
            </ul>
          </Col>

          {/* Contact Us */}
          <Col md={3} sm={6} className="footer-box">
            <h2>Contact Us</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012</li>
              <li>Email: support@multimart.com</li>
              <li>Phone: +1 123 456 7890</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
