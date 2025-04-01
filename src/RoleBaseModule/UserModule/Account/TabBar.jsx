import React, { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { Container, Row, Col, Tab, Nav, Button, Image, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
import BookingTable from "../Booking/MyBookings";
import { useDispatch, useSelector } from "react-redux";
import { CommonToast } from "../../../ComponentReuse/Loader/commonToast";
import { getUserDetails, updateProfilePic } from "../../../Redux/Slices/userSlice";
import CommonSpinner from "../../../ComponentReuse/Loader/Spinner";
import Loader from "../../../ComponentReuse/Loader/Loader";

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get("tab") || "account";
  const [activeTab, setActiveTab] = useState(defaultTab);
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
        dispatch(getUserDetails()).unwrap() // Unwrap to get the actual result/error
        .then((result) => {
            // console.log('Data loaded:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  }, [dispatch]);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // const imageUrl = URL.createObjectURL(file);
      try {
        const response = await dispatch(updateProfilePic(file)).unwrap();
      // setProfileData(response.data);
        console.log("Updated user data:", response);
      } catch (error) {
        CommonToast("error",error.message || "Failed to update profile picture.")

      }
    }
  };
  const handleEditAccount=()=>{
    navigate("/user/profile/edit",{
      state: { userData:user }, // Pass the user object or any data
    });
  }

  return (
    <>
    <Container className="profile-container mt-4">
      <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
        {/* Tabs Navigation */}
        <Nav variant="tabs" className="profile-tabs">
          <Nav.Item>
            <Nav.Link eventKey="account" onClick={()=>navigate("/user/profile?tab=account")}>Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="myBooking"onClick={()=>navigate("/user/profile?tab=myBooking")}>My Bookings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="notification"  onClick={()=>navigate("/user/profile?tab=notification")}>Notifications</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {/* Account Section */}
          {loading?<Loader/> : <Tab.Pane eventKey="account">
            <Card className="profile-card">
              <Row className="profile-body mt-3">
                <Col md={6} xs={4} className="text-center position-relative">
                  {/* Profile Image */}
                  <div  xs={4} className="profile-img-container">
                    <Image src={user?.profile} roundedCircle className="profile-img" />
                    {/* Camera Icon - Visible on Hover */}
                    <div className="profile-img-overlay">
                      <label htmlFor="profileImageUpload" className="camera-icon">
                      {loading ? <CommonSpinner size="sm" dontShowtext={true}/> : <i>✏️</i>}
                      </label>
                      <Form.Control
                        id="profileImageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="profileImag"
                        disabled={false}
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
                  <h3>{user?.name}</h3>
                  <p>
                    <strong>Email:</strong> {user?.email}
                  </p>
                  <p>
                    <strong>Address:</strong> <i>{user?.address}</i>
                  </p>
                  <p>
                    <strong>Mobile:</strong> {user?.mobile}
                  </p>
                  <p>
                    <strong>Date Joined:</strong> <span className="joined-date">{user?.createdAt}</span>
                  </p>
                </Col>
              </Row>
            </Card>
          </Tab.Pane>}
      

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
