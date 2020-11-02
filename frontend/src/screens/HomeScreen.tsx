import React from 'react'
import products from '../products'

import { Col, Row } from 'react-bootstrap'
import ProductComponent from '../components/Product'

const HomeScreen = () => {
  return (
    <>
      <h1>latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductComponent product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
