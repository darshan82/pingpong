import React from 'react';
import '../style/modal.css';
import { Modal, Container, Col, Row, Button } from "react-bootstrap";
function MydModalWithGrid( props ) {
    return (
        <Modal {...props} centered backdropClassName='' aria-labelledby="contained-modal-title-vcenter">
            <Modal.Body className="show-grid">
                <Container>

                    <Row>

                    </Row>
                    <Row>

                    </Row>
                    <Row className="justify-content-md-center">

                     
                            <Modal.Title id="contained-modal-title-vcenter">
                            지원이 성공적으로 이루어졌습니다.
                            </Modal.Title>
                        
                    </Row>

                    <Row className="justify-content-md-center">
                        <p style={{marginTop:"10px"}}>지원 확인서는 기재해주신 메일에서 확인하실 수 있습니다.
핑퐁에 관심을 갖고 지원해주셔서 진심으로 감사드립니다.</p>
                    </Row>
                    <Row className="justify-content-md-center">
                        
                            <Modal.Footer>
                                <Button onClick={props.onHide}>닫기</Button>
                            </Modal.Footer>
                        

                    </Row>
                </Container>
            </Modal.Body>

        </Modal>
    );
}

export default MydModalWithGrid