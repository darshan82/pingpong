import logo from './logo.svg';
import './App.css';
import Navbar from './component/components/Navbar';
import HeroSection from './component/components/HeroSection';
import Footer from './component/components/Footer';
import Partner from './component/components/Partner';
import Midle from './component/components/Midle';
import Form from './component/components/Form';
import Table from './component/components/Table';
import Arow from './component/components/Arow';
import Text from './component/components/Text';
import MydModalWithGrid from './component/components/Modal';
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
