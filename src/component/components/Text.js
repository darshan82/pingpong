import React from "react";
import "../style/text.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Text() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <p className="para5">핑퐁 UIUX 디자이너 모집</p>
            <p className="date">2021.01.01까지</p>
          </Col>
        </Row>
        <div className="linetxt"></div>

        <div className="">
          <Col md={12} sm={12}>
            <ul class="dashed ">
              <li>상세내용</li>
              <li>핑퐁 UIUX 디자이너 모집 </li>
              <br />

              <li>모집대상</li>
              <li>
                - UI/UX 디자이너 - 스타트업의 앱기획 및 디자인에 관심있는
                누구나  
              </li>
              <br />

              <li>모집인원</li>
              <li>- 0명 </li>
              <br />
              <li>담당업무</li>
              <li>- 서비스 어플리케이션 UI/GUI 디자인</li>
              <li>- UI 디자인 기획 및 가이드 수립</li>
              <li>
                - 디자인 트렌드 리서치 및 사용 환경을 고려한 개선점 도출  
              </li>
              <br />
              <li>근무시간 및 형태 </li>
              <li>- 근무기간: 3개월</li>
              <li>- 근무요일: 요일협의 (주 2일)</li>
              <li>- 근무시간: 시간협의(주 14시간)</li>
              <li>- 복리후생: 도서비 지원, 장비 지원</li>
              <li>
                - 근무지: 서울시 종로구 삼봉로 81, 두산위브파빌리온 826호 
              </li>
              <br />
              <li>지원조건</li>
              <li>- 성별: 성별무관</li>
              <li>- 연령: 연령무관</li>
              <li>- 학력: 학력무관</li>
              <li>- 경력: 경력무관 </li>

              <br />
              <li>지원방법</li>
              <li>
                - pp@pingpong.house 메일로 간단한 자기소개 (1 page 이내) 및
                포트폴리오 (필수) 첨부해주세요.{" "}
              </li>
              <br />
              <li>기타 어필하실 내용 혹은 자료 등도 첨부 가능합니다.  </li>
            </ul>
            <div style={{marginTop:20}} className="d-flex justify-content-center">
            <Button  variant="secondary" className="btn1 " style={{backgroundColor:" rgba(112, 112, 112, 0.5)"}}>목록</Button>
              <Button variant="secondary" className="btn2 ">지원하기</Button></div>
          </Col>
        </div>

        <div className="footertxt">
          <Footer />
        </div>
      </Container>
    </div>
  );
}
