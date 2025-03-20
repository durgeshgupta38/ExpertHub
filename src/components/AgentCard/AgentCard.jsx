import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import "./agentcard.css";

const ProductCard = ({ productItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/experts/${id}/agentlist`);
  };

  return (
    <Col key={productItem.id} lg={3} md={4} sm={6} xs={12}>
      <Card className="product-card text-center">
        <Card.Img
          variant="top"
          src={productItem.imgUrl}
          alt={productItem.productName}
          className="rounded-circle product-image"
        />
        <Card.Body>
          <Card.Title
            className="product-title"
          >
            {productItem.productName}
          </Card.Title>
          <div className="rate">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa fa-star text-warning"></i>
            ))}
          </div>
          <Button variant="primary" className="mt-2" onClick={() => handleClick(productItem.id)}>
            View Agent
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
