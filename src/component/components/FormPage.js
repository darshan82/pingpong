import React from 'react';
import Navbar from './Navbar';
import  '../style/formpage.css';
import {Col,Row,Container} from 'react-bootstrap';
import Footer from './Footer';

export default function FormPage() {
    return (
        <div>
            <Navbar/>
            <Container>
            <Row>
            <Col>
            <p className="paraf">지원서 작성하기</p>
            </Col>
            </Row>
            <div className="line"></div>
            </Container>
            <div className="containf">
            <div><p className="parainp1">이름</p></div>
            <input className="input1" type="text" placeholder="지원자 분의 이름을 입력해주세요."/>

            <div><p className="parainp2">전화번호</p></div>
            <input className="input2" type="text" placeholder="전화번호를 입력해주세요."/>

            <div><p className="parainp3">메일</p></div>
            <input className="input3" type="text" placeholder="이메일 주소를 입력해주세요."/>

            <div><p className="parainp4">이력/ 경력기술서</p></div>
            <input className="input4" type="text" placeholder="파일은 최대 00MB까지 업로드하실 수 있습니다."/>
           <div className="btnp1">  <button className="btna">첨부</button></div>

            
            <div><p className="parainp5">포트폴리오  (선택사항)</p></div>
            <input className="input5" type="text" placeholder="파일은 최대 00MB까지 업로드하실 수 있습니다."/>
             <div className="btnp2"> <button className="btnb">첨부</button> </div>

            <div><p className="parainp6">자기소개</p></div>
            <textarea className="input6" id="w3review" name="w3review" rows="4" cols="50"
            placeholder="    자기소개를 자유롭게 기입해주세요. "
            />
          
            

            <div><p className="parainp7">개인정보 수집 및 이용 동의</p></div>
            <textarea className="input7" id="w3review" name="w3review" rows="4" cols="50"
            placeholder=" 1. 목적:
            입사 지원자 본인 확인, 입사 전형의 진행 및 영입 여부 판단
            
            2. 수집 이용 항목:
            (1) 필수 수집 항목: 이름, 연락처, 이메일
            (2) 선택 수집 항목: 학력 사항, 경력 사항, 병역 사항, 외국어 공인점수, 자격 사항
            
            3. 보유기간 :
            (1) 입사 지원 정보: 입사 지원 후부터 2년
            (2) 상시 채용을 위한 인재풀 등록: 등록 후부터 2년
            
            위의 개인정보 수집 항목은 입사 지원에 필수적인 항목입니다. 따라서, 동의를 거부하는 
            경우에는 입사 지원이 어려운 점을 알려드립니다. 제출된 입사 지원 서류는 2년간 보유하지만,
             입사 지원자가 삭제를 원하는 경우, 지체없이 삭제하도록 도와드리겠습니다. 
             삭제에 대한 요청은 pp@pingpong.house로 연락 부탁드립니다."
            />
            </div>
    <div className="btnp3"><button className="btnc">동의하고 제출하기</button></div>
            
    <div className="footerp">  <Footer /> </div>
  
            
        </div>
    )
}
