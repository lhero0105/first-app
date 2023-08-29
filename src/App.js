import { useState } from 'react';
import './App.css';

// import Contents from './components/Contents';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Notpage from './pages/Notpage';
// import Styled from './components/Styled';

function App() {
  // let Name = "이영웅";
  
  // let Name = "홍길동"
  // let b = ""
  return (
      <>
      <Nav />
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/portfolio" element = {<Portfolio/>}/>
        <Route path="/*" element = {<Notpage/>}/>

      </Routes>
      </>

    // <div className="App">
    //   <div className='content'>
        
    //     <Contents arrayNum="0" />
    //     <Contents arrayNum="1" />
    //     <Contents arrayNum="2" />
    //     <Contents arrayNum="3" />

    //     <Contents arrayNum="4" />
    //     <Contents arrayNum="5" />
    //     <Contents arrayNum="6" />
    //     <Contents arrayNum="7" />
    //   </div>
    //   <Styled />
    // </div>
  );
}

export default App;
