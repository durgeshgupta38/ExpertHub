import { useState } from "react";
import { Col, Container, Row, Image, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./AgentDetails.css";
import profileImg from "../../../../Assets/Images/arm-chair-01.jpg";
import { useNavigate } from "react-router-dom";
import useWindowScrollToTop from "../../../../CustomHook/useWindowScrollToTop";

const AgentDetails = ({ selectedProduct }) => {
  useWindowScrollToTop()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handeBookNow = () => {
    navigate(`/user/review`);
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={3} xs={4} >
            <Image src={profileImg} roundedCircle className="profilecircle" />
          </Col>
          <Col md={6}>
            <h2>Product name Delivery {selectedProduct?.productName}</h2>
            <div className="rate">
              <div className="stars">
                <span>Rating: {selectedProduct?.avgRating}4.7<i className="stars fa fa-star"></i></span>

              </div>

            </div>
            <div className="info">
              <span className="prices">Service Charges: {selectedProduct?.price} 30000</span>
              <span className="modeOfService">Mode of Service: Online</span>

              <span>category:{selectedProduct?.category}Mechanic service</span>
            </div>
            <p>{selectedProduct?.shortDesc}FriedShop : A e-commerce website built with ReactJS. This project is a front-end web application for a fictional fast-food restaurant called Friedshop, developed with ReactJS. It allows users to browse the menu, place orders, and track their statuFriedShop : A e-commerce website built with ReactJS. This project is a front-end web application for a fictional fast-food restaurant called Friedshop, developed with ReactJS. It allows users to browse the menu, place orders, and track their statuFriedShop : A e-commerce website built with ReactJS. This project is a front-end web application for a fictional fast-food restaurant called Friedshop, developed with ReactJS. It allows users to browse the menu, place orders, and track their statu</p>
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handeBookNow()}
            >
              Book Now
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AgentDetails;
