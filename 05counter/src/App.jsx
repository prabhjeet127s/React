import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setcounter]=useState(15);



  let Addvalue=()=>{
    console.log("number is" ,Math.random());
    setcounter(counter+1);

  }
  let Removevalue =()=>{
    if(counter>0){
    setcounter(counter-1);
    }
  }

  return (
    <>

    <h1>Chai Aur Code</h1>
    <p>Counter Number:{counter}</p>

    <button
    onClick={Addvalue}
    >Add value</button>

    <br />

    <button
    onClick={Removevalue}
    
    >remove value</button>

    
    </>
  )
}

export default App
