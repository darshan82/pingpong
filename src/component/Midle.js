import React from 'react';
import './midle.css'
import {Col,Row,Container} from 'react-bootstrap';

export default function Midle() {
    return (
        <div style={{marginBottom:150,marginTop:40}}>
        <Container>
        <Row >
          <Col sm={12}  md={12}><p className="text1">인재채용</p></Col>
     
        </Row>
        <Row >
          <Col sm={12} md={12}><p className="text2">현재 진행 중인 핑퐁의 채용공고입니다.</p></Col>
        
        </Row>
      </Container>
        </div>
    )
}
