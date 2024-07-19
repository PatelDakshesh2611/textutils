import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import { useState } from 'react';

function App() {

  const[Text,setText]=useState('');
 
  function upper(){
    let newtext=Text;
    setText(newtext.toUpperCase());
    maker("Converted to uppercase")
    setTimeout(() => {
      maker(null)
    }, 2000);
  }
  
  function change(event){
setText(event.target.value)
  }
  
  function lower(){
    let a=Text
    setText(a.toLowerCase())
    maker("Converted to lowercase")
    setTimeout(() => {
      maker(null)
    }, 2000);
  }

  function clear(){
    setText('')
    maker("Your written data is wiped out")
    setTimeout(() => {
      maker(null)
    }, 2000);
  }

 
  const remove=()=>{
    let newtext=Text.split(/[ ]+/);
    setText(newtext.join(" "))
    maker("Extra spaces is removed")
    setTimeout(() => {
      maker(null)
    }, 2000);
  }
  const [mode,setmode]=useState('light')
  const [button,settmode]=useState('dark')
  const [area,changee]=useState({
    backgroundColor:"white"
  })
  
  
  const togglemode=()=>{
  if(mode=='light'){
    setmode('dark')
    settmode('light')
    document.body.style.backgroundColor="black"
    changee({
      backgroundColor:'black'
    })
    maker("darkmode enabled")
    setTimeout(() => {
      maker(null)
    }, 2000);

  }
  else{
    setmode('light')
    settmode('dark')
    
    document.body.style.backgroundColor="white"
    changee({
      backgroundColor:'white'
    })

    maker("lightmode enabled")
    setTimeout(() => {
      maker(null)
    }, 2000);

  }

  }
  const [alert,maker]=useState(null)
  

  return (
    <>
      <Navbar modes={mode} button={button} togglemode={togglemode}></Navbar>
      <Alert msg={alert}></Alert>
     

     <div className="container">
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${button}`}>Enter text here to convert it into uppercase</label>
  <textarea style={area} onChange={change} className={`form-control area text-${button}`} id="exampleFormControlTextarea1 " rows="8" value={Text}> </textarea>
</div>
<button className="btn btn-primary mx-2" onClick={upper} >
  convert to uppercase
</button>
<button className="btn btn-primary" onClick={lower}>
  convert to lowercase
</button>
<button className="btn btn-primary mx-2" onClick={clear} > 
  Clear</button>
 
  <button onClick={remove} className="btn btn-primary mx-2"> Remove extra white spaces</button>
</div>
<div className={`container my-2 text-${button}`}>
  <h1>Your text summary</h1>
  <p>Text contains {Text.length} characters and {Text.split(" ").length} words and it takes around {(Math.round(Text.split(" ").length)*0.008)} minutes to read</p>
  <h3>Preview of your text</h3>
<p>{Text.length>0?Text:"please enter text above to preview"}</p>


</div>

    </>
  );
}

export default App;
