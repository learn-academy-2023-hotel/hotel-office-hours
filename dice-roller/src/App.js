import { useState } from "react"
import Dice from "./components/Dice"
import Roll from "./components/Roll"
import "./App.css"

const App = () => {
  const [currentDice, setCurrentDice] = useState("4")
  // lastRoll is going to hold the log of rolls in an array
  const [lastRoll, setLastRoll] = useState([])

  // array of possible state value (rolls)
  const dice = ["1", "2", "3", "4", "5", "6"]

  // choose random number from dice array and update state

  const diceRoll = () => {
    // calculate random num
    let currentRoll = Math.floor(Math.random() * dice.length)
    // update state with current number
    setCurrentDice(currentRoll)
    // update log with current roll - adding it to the log
    // spread operator copies the current array, then adds whatever value you want after the comma
    setLastRoll([...lastRoll, currentRoll])
  }

  return (
    <>
      {/* use props to send the currentDice over to the Dice component */}
      <Dice currentDice={currentDice} diceRoll={diceRoll} />
      <Roll lastRoll={lastRoll} />
    </>
  )
}

export default App
