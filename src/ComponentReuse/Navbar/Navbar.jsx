import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import "./navbar.css";
import NotificationIcon from "../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/Slices/userSlice";
import { CommonToast } from "../Loader/commonToast";

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
let isLoggedIn=localStorage.getItem("isLoggedIn")
let role=localStorage.getItem("roles");

const dispatch = useDispatch();
  const navigate = useNavigate();
  // Handle Scroll for Sticky Navbar
  useEffect(() => {
    const scrollHandler = () => {
      setIsFixed(window.scrollY >= 100);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleLogout = async() => {
    let accessToken=localStorage.getItem("accessToken")
    try {
      const result = await dispatch(logoutUser()).unwrap();
      console.log(result, "logout Response");
      navigate("/login");
      CommonToast("success","Logout successful!")
    
  } catch (error) {
      console.error("Logout Error:", error);
      CommonToast("error",error || "Logout failed. Please try again.")
  }
  }
  return (
    <Navbar fixed="top" expand="md" className={`navbar ${isFixed ? "fixed" : ""}`}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpand(!expand)}
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link className="nav-link" to="/" onClick={() => setExpand(false)}>Home</Link>
            </Nav.Item>

            {isLoggedIn && role=="user" &&<>
              <Nav.Item>
                <button
                    className="nav-link" onClick={(e) => {
                  e.preventDefault();
                  setExpand(false);
                  navigate("/profile?tab=account");
                }}
                >Account</button>
              </Nav.Item>
              <Nav.Item>
              <Link className="nav-link" to="/profile?tab=myBooking" onClick={() => setExpand(false)}>Bookings</Link>
              </Nav.Item>
                <Nav.Item>
                <NotificationIcon count={9} />
              </Nav.Item>
              </> }

            {isLoggedIn && role === "admin" && (
              <Nav.Item>
                <Link className="nav-link" to="/admin" onClick={() => setExpand(false)}>Admin Panel</Link>
              </Nav.Item>
            )}
            <Nav.Item>
              {isLoggedIn ? <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
