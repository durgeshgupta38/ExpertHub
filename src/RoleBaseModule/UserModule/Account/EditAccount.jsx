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
  const [addresses, setAddresses] = useState({
        pickup: [
            {
                id: 1,
                name: "Vijay Gupta",
                phone: "9452386630",
                pincode: "277211",
                address: "chauhan market",
                landmark: "near burj khalifa",
                altPhone: "1234567890",
                locality: "Aditya Vasralay, new Market, Near Post office.",
                city: "Ballia",
                state: "Uttar Pradesh",
                defaultAddress:"Default",
            },
            {
                id: 2,
                name: "Durgesh Gupta",
                phone: "8787882984",
                pincode: "201301",
                address: "mina bazar",
                landmark: "near burj khalifa",
                altPhone: "0987654321",
                locality: "H. No. 5, Ravi Yadav building Near Narmadeshwar mandir, Nawada rassolpur",
                city: "Noida",
                state: "Uttar Pradesh",
                defaultAddress:"",
            },
            {
                id: 3,
                name: "suni Gupta",
                phone: "9452386630",
                pincode: "277201",
                address: "mina market",
                landmark: "near burj khalifa",
                altPhone: "1234567890",
                locality: "Aditya Vasralay, new Market, Near Post office.",
                city: "Ballia",
                state: "Uttar Pradesh",
                defaultAddress:"",
            },
        ],
        delivery: [
            {
                id: 1,
                name: "Rani Gupta",
                phone: "9452386630",
                pincode: "277211",
                address: "chauhan market",
                landmark: "near burj khalifa",
                altPhone: "1234567890",
                locality: "Aditya Vasralay, new Market, Near Post office.",
                city: "Ballia",
                state: "Uttar Pradesh",
                defaultAddress:"Default",
            },
            {
                id: 2,
                name: "Soni Gupta",
                phone: "8787882984",
                pincode: "201301",
                address: "mina bazar",
                landmark: "near burj khalifa",
                altPhone: "0987654321",
                locality: "H. No. 5, Ravi Yadav building Near Narmadeshwar mandir, Nawada rassolpur",
                city: "Noida",
                state: "Uttar Pradesh",
                defaultAddress:"",
            },
        ]
    });
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

  // // Add or update address
  // const handleAddOrUpdateAddress = () => {
  //   if (!newAddress.trim()) return;
  //   let updatedAddresses = [...formData.addresses];

  //   if (editingIndex !== null) {
  //     updatedAddresses[editingIndex] = newAddress;
  //     setEditingIndex(null);
  //   } else {
  //     updatedAddresses.push(newAddress);
  //   }

  //   setFormData({ ...formData, addresses: updatedAddresses });
  //   setNewAddress("");
  // };

  // // Edit address
  // const handleEditAddress = (index) => {
  //   setNewAddress(formData.addresses[index]);
  //   setEditingIndex(index);
  // };

  // // Delete address
  // const handleDeleteAddress = (index) => {
  //   const updatedAddresses = formData.addresses.filter((_, i) => i !== index);
  //   setFormData({ ...formData, addresses: updatedAddresses });
  // };

  // // Set default address
  // const handleSetDefault = (index) => {
  //   setFormData({ ...formData, defaultAddress: index });
  // };
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
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAccountDetails()) {
      return
    }

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        gender: formData.gender,
        mobile: formData.mobile,
        addresses: addresses,
      };

      console.log(dataToSend,"dataToSenddataToSend")
      const result = await dispatch(updateUserAccount(dataToSend)).unwrap(); // Unwraps the response
      setFormData({ email: "", name:"",adressses:{pickup: [],delivery: []},defaultAddress:null,mobile:"",gender:"" });
      console.log(result,"reererereer")
      CommonToast("success", "Details saved successful!")
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
            {/* Address Section */}
            <h4 className="mt-3">Addresses</h4>
            <AddressManagerDrop addresses={addresses} setAddresses={setAddresses}/>
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
            {/* Submit Button */}
            <Row className="text-center">
              <Col>
                <Button type="submit" variant="success" className={`mt-3 submittype ${loading ? "pt-1" : "p-2"}`} disabled={loading}>
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
