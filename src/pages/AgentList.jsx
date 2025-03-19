import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../utils/products";
import UserChoices from "./UserChoices";
import AddressManagerDrop from "./AddressManager";

const AgentList = () => {
    return (
        <>
            <Container>
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
