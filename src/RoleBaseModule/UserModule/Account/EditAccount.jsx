import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
const EditAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    addresses: [],
    defaultAddress: null,
  });

  const [newAddress, setNewAddress] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update address
  const handleAddOrUpdateAddress = () => {
    if (!newAddress.trim()) return;
    let updatedAddresses = [...formData.addresses];

    if (editingIndex !== null) {
      updatedAddresses[editingIndex] = newAddress;
      setEditingIndex(null);
    } else {
      updatedAddresses.push(newAddress);
    }

    setFormData({ ...formData, addresses: updatedAddresses });
    setNewAddress("");
  };

  // Edit address
  const handleEditAddress = (index) => {
    setNewAddress(formData.addresses[index]);
    setEditingIndex(index);
  };

  // Delete address
  const handleDeleteAddress = (index) => {
    const updatedAddresses = formData.addresses.filter((_, i) => i !== index);
    setFormData({ ...formData, addresses: updatedAddresses });
  };

  // Set default address
  const handleSetDefault = (index) => {
    setFormData({ ...formData, defaultAddress: index });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const apiUrl = "https://your-api-endpoint.com/submit"; // Replace with your API
    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      gender: formData.gender,
      mobile: formData.mobile,
      password: formData.password,
      addresses: formData.addresses,
      defaultAddress: formData.addresses[formData.defaultAddress] || null,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      alert("Form submitted successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Col md={9}>
        <Card className="p-4 mt-4">
          <h2 className="text-center">Edit Account Details</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName" className="mt-2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" className="fullName" value={formData.fullName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="email" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="gender" className="mt-2">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="password" className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="confirmPassword" className="mt-2">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="mobile" className="mt-2">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </Form.Group>

            {/* Address Section */}
            <h4 className="mt-3">Addresses</h4>


            {/* Add Address */}
            <Form.Group controlId="newAddress" className="mb-4">
              <Row>
                <Col>
                  <Form.Control type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} placeholder="Add New Address" />
                </Col>
                <Col xs="auto">
                  <Button variant="primary" onClick={handleAddOrUpdateAddress} className="addresstoggle">
                    {editingIndex !== null ? "Update Address" : "Add Address"}
                  </Button>
                </Col>
              </Row>
            </Form.Group>

            <ListGroup>
              {formData.addresses.map((address, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center mb-2">
                  {address} {index === formData.defaultAddress && <span className="text-success">(Default)</span>}
                  <div>
                    <Button variant="warning" className="commonStyles" onClick={() => handleEditAddress(index)}>Edit</Button>{" "}
                    <Button variant="danger"className="commonStyles" onClick={() => handleDeleteAddress(index)}>Delete</Button>{" "}
                    {index !== formData.defaultAddress && (
                      <Button variant="success"className="commonStyles" onClick={() => handleSetDefault(index)}>Set Default</Button>
                    )}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            {/* Submit Button */}
            <Button type="submit" variant="success" className="mt-3 submittype">
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default EditAccount;
