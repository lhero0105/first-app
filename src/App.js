import { useState } from 'react';
import './App.css';

import Contents from './components/Contents';
import Nav from './components/Nav';

function App() {
  // let Name = "이영웅";
  
  // let Name = "홍길동"
  // let b = ""
  return (

    <div className="App">
      {/* <h3 className={Name} style={{color: "orange", backgroundColor: "skyblue"}}>Hello React {Name}</h3> */}
      <Nav />
      {/* <Contents /> */}
      <div className='content'>
        <Contents arrayNum="0" />
        <Contents arrayNum="1" />
        <Contents arrayNum="2" />
        <Contents arrayNum="3" />

        <Contents arrayNum="4" />
        <Contents arrayNum="5" />
        <Contents arrayNum="6" />
        <Contents arrayNum="7" />
      </div>
    </div>
  );
}

export default App;
