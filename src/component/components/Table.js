import React from 'react';
import '../style/table.css';
import {Row,Col,Container} from 'react-bootstrap';

export default function Table() {
    return (
     <div >
       <Container>
      
      <Row className="no-gutters">
           <table class="table">

  <tbody >
    <tr className="para1">
    
      <td className="p1 ">분야 <span className="p2 " > 내용</span>     </td>
      <td ></td>
      <td className="p3">@마감일</td>
    </tr>
    <tr>
    
      <td ><span className="para2">진행 중인 공고가 없습니다. </span></td>
     
    </tr>
  
  </tbody>
</table>
</Row>
</Container>
</div>

    )
}
