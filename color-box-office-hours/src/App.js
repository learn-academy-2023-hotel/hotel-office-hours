import React, {useState} from "react"
import Box from "./component/Box"
import "./App.css"

const App = () => {

  const [boxes, setBoxes] = useState([])

  const addBoxes = () => {
    setBoxes(boxes.concat(<Box />))
  }
  

  return (
    <>
      <h1> Office Hours is Fun</h1>
      <button onClick={addBoxes}>Add a box</button>
      {boxes.map((box, index) => {
        return <div key={index}>{box}</div>
      })}
    </>
  )
}

export default App