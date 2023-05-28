import React from 'react';
import './App.css';
import {Header} from './Header';
import Footer from './Components/Footer';
import { Calculator } from './Components/Calculator';

function App() {
  let message = "Hello"

  return (
    <div>
      {/* <Header/> */}
 
    {/* <Header message = "Hello"/> */}
    <Calculator/>

    
    </div>

  );


}

export default App;
