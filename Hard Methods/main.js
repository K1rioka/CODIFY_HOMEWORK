// // map:
// function increaseByTen(numbers) {
//     let result = numbers.map(function(number) {
//         return number + 10;
//     });
//     return result;
// }
// let inputArray = [1, 2, 3, 4, 5];
// let outputArray = increaseByTen(inputArray);
// console.log(outputArray);

// // filter:
// function filterWordsByLength(words) {
//     let filteredWords = words.filter(function(word) {
//         return word.length > 5;
//     });
//     return filteredWords;
// }
// let wordsArray = ["apple", "banana", "orange", "kiwi", "pineapple", "grape"];
// let filteredWordsArray = filterWordsByLength(wordsArray);
// console.log(filteredWordsArray);

// // forEach:
// function printSquares(numbers) {
//     numbers.forEach(function(number) {
//         console.log(number * number);
//     });
// }
// let numbersArray = [1, 2, 3, 4, 5];
// printSquares(numbersArray);

// // reduce:
// function sumNumbers(numbers) {
//     let sum = numbers.reduce(function(acc, number) {
//         return acc + number;
//     }, 0);
//     return sum;
// }
// let numbersArray = [1, 2, 3, 4, 5];
// let totalSum = sumNumbers(numbersArray);
// console.log(totalSum);

// // some:
// function hasEvenNumber(numbers) {
//     return numbers.some(function(number) {
//         return number % 2 === 0;
//     });
// }
// let numbersArray = [1, 3, 5, 7, 8, 9];
// let hasEven = hasEvenNumber(numbersArray);
// console.log(hasEven);

// // every:
// function areAllPositive(numbers) {
//     return numbers.every(function(number) {
//         return number > 0;
//     });
// }
// let positiveNumbers = [1, 3, 5, 7, 9];
// let mixedNumbers = [1, -3, 5, -7, 9];
// console.log(areAllPositive(positiveNumbers));
// console.log(areAllPositive(mixedNumbers));

// // find:
// function findFirstEvenNumber(numbers) {
//     let evenNumber = numbers.find(function(number) {
//         return number % 2 === 0;
//     });
//     return evenNumber !== undefined ? evenNumber : null;
// }
// let numbersArray = [1, 3, 5, 7, 8, 9];
// let firstEven = findFirstEvenNumber(numbersArray);
// console.log(firstEven);

// // map:
// function convertToUpperCase(strings) {
//     let uppercaseStrings = strings.map(function(string) {
//         return string.toUpperCase();
//     });
//     return uppercaseStrings;
// }
// let stringsArray = ["apple", "banana", "orange", "kiwi"];
// let uppercaseArray = convertToUpperCase(stringsArray);
// console.log(uppercaseArray);

// // filter: 
// function filterPositiveNumbers(numbers) {
//     let positiveNumbers = numbers.filter(function(number) {
//         return number > 0;
//     });
//     return positiveNumbers;
// }
// let numbersArray = [1, -2, 3, -4, 5];
// let positiveNumbersArray = filterPositiveNumbers(numbersArray);
// console.log(positiveNumbersArray);

// // forEach:
// function greetNames(names) {
//     names.forEach(function(name) {
//         console.log(`Привет, ${name}!`);
//     });
// }

// let namesArray = ["Надира", "Айдар", "Байсал"];
// greetNames(namesArray);

// // reduce:
// function multiplyNumbers(numbers) {
//     let product = numbers.reduce(function(acc, number) {
//         return acc * number;
//     }, 1);
//     return product;
// }
// let numbersArray = [1, 2, 3, 4, 5];
// let result = multiplyNumbers(numbersArray);
// console.log(result);

// // some: 
// function LongerThanTenCharacters(strings) {
//     return strings.some(function(string) {
//         return string.length > 10;
//     });
// }
// let stringsArray = ["яблоко", "банан", "апельсин", "киви", "грейпфрут"];
// let hasLongString = LongerThanTenCharacters(stringsArray);
// console.log(hasLongString);

// // find: 
// function findFirstNumberDivisibleBySeven(numbers) {
//     let divisibleBySeven = numbers.find(function(number) {
//         return number % 7 === 0;
//     });
//     return divisibleBySeven !== undefined ? divisibleBySeven : null;
// }
// let numbersArray = [3, 14, 21, 35, 42, 56];
// let firstNumberDivisibleBySeven = findFirstNumberDivisibleBySeven(numbersArray);
// console.log(firstNumberDivisibleBySeven);
// let anotherNumbersArray = [2, 4, 6, 8, 10];
// let firstDivisibleNumberInAnotherArray = findFirstNumberDivisibleBySeven(anotherNumbersArray);
// console.log(firstDivisibleNumberInAnotherArray);
