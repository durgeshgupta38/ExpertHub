import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { products, serviceData } from "../../utils/products"
import Shop from "../../pages/Shop"

const Wrapper = () => {

  const handelChange=()=>{

  }
  return (
    <section className='wrapper background mt-4' >
      <Container>
        <div className="heading">
          <h1>Filter or search for a category below to book a service</h1>
        </div>
            <Shop/>
      </Container>
    </section>
  )
}

export default Wrapper
