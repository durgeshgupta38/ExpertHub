import React, { useState } from "react";
import { Container, Row, Col, Button, ProgressBar, Card, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import productImg01 from "../../../Assets/Images/arm-chair-01.jpg";
import AgentDetails from "./AgentDetails/AgentDetails";

const AgentDescriptionPage = () => {
    const ratingsSummary = {
        average: 4.3,
        totalRatings: 1615,
        totalReviews: 106,
        breakdown: { 5: 966, 4: 352, 3: 158, 2: 47, 1: 92 },
    };

    const [reviews, setReviews] = useState([
        { name: "John Doe", rating: 5, comment: "Great product!", images: ["https://via.placeholder.com/50"] },
        { name: "Alice Smith", rating: 4, comment: "Good quality, but a bit expensive.", images: ["https://via.placeholder.com/50"] },
        { name: "Bob Johnson", rating: 3, comment: "Decent, but could be improved.", images: [] },
        { name: "Emma Brown", rating: 2, comment: "Not as expected.", images: [] },
        { name: "Mike Davis", rating: 1, comment: "Terrible experience.", images: [] },
    ]);

    const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "", images: [] });
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3;

    const handleChange = (e) => setNewReview({ ...newReview, [e.target.name]: e.target.value });

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        setNewReview({ ...newReview, images: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.comment) {
            setReviews([newReview, ...reviews]);
            setNewReview({ name: "", rating: 5, comment: "", images: [] });
            setCurrentPage(1); // Reset to first page after adding a review
        }
    };

    const getProgressColor = (rating) => (rating >= 3 ? "success" : rating === 2 ? "warning" : "danger");

    // Pagination Logic
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const products = [
        {
            id: "01",
            productName: "Stone and Beam Westview ",
            imgUrl: productImg01,
            category: "sofa",
            price: 193,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.7,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.5,
        }]
    return (
        <>
            <Container className="mt-3 p-2">
                <Card className="p-3">
                    <AgentDetails selectedProduct={products} />
                </Card>
            </Container>
            <Container className="mt-3 p-2">
                {/* Ratings Summary */}
                <Card className="p-3">
                    <h5 className="mb-2">Ratings & Reviews</h5>
                    <Row className="align-items-center">
                        <Col xs={4} className="text-center">
                            <h2 className="mb-1">{ratingsSummary.average}★</h2>
                            <p className="mb-1 small">{ratingsSummary.totalRatings} Ratings | {ratingsSummary.totalReviews} Reviews</p>
                        </Col>
                        <Col xs={6}>
                            {Object.keys(ratingsSummary.breakdown)
                                .reverse()
                                .map((star) => (
                                    <Row key={star} className="align-items-center mb-1">
                                        <Col xs={2} className="small">{star}★</Col>
                                        <Col xs={7}>
                                            <ProgressBar
                                                now={(ratingsSummary.breakdown[star] / ratingsSummary.totalRatings) * 100}
                                                variant={getProgressColor(parseInt(star))}
                                                style={{ height: "6px" }}
                                            />
                                        </Col>
                                        <Col xs={3} className="small">{ratingsSummary.breakdown[star]}</Col>
                                    </Row>
                                ))}
                        </Col>
                        <Col xs={2} className="text-center">
                            <Button variant="outline-dark" size="sm">Rate</Button>
                        </Col>
                    </Row>
                </Card>

                {/* Reviews List */}
                <h6 className="mt-3">Customer Reviews</h6>
                {currentReviews.map((review, index) => (
                    <Card key={index} className="p-2 my-1">
                        <Row>
                            <Col xs={1} className="text-center">
                                <span className={`badge bg-${getProgressColor(parseInt(review.rating))}`}>{review.rating}★</span>
                            </Col>
                            <Col xs={11}>
                                <h6 className="mb-0">{review.name}</h6>
                                <p className="small mb-1">{review.comment}</p>
                                <Row>
                                    {review.images.map((img, i) => (
                                        <Col xs={2} key={i}>
                                            <Image src={img} fluid rounded style={{ width: "45px", height: "45px" }} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                ))}

                {/* Pagination Controls */}
                <Row className="mt-2 justify-content-center">
                    <Col xs="auto">
                        <Button
                            variant="outline-primary"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Prev
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <span className="small">{currentPage} / {Math.ceil(reviews.length / reviewsPerPage)}</span>
                    </Col>
                    <Col xs="auto">
                        <Button
                            variant="outline-primary"
                            size="sm"
                            disabled={indexOfLastReview >= reviews.length}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </Button>
                    </Col>
                </Row>

                {/* Add Review Form */}
                <h6 className="mt-3">Add a Review</h6>
                <Card className="p-2">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-1">
                            <Form.Label className="small mb-0">Name</Form.Label>
                            <Form.Control type="text" name="name" value={newReview.name} onChange={handleChange} required size="sm" style={{ border: "1px solid #d4d5d6" }} />
                        </Form.Group>

                        <Form.Group className="mb-1">
                            <Form.Label className="small mb-0">Rating</Form.Label>
                            <Form.Select name="rating" value={newReview.rating} onChange={handleChange} size="sm">
                                {[5, 4, 3, 2, 1].map((num) => (
                                    <option key={num} value={num}>{num} Stars</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-1">
                            <Form.Label className="small mb-0">Comment</Form.Label>
                            <Form.Control as="textarea" name="comment" rows={2} value={newReview.comment} onChange={handleChange} required size="sm" />
                        </Form.Group>

                        <Form.Group className="mb-1">
                            <Form.Label className="small mb-0">Upload Images</Form.Label>
                            <Form.Control type="file" multiple accept="image/*" onChange={handleImageUpload} size="sm" />
                        </Form.Group>

                        <Button variant="success" type="submit" size="sm">Submit</Button>
                    </Form>
                </Card>
            </Container>
        </>
    );
};

export default AgentDescriptionPage;