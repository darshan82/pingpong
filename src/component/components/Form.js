import React from 'react';
import '../style/form.css';
import {Row,Col,Container} from 'react-bootstrap';

export default function Form() {
    return (
        <div>
        <Container>
      
        <Row className="contain2  no-gutters">
          <Col md={2} sm={2}><p className="para">전체 <span>  10</span></p></Col>
          <Col md={2} sm={2}><p  className="para">개발  <span>  3</span></p></Col>
          <Col md={3} sm={2}><p className="para">기획 / 마케팅 <span>  5</span></p></Col>
          <Col md={2} sm={2}><p className="para">디자인  <span>  0</span> </p></Col>
          <Col md={2} sm={2}><p className="para">기타  <span>  2</span></p></Col>
        </Row>
      {  /*
        <Row className="background ">
        <Col><p  className="para1 t1 ">분야</p></Col>
        <Col><p  className="para1 t2 ">내용</p></Col>
        <Col><p  className="para1 t3">마감일</p></Col>
      </Row>
      <Row className="border">
      <Col><p className="para2 " >진행 중인 공고가 없습니다.</p></Col>
    </Row>
    <Row>
    <Col><p className="para3"> </p></Col>
      </Row>*/}
      </Container>
        </div>
    )
}
