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
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  // const role = useSelector((state) => state.user.role)
const isLoggedIn=!!localStorage.getItem("isLoggedIn")
const isAuthenticated= !!localStorage.getItem("isAuthenticated")
const role=localStorage.getItem("role")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await dispatch(logoutUser()).unwrap();

      if(result){
        // CommonToast("success", "Logout successful!")
        navigate("/login");
      }
    } catch (error) {
      CommonToast("error", error || "Logout failed. Please try again.")
    }
  }

  // Handle Scroll for Sticky Navbar
  useEffect(() => {
    const scrollHandler = () => {
      setIsFixed(window.scrollY >= 100);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);


  return (
    <Navbar fixed="top" expand="md" className={`navbar ${isFixed ? "fixed" : ""}`}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to={`${isLoggedIn ?"/"+role:"/"}`}>
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
              <Link className="nav-link" to={`${isLoggedIn ?"/"+role:"/"}`} onClick={() => setExpand(false)}>Home</Link>
            </Nav.Item>
            {isLoggedIn && <>
              {/* <Nav.Item>
             {role=="user" && <Link className="nav-link" to="/user/categories" onClick={() => setExpand(false)}>Categories</Link> } 
              </Nav.Item> */}
              <Nav.Item>
                <button
                  className="nav-link" onClick={(e) => {
                    e.preventDefault();
                    setExpand(false);
                    navigate(`/${role}/profile?tab=account`);
                  }}
                >Account</button>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to={`/${role}/profile?tab=myBooking`} onClick={() => setExpand(false)}>Bookings</Link>
              </Nav.Item>
              <Nav.Item>
                <NotificationIcon count={9} />
              </Nav.Item>
            </>}
            <Nav.Item>
              {isLoggedIn ?<Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>: <Link className="nav-link" to="/login">Login</Link>}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
