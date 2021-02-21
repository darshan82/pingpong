import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Footer from './component/Footer';
import Partner from './component/Partner';
import Midle from './component/Midle';
import Form from './component/Form';
import Table from './component/Table';
import Arow from './component/Arow';
import Text from './component/Text';
import MydModalWithGrid from './component/Modal';
import { useState } from 'react';


function App() {
  const [modalShow,setModalShow]= useState(false)
  const handleClick=()=>{
    setModalShow(true)
  }
  return (
    <div>


  
<Navbar handleClick={handleClick}/>
<MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)}/>

<HeroSection/> 
<Midle/>
<Form/>
<Table/>
<Arow/>
<Partner/>
<Footer/>



    </div>
  );
}

export default App;
