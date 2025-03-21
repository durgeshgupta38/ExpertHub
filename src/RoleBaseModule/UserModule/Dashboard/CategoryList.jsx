import { useEffect, useState } from "react";
import { Col, Container, Row, Pagination, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FilterSelect from "../../../ComponentReuse/Filter/FilterSelect";
import SearchBar from "../../../ComponentReuse/SeachBar/SearchBar";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const count = useSelector((state) =>state?.category?.categoryList)
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

  return (
    <Container>
      <section className="filter-bar">
        <Container className="filter-bar-container">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect />
            </Col>
            <Col md={8}>
              <SearchBar />
            </Col>
          </Row>
        </Container>

        {/* Services List */}
        <Container className="mt-4">
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
              <p>Loading Categories...</p>
            </div>
          ) : (
            <Row>
              {count.map((val) => (
                <Col md={3} sm={6} xs={12} className="feature p-3 mb-3 text-center" key={val.id} style={{ backgroundColor: val.bg }}>
                  <div className="icon">{val.icon}</div>
                  <h5>{val.title}</h5>
                  <button className="btn btn-primary btn-sm mt-2" onClick={()=>navigate(`/experts/${val.id}`)}>
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
      </section>
    </Container>
  );
};

export default CategoryList