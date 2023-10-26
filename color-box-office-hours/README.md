 # User Stories
- ✅ As a user, I can see a square box on the screen with a black border and a white background.

  ```javascript
  //we create a new component named Box and use a div to apply CSS to
  const Box = () => {
    return(
      <>
        <div className="color-box"></div>
      </>
    )
  }
  ```
  ```css
  /* we created the box in our CSS file using the border, width, and height */
  .color-box{
    border: 2px solid black;
    width: 200px;
    height: 200px;
  }
  ```

- ✅As a user, I can see the default color name "white" inside the box.

  ```javascript
  //to see the default color name we added innerHTML to our div tags 
  const Box = () => {
    return(
      <>
        <div className="color-box">white</div>
      </>
    )
  }
  ```

- ✅As a user, every time I click on the box the name of a different color appears. Possible color names: red, orange, yellow, green, blue, purple, pink

  ```javascript


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
        //instead of having the string "white" here now we can call on the state variable that hold the color name
        // we also need to give the div the ablilty to be clicked so we use the onClick attribute. That attributes take a behavior and that behavior is our colorChanger function 
          <div className="color-box" onClick={colorChanger}>{currentColor}</div>
        </>
      )
  }
  ```

- ✅As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
  ```jsx 
  //in order to add background color to our box we need to use inline styling. Since our color names are stored as state we can use state to give our boxes a ground color
        <>
          <div className="color-box" onClick={colorChanger} style={{backgroundColor: currentColor}}>{currentColor}</div>
        </>

  ```

- ✅As a user, I can see many boxes on the page all acting independently of one another.
```jsx
  // because components are functions and functions are reusable we can just make more Box component calls in App.js to see mutiple boxes 

  const App = () => {

    return (
      <>
        <h1> Office Hours is Fun!</h1>
        <Box />
        <Box />
        <Box />
        <Box />
      </>
    )
  }
  ```
---
---
# 🏔 Stretch Goals
✅As a user, I can start with no boxes on the screen.
✅As a user, I can see a button to add a box.
As a user, I can see a button to remove a box.
As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes.
As a user, every time I click the remove button, I can remove the last box in the series.