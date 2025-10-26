import { useState } from "react"

function App() {

  const [color,setcolor]=useState("purple")
  

  return (
    
    <div className="   w-full  h-screen duration-200 " style={{backgroundColor: color}} >

      <div className=" flex flex-wrap justify-center  fixed  bottom-30 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl px-2 py-2 rounded-2xl bg-white">
          <button onClick={()=>{setcolor("red")}} className=" rounded-2xl px-3 py-3  bg-red-600 text-white  border border-solid" >red</button>
          <button onClick={()=>{setcolor("blue")}} className=" rounded-2xl px-3 py-3 bg-blue-600 text-white  border border-solid" >Blue</button>
          <button onClick={()=>{setcolor("green")}} className=" rounded-2xl px-3 py-3 bg-green-600 text-white  border border-solid" >Green</button>
          <button onClick={()=>{setcolor("black")}} className=" rounded-2xl px-3 py-3 bg-black text-white  border border-solid" >Black</button>
          <button onClick={()=>{setcolor("brown")}} className=" rounded-2xl px-3 py-3 bg-amber-950 text-white  border border-solid" >brown</button>
          <button onClick={()=>{setcolor("gray")}} className=" rounded-2xl px-3 py-3 bg-gray-700 text-white  border border-solid" >gray</button>
          <button onClick={()=>{setcolor("orange")}} className=" rounded-2xl px-3 py-3 bg-orange-600 text-white  border border-solid" >Orange</button>
        </div>
        
        
       

      </div>


    </div>
     
  
  )
}

export default App
