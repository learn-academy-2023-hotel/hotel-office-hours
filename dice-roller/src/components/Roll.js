import React from "react"

const Roll = (props) => {
  console.log(props)

  return (
    <div className="square">
      Roll Log
      <h1>{props.lastRoll}</h1>
    </div>
  )
}

export default Roll
