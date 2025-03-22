import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import ProductCard from "./AgentCard/AgentCard"
import { products } from "../../../Utils/products";
import UserChoices from "../Booking/UserChoices";
import AddressManagerDrop from "../Booking/AddressManager";
import "./agent.css";
const AgentList = () => {
    return (
        <>
            <Container className="agentList mt-4 pb-4">
                    <h3 className="text-center mt-4 mb-3">Booking Form</h3>
                <AddressManagerDrop />
            {/* </Container> */}
            {/* <Card className="p-3 mb-2" > */}
                <UserChoices />

                <div className="heading">
                    <h1>Available Agent</h1>
                </div>
                <Row className="g-3">
                    {products.map((productItem) => {
                        return (
                            <ProductCard
                                key={productItem.id}
                                title={productItem?.title}
                                productItem={productItem}
                            />
                        );
                    })}
                </Row>
            {/* </Card> */}
            </Container>
        </>
    );
};

export default AgentList;
