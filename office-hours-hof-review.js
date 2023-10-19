// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

//pseudo code:
// input: an array of numbers - [3, 9, 15, 4, 10]
// output: all numbers multiplied by 10 - [30, 90, 150, 40, 100]

// ✅create a function with a parameter: arrayOfNums
const multBy10 = (arrayOfNums) => {
  // iterate through the array with .map
  return arrayOfNums.map(number => {
    // on each iteration mutiply the current value by 10
    return number * 10
  })
}

console.log(multBy10(arr1)) // [ 30, 90, 150, 40, 100 ]

// on each iteration mutiply the current value by 10


// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

//Pseudo code:
//input: string of multiplt words - "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
//output: an array of string with odd number of characters - ["a", "wonderful", "ain't", "passing", "craze"]

//✅create a function with a parameter: manyWordString
const timon = (manyWordString) => {
  // convert string to array (.split(" "))
  // iterate through newly converted array (.filter() - bc we want to only return a portion of the array)
  return manyWordString.split(" ").filter(word => {
    // use .length to determine character amount in each word
    // use modulo to determine if length is odd using evaluation 
    // only return odd lengths
    return word.length % 2 !== 0
  })
}

console.log(timon(pumbaa)) //[ 'a', 'wonderful', "ain't", 'passing', 'craze' ]




// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"

//Pseudo code:
// create a function with parameter: string
const noVowels = (string) => {
  // create variable to store vowels is a string "aeiouAEIOU"
  let vowels = "aeiouAEIOU"
  // convert string to array (.split(""))
  // iterate through array (.filter() - bc we want a subset/portion of array)
  return string.split("").filter(letter => {
    // on each iteration use .includes to determine if current letter is in our vowel string
    // only return letter the are not vowels 
    return !vowels.includes(letter)
    //convert the array back to a string (.join(""))
  }).join("")
}

console.log(noVowels(str)) // jvscrpt s wsm


