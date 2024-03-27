/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 25));
  
  /*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (x, y, z) => {
if (x >= y && x >= z){
    return x
} else if (y >= x && y >= z) {
    return y
} else {
    return z
}
} 
console.log('Exercise 2 Result:', maxOfThree (105, 1, 500));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/
const isCharAVowel = (char) => {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    return true
} else {
    return false
}
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/
const sumArray = (sumArrayInput) => {
    let sum = 0
    for (let i = 0; i < sumArrayInput.length; i++) {
       sum = sum + sumArrayInput[i]
    }
    return sum
}
console.log('Exercise 4 Result:', sumArray([3,4,5,20]));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (multiplyArrayInput) => {
    let product = 1
    for (let i = 0; i < multiplyArrayInput.length; i++) {
       product = product * multiplyArrayInput[i]
    }
    return product
}
console.log('Exercise 5 Result:', multiplyArray([1,2,5,10]));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

let updatedString = ""
const reverseString = (reverseStringParameter) => {
    for (let i = reverseStringParameter.length - 1; i >= 0; i = i - 1) {
        updatedString = updatedString + reverseStringParameter[i]
    }
    return updatedString
}

console.log('Exercise 6 Result:', reverseString("hello this is some text"))

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/


const longestStringInArray = (arrayInput) => {
    let lengthOfLongestString = ""
    for (let i = 0; i < arrayInput.length; i++) {
           if (arrayInput[i].length > lengthOfLongestString.length){
            lengthOfLongestString = arrayInput[i]}
        }   
        return lengthOfLongestString.length
    }
console.log('Exercise 7 Result:', longestStringInArray(["hello", "hi", "howdy", "hi"]));


/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

let stringsLongerThanArrayResult = []
const stringsLongerThan = (stringsLongerThanArray, minimumStringLength) => {
    for (let i = 0; i < stringsLongerThanArray.length; i++) {
        if (stringsLongerThanArray[i].length > minimumStringLength){
            stringsLongerThanArrayResult.push(stringsLongerThanArray[i])
        }
    }
    return stringsLongerThanArrayResult
}

console.log('Exercise 8 Result:', stringsLongerThan(["hello", "hi", "salutation"], 1));
