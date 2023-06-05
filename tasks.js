//1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelcius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius
}
console.log(fahrenheitToCelcius(68));
//2. Create a function that will calculate the average of numbers in an array.
function averNumbers(arr) {
    let sum = 0
    for (let i = 0;i < arr.length;i++) {
        sum +=arr[i];
    }
    return sum / arr.length
}
averNumbers([1,2,4,5,10])
//3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function divisNumbers(n,x,y) {
    if (n <= 0) {
        return false
    }
    if (n % x !== 0 || n % y !==0) {
        return false
    }
    return true
}
divisNumbers(5,2,3)
//4.  Create a function that will output the first 100 prime numbers.
function outputPrime(count) {
    let output = [];
    
// TO CHECK PRIMALITY
    function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2;i <= Math.sqrt(number);i++) {
        if (number % i === 0) {
            return false
        } 
    }
            return true
}
    for (let i = 0;output.length < count; i++) {
        if (isPrime(i)) {
            output.push(i);
        }
    }
    return output.join(",")
}
console.log(outputPrime(100))
//5. Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2;i <= Math.sqrt(number);i++) {
        if (number % i === 0) {
            return false
        } 
    }
            return true
}
console.log(isPrime(10))

//6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function diversNumbers(arr) {
    const newArr = [...arr]
    const myArray = newArr.filter(num => 'number' === typeof num && num > 0)
    return myArray;
}
console.log(diversNumbers([1,2,5, "is", true]));

//7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

function fizzBuzzPrint(count) {
    let output = []
    function fizz(num) {
            if (0 === num % 3) {
               return "Fizz"
            }
        return ""
    }
    function buzz(num) {
            if (0 === num % 5) {
                return "buzz"
            }
        return ""
    }
    for (let i = 1;output.length < count; i++) {
        let currentOutput = fizz(i) + buzz(i);
    if (currentOutput === "") {
      output.push(i);
    } else {
      output.push(currentOutput);
    }
    }
    return output
}
console.log(fizzBuzzPrint(100));

//8. The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
//It must start with a hash symbol, #.
//Ignore all spaces in the input.
//All words must have their first letter capitalized.
//If the final result is going to be longer than 140 characters, it should return false.
//If the input or result is an empty string, it should return false.
function hashtagGenerator(...input) {
    
    if (input.join("").length > 140 || input === "") {
        return false
    } 
    let field = ""
    for (let i = 0;i < input.length; i++) {
        for (let j = 0;j <input[i].length;j++) {
        if (/\s+/.test(input[i][j])) {
            input[i] = input[i].substring(0,j) + input[i].substring(j+1)
        }
    }
    input[i] = input[i][0].toUpperCase() + input[i].substring(1)
        field += "#" + input[i].trim() + "";
    }
    return field
}
console.log(hashtagGenerator("capcut", "strign"))