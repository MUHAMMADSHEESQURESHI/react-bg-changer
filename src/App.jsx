import { useState } from 'react'
import "./App.css"
function App() {
  const [colour, setcolour] = useState("aqua")

  return (
    <>
      <div className='w-100% h-screen flex justify-center  flex-wrap items-baseline-last' style={{ backgroundColor: colour }}>
        <div className='px-4  h-12 w-70% rounded-2xl flex  items-center gap-4' style={{ backgroundColor: "white" }}>
          <button className='w-16  h-8 rounded-md  ' style={{ backgroundColor: "red", color: "white" }}
            onClick={() => setcolour("red")}>
            red</button>
          <button className='w-16  h-8 rounded-md ' style={{ backgroundColor: "green", color: "white" }} onClick={() => setcolour("green")}>green</button>
          <button className='w-16  h-8 rounded-md ' style={{ backgroundColor: "blue", color: "white" }} onClick={() => setcolour("blue")}>blue</button>
          <button className='w-16  h-8 rounded-md ' style={{ backgroundColor: "purple", color: "white" }} onClick={() => setcolour("purple")}>purple</button>
          <button className='w-16  h-8 rounded-md ' style={{ backgroundColor: "black", color: "white" }} onClick={() => setcolour("black")}>black</button>
          <button className='w-16  h-8 rounded-md ' style={{ backgroundColor: "yellow", color: "black" }} onClick={() => setcolour("yellow")}>yellow</button>
         
        </div>
      </div>
    </>

  )
}

export default App
