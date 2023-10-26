import React, { useState } from "react"
const Box = () => {

// because we eventually need the color name to change (and therefore change how to component looks(renders)) we need to hold it in a variable. We are going to store the color name in state since it will effect how the Box component renders 
const [currentColor, setCurrentColor] = useState("white")

// next, we need to way to store our other colors so we can do that by storing them in an array 
const colors = ["red", "orange", "blue", "green", "purple", "pink", "magenta"]

 //now that we have our default (initial) color name stored in state and we have a way to update it (using our setter function) we now need to create some behavior that will be performed when we click our box. To do this we will create a function 
const colorChanger = () => {
   // get a random number that will be one of the indexes on the colors array
  let randomIndex = Math.floor(Math.random() * colors.length)
  // update the state variable's value to be one of the colors in the array at the random index
  setCurrentColor(colors[randomIndex])
}



  return(
    <>
    {/* instead of having the string "white" here now we can call on the state variable that hold the color name */}
    {/* we also need to give the div the ablilty to be clicked so we use the onClick attribute. That attributes take a behavior and that behavior is our colorChanger function  */}
    {/* in order to add background color to our box we need to use inline styling. Since our color names are stored as state we can use state to give our boxes a ground color */}
      <div className="color-box" style={{backgroundColor: currentColor}}onClick={colorChanger}>{currentColor}</div>
    </>
  )
}

export default Box