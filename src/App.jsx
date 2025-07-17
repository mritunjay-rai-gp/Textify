
import { useState } from 'react';
import './App.css';
import About from './About';
import Navbar from './Navbar';
import Alert from './Alert';
import Home from './Home';
import { Route, Routes } from 'react-router';


   function App() {
    const [alert, setalert] = useState(null)
    function showAlert(message,type){
      setalert({
      msg:message,
      type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
    }
  const [mode, setMode] = useState('light');

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
 
<Navbar mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<Routes>
<Route path='/' element={<Home showAlert={showAlert} />}/>
<Route path='/about' element={<About/>}/>
</Routes>
</>
  );
}
export default App;
