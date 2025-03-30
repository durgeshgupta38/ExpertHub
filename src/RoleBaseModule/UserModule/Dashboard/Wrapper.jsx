import React from "react"
import "./style.css"
import { Container} from "react-bootstrap"
import CategoryList from "./CategoryList"
import HomePage from "./HomePage"

const Wrapper = () => {
  return (
    <section className='wrapper background mt-4' >
      <Container>
        <div className="heading">
          <h1>Filter or search for a category below to book a service</h1>
        </div>
        <CategoryList/>
      </Container>
    </section>
  )
}

export default Wrapper
