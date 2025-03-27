import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card, ListGroup, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CommonToast } from "../../../ComponentReuse/Loader/commonToast";
import { changePassword, logoutUser, updateUserAccount } from "../../../Redux/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CommonSpinner from "../../../ComponentReuse/Loader/Spinner";
import AddressManagerDrop from "../Booking/AddressManager";
const EditAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();

  const { loading, error, isLoggedIn } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({ ...location.state?.userData, addresses: [], defaultAddress: null })
  // {...location.state?.userData,addresses: [],defaultAddress: null,}

  console.log(formData, "ddddddddddddddddddddd")
  //   {
  //   fullName: "",
  //   email: "",
  //   gender: "",
  //   mobile: "",
  //   addresses: [],
  //   defaultAddress: null,
  // };
  const [errors, setErrors] = useState({});
  const [{ oldPassword, newPassword, confirmPassword }, setPassword] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [newAddress, setNewAddress] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const togglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  const validateForm = () => {
    let newErrors = {};

    const oldPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!oldPasswordRegex.test(oldPassword)) {
      newErrors.oldPassword = "Password must be at least 8 characters, include a letter, number, and special character.";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      newErrors.newPassword = "Password must be at least 8 characters, include a letter, number, and special character.";
    }

    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };
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
  const validateAccountDetails = () => {
    let newErrors = {};
    if (!/^[a-zA-Z\s]{3,}$/.test(formData.name)) {
      newErrors.name = "Full name must be at least 3 characters and contain only letters & spaces.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    const phoneRegex = /^(?:\+91)?[0-9]{10}$/;
    if (!phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number (with or without +91).";
    }
    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }
    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };
  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAccountDetails()) {
      return
    }

    try {
      const dataToSend = {
        fullName: formData.name,
        email: formData.email,
        gender: formData.gender,
        mobile: formData.mobile,
        addresses: formData.addresses,
        defaultAddress: formData.addresses[formData.defaultAddress] || null,
      };
      const result = await dispatch(updateUserAccount(dataToSend)).unwrap(); // Unwraps the response
      CommonToast("success", "Login successful!")
      setFormData({ email: "", name:"",adressses:"",defaultAddress:null,mobile:"",gender:"" });
      setErrors(prev=>({...prev,email: "",name:"",mobile:"",gender:""}));
    } catch (error) {
      CommonToast("error", error || "Unable to update the details. Please try again.")
    }
  };


  const handleChangePassword = async () => {
    if (!validateForm()) {
      return
    }

    try {
      const response = await dispatch(changePassword({ oldPassword, newPassword })).unwrap();
      CommonToast("success", response.message + "" + "Please login again to continue");
      dispatch(logoutUser());
      navigate("/login", { state: { path: "/account/edit" } });
      setPassword({ oldPassword: "", newPassword: "", confirmPassword: "" });
      setErrors(prev=>({...prev,oldPassword: "", newPassword: "", confirmPassword: ""}));

    } catch (error) {
      CommonToast("error", error || "Failed to change password.");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Col md={9}>
        <Card className="p-4 mt-4 agentList">
          <h2 className="text-center">Edit Account Details</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName" className="mt-2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" className="fullName" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            {errors.name && <p className="text-danger">{errors.name}</p>}

            <Form.Group controlId="email" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </Form.Group>

            <Form.Group controlId="gender" className="mt-2">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            {errors.gender && <p className="text-danger">{errors.gender}</p>}

            <Form.Group controlId="mobile" className="mt-2">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
              {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
            </Form.Group>

            {/* Address Section */}
            <h4 className="mt-3">Addresses</h4>
            <AddressManagerDrop />
            {/* Add Address */}
            {/* <Form.Group controlId="newAddress" className="mb-4">
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
            </Form.Group> */}

            {/* <ListGroup>
              {formData?.addresses?.map((address, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center mb-2">
                  {address} {index === formData.defaultAddress && <span className="text-success">(Default)</span>}
                  <div>
                    <Button variant="warning" className="commonStyles" onClick={() => handleEditAddress(index)}>Edit</Button>{" "}
                    <Button variant="danger" className="commonStyles" onClick={() => handleDeleteAddress(index)}>Delete</Button>{" "}
                    {index !== formData.defaultAddress && (
                      <Button variant="success" className="commonStyles" onClick={() => handleSetDefault(index)}>Set Default</Button>
                    )}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup> */}
            {/* Submit Button */}
            <Row className="text-center">
              <Col>
                <Button type="submit" variant="success" className={`mt-3 submittype ${loading ? "pt-2" : "p-1"}`} disabled={loading}>
                  {loading ? <CommonSpinner size="sm" /> : "Submit Account Details"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card className="p-4 mt-4 mb-4 agentList">
          <h4 className="text-center">Change password</h4>
          <Row className="mt-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Old Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword.old ? "text" : "password"}
                    placeholder="Enter old password"
                    value={oldPassword}
                    onChange={(e) => setPassword(prev => ({ ...prev, oldPassword: e.target.value }))}
                  />
                  <Button variant="outline-secondary" className="no-hover" onClick={() => togglePassword("old")}>
                    {showPassword.old ? "👁️‍🗨️" : '🙈'}
                  </Button>
                </InputGroup>
                {errors.oldPassword && <p className="text-danger">{errors.oldPassword}</p>}

              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>New Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword.new ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setPassword(prev => ({ ...prev, newPassword: e.target.value }))}
                  />
                  <Button variant="outline-secondary" className="no-hover" onClick={() => togglePassword("new")}>
                    {showPassword.new ? "👁️‍🗨️" : '🙈'}
                  </Button>
                </InputGroup>
                {errors.newPassword && <p className="text-danger">{errors.newPassword}</p>}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Confirm New Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword.confirm ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setPassword(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  />
                  <Button variant="outline-secondary" className="no-hover" onClick={() => togglePassword("confirm")}>
                    {showPassword.confirm ? "👁️‍🗨️" : '🙈'}
                  </Button>
                </InputGroup>
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3 text-center">
            <Col>
              <Button className={`mt-3 submittype ${loading ? "pt-2" : "p-1"} btnwidth`} onClick={handleChangePassword} disabled={loading}>
                {loading ? <CommonSpinner size="sm" /> : "Save Password"}
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Container>
  );
};

export default EditAccount;
