import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#262C2A';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextMod" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />} />
        </Routes>
      </div>
    </Router>  
    </>

  );
}

export default App;
