import React, { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { Container, Row, Col, Tab, Nav, Button, Image, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
import BookingTable from "../Booking/MyBookings";

const TabBar = () => {
  const [profileImage, setProfileImage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get("tab") || "account";
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  const handleEditAccount=()=>{
    navigate("/account/edit");
  }

  return (
    <>
    <Container className="profile-container mt-4">
      <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
        {/* Tabs Navigation */}
        <Nav variant="tabs" className="profile-tabs">
          <Nav.Item>
            <Nav.Link eventKey="account" onClick={()=>navigate("/profile?tab=account")}>Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="myBooking"onClick={()=>navigate("/profile?tab=myBooking")}>My Bookings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="notification"  onClick={()=>navigate("/profile?tab=notification")}>Notifications</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {/* Account Section */}
          <Tab.Pane eventKey="account">
            <Card className="profile-card">
              <Row className="profile-body mt-3">
                <Col md={6} xs={4} className="text-center position-relative" >
                  {/* Profile Image */}
                  <div  xs={4} className="profile-img-container">
                    <Image src={profileImage} roundedCircle className="profile-img" />
                    {/* Camera Icon - Visible on Hover */}
                    <div className="profile-img-overlay">
                      <label htmlFor="profileImageUpload" className="camera-icon">
                      <i>✏️</i>
                      </label>
                      <Form.Control
                        id="profileImageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="profileImag"
                      />
                    </div>
                  </div>
                </Col>
                <Col md={6} xs={8} className="text-center">
                  <div className="profile-banner">
                    <Button className="edit-btn bg-primary" onClick={handleEditAccount}>Edit Account</Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={9} className="mt-6 profilegap">
                  <h3>Durgesh Gupta</h3>
                  <p>
                    <strong>Email:</strong> durgeshgupta38@gmail.com
                  </p>
                  <p>
                    <strong>Address:</strong> <i>Address not set</i>
                  </p>
                  <p>
                    <strong>Mobile:</strong> N/A
                  </p>
                  <p>
                    <strong>Date Joined:</strong> <span className="joined-date">March 13, 2025</span>
                  </p>
                </Col>
              </Row>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="myBooking">
            <Card className="profile-card">
              <p>Below are the list of all service booked by you.</p>
              <BookingTable/>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="notification">
            <Card className="profile-card">
              <p>No Notification to show !!</p>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
    </>
  );
};

export default TabBar;
