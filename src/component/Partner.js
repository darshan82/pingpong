import React from 'react';
import './partner.css';
import{Col,Row,Container} from 'react-bootstrap';

export default function Partner() {
    return (
        <div >
        <Container className="contain1">
        <Row >
          <Col xs={12} md={4}><img src="./image/link.svg" alt="link" className="link" /></Col>
          <Col xs={12} md={4}><img src="./image/rocket.svg" alt="link"  className="rocket"/></Col>
          <Col xs={12} md={4}><img src="./image/sara.svg" alt="link" className="sara"/></Col>
        </Row>
      </Container>
        </div>
    )
}
