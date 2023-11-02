import React from "react"

const Dice = (props) => {
  console.log(props)
  // props is an object with the values passed as k-v pairs
  // {currentDice: 1, diceRoll: ƒ}

  return (
    <div className="square" onClick={props.diceRoll}>
      {props.currentDice}
    </div>
  )
}

export default Dice
