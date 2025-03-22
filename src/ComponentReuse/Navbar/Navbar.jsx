import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../ContextApi/AuthContext";
import LogoutButton from "../../Auth/Logout";
import logo from "../../Assets/Images/logo.png";
import "./navbar.css";
import NotificationIcon from "../Notification/Notification";

const NavBar = () => {
  const { isAuthenticated, role } = useAuth();
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  // Handle Scroll for Sticky Navbar
  useEffect(() => {
    const scrollHandler = () => {
      setIsFixed(window.scrollY >= 100);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  const handleMyAccount = () => {

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
            {isAuthenticated &&<>
              <Nav.Item>
                <button
                    className="nav-link" onClick={(e) => {
                  e.preventDefault();
                  setExpand(false);
                  navigate("/profile?tab=account");
                }}
                >My Account</button>
              </Nav.Item>
                <Nav.Item>
                <NotificationIcon count={9} />
              </Nav.Item>
              </> }

            {role === "admin" && (
              <Nav.Item>
                <Link className="nav-link" to="/admin" onClick={() => setExpand(false)}>Admin Panel</Link>
              </Nav.Item>
            )}
            <Nav.Item>
              {isAuthenticated ? <LogoutButton /> : <Link className="nav-link" to="/login">Login</Link>}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
