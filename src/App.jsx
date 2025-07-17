
import { useState } from 'react';
import './App.css';
import About from './About';
import Navbar from './Navbar';
import Alert from './Alert';
import Home from './Home';
import { Route, Routes } from 'react-router';


   function App() {
    const [alert, setalert] = useState(null)
    const [text, setText] = useState(""); // 🔑 Shared text state
    const [searchTerm, setSearchTerm] = useState("");
    
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
 
<Navbar mode={mode} toggleMode={toggleMode} onSearch={(term) => {
          if (!term) return;
          setSearchTerm(term);
          if (!text.toLowerCase().includes(term.toLowerCase())) {
            showAlert("Result not found", "danger");
          }
        }} />
<Alert alert={alert}/>
<Routes>
<Route path='/' element={<Home showAlert={showAlert} text={text}
              setText={setText}
              searchTerm={searchTerm}/>}/>
<Route path='/about' element={<About/>}/>
</Routes>
</>
  );
}
export default App;
