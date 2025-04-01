import { useEffect, useState } from "react";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FilterSelect from "../../../ComponentReuse/Filter/FilterSelect";
import SearchBar from "../../../ComponentReuse/SeachBar/SearchBar";
import { useSelector } from "react-redux";
import "./style.css"
import WhatsApp from "../../../Assets/Images/WhatsApp.svg"
import writeus from "../../../Assets/Images/fi-rr-comment-alt.svg"
import CommonSpinner from "../../../ComponentReuse/Loader/Spinner";
import { serviceData } from "../../../Utils/products";
import useWindowScrollToTop from "../../../CustomHook/useWindowScrollToTop";

const CategoryList = () => {
  useWindowScrollToTop()
  const [showForm, setShowForm] = useState(false);
  const [categoryType,setCategoryType]=useState({cat:"",subCat:""})
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const count = useSelector((state) => state?.category?.categoryList)
  // Fetch data from API
  const fetchServices = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://yourapi.com/services?page=${page}&limit=${itemsPerPage}`);
      const data = await response.json();
      setServices(data.services);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
    setLoading(false);
  };

  // Fetch data on page change
  useEffect(() => {
    fetchServices(currentPage);
  }, [currentPage]);
  const handleCallback = () => {
    alert("You will shortly receive a call from our customer executive")
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Query submitted: ${query}`);
    setQuery(""); // Clear input field
    setShowForm(false); // Hide form after submission
  };

  return (
    <Container>
      <section className="filter-bar">
        <Container className="filter-bar-container">
          <Row className="justify-content-center">
          <Col md={4}>
  <FilterSelect catAndSubCat={setCategoryType} />
  {categoryType.cat && (
    <div className="selected-category mt-2">
      <strong>Selected: </strong> {categoryType.cat} {categoryType.subCat && `> ${categoryType.subCat}`}
    </div>
  )}
</Col>
            <Col md={8}>
              <SearchBar/>
            </Col>
          </Row>
        </Container>

        {/* Services List */}
        <Container className="mt-4">
          {loading ? (
             <CommonSpinner/> 
          ) : (
            <Row>
              {serviceData.map((val, index) => (
                <Col md={3} sm={6} xs={12} className="feature p-3 mb-3 text-center" key={index} style={{ backgroundColor: val.bg }}>
                  <div className="icon">{val.icon}</div>
                  <h5>{val.title}</h5>
                  <button className="customButtonColor btn-sm mt-2" onClick={() => navigate(`/user/bookingdetails`)}>
                    {val.subtitle}
                  </button>
                </Col>
              ))}
            </Row>
          )}
        </Container>

        {/* Pagination */}
        <Container className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} />
          </Pagination>
        </Container>

        <div className="mt-4">
  <h5>Didn't find the Service(s) you are looking for?</h5>

  <p className="mt-0 mb-0">
    Call us at +918787882984 Or {" "}
    <span
      className="text-primary cursor-pointer no-underline"
      onClick={() => setShowForm(true)}
    >
      write to us 
      <img src={writeus} alt="Message Icon" width="18" height="18" className="ms-1" />
    </span>
  </p>

  <p className="mt-0 mb-0">
    Or contact us on WhatsApp us(click on the Icon)
    <a href="https://wa.me/918787882984" target="_blank" rel="noopener noreferrer">
      <img className="whatsapp ms-1" src={WhatsApp} alt="WhatsApp" width="26" height="26" />
    </a> 
    +918787882984
  </p>

  <p className="mt-0">
    Or <Link onClick={handleCallback} className="no-underline">request a callback</Link>, and our team will reach out to assist you.
  </p>

  {showForm && (
    <form onSubmit={handleFormSubmit} className="mt-3">
      <textarea
        className="form-control"
        rows="3"
        placeholder="Write your query here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary mt-2">Send</button>
      <button type="button" className="btn btn-secondary mt-2 ms-2" onClick={() => setShowForm(false)}>Cancel</button>
    </form>
  )}
</div>

      </section>
    </Container>
  );
};

export default CategoryList