import { Container, Row, Card } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../utils/products";
import UserChoices from "./UserChoices";
import AddressManager from "./AddressManager";

const AgentList = () => {
    return (
        <>
            {/* <Container className="mt-3 p-2">
                <Card className="p-3">
                </Card>

            </Container> */}
                {/* <Container> */}
                <AddressManager/>

                <Card className="p-3 mb-2" style={{ background: "#e8f2fc" }}>
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
                    </Card>
                {/* </Container> */}
        </>
    );
};

export default AgentList;
