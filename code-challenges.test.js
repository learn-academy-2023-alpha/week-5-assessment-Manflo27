// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("newCode", () => {
    it("returns a string with a coded message", () => {
        console.log(newCode(secretCodeWord1))
      expect(newCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
     expect(newCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(newCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    
    })
  })
//   ReferenceError: newCode is not defined
// Psedocode 1. Create a function called newCode
//           2. Input is a function that takes in a string as a argument
//           3. Use replace to change the value from "a" to 4, "eE" to 3, "i" to 1 and "o" to 0.
//           4. Use "g" to have the replacements used globally instead of returning it the first occurence.
//           5. Return a coded message that converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.



const newCode = (str) => {
       return str.replace(/a/gi,4).replace(/[eE]/gi,3).replace(/i/gi,1).replace(/o/gi,0)}


       
     
    


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// Psedocode 1. Create a function called myLetter
//           2. Input is a function that takes in an array and a letter
//           3. Use filter to iterate through the array to return the array that only has the letters a and e.
//           4. return the value lowercased that also includes the letter "a","e"
//           5. Returns an array of all the words containing that particular letter.


const myLetter = (array,letter) => {
  return array.filter(value =>  {
  return value.toLowerCase().includes(letter)})}



const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("myLetter", () => {
    it("returns an array of all the words containing that particular letter.", () => {
      console.log(myLetter(fruitArray))
      expect(myLetter(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(myLetter(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
//   ReferenceError: myLetter is not defined

// const myLetter = (arr) => {
// return arr.filter(value => {
// if( value.includes(letterA)){
//   return value }
//  else if (value.includes(letterE)){
//   return value
//  } } )}






   






  

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

describe("fullHouse", () => {
  it("returns a string with a coded message", () => {
    console.log(fullHouse(hand1))
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
    
  })
})
// Psedocode 1. Create a function called fullHouse
//           2. Input is a function that takes in an array of 5 numbers
//           3. Use .sort to return the array in order by using (a,b) => a-b which is 1....10 instead of 10...1
//           4. Conditional statement that checks whether the index of the array is equal to each index so the output ia a fullhouse. 
 //             Need an if and else if to check for hand1 and hand 4 to return true. 
//           5. Returns whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

const fullHouse = (array) => {
  let card = array.sort((a,b) => a-b)
  if (card[0] === card[1] && card[1] === card[2] && card[3] === card[4] ) {
  return true; }
  else if (card[0] === card[1] && card[2] === card[3] && card[2] === card[4]){
   return true;
  }
  else {
  return false;} }

   
   


  

  
  
  // return array.map(value => {
  // if ((value[0] === 5 && value[1] === 5 && value[2] === 5) || (value[3] === 3 && value[4] ===3)){
  //   return true; 
  // }
  // else 
  // return false;
  // }) }


  // f((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
  //   return true;
  // }
  // return false;
  // .sort array


//   Test Suites: 1 passed, 1 total
//   Tests:       3 passed, 3 total