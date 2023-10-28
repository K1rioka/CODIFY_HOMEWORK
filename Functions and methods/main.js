// // Легкое задание (declaration function):
// function concatStrings(str, str2){
// let res = str.concat(str2)
// return(res)
// }
// let string = prompt('Введите текст')
// let string2 = prompt('Введите текст')
// var endresult = concatStrings(string, string2)
// alert(endresult)

// // Среднее задание (expression function):
// function replaceAll(inputStr, substr, replacement) {
//     let resultString = inputStr.replaceAll(substr, replacement);
//     return resultString;
// }
// let originalString = prompt("Введите текст");
// let substringToReplace = prompt("Введите текст");
// let replacementString = prompt("Введите текст");
// let editedStr = replaceAll(originalString, substringToReplace, replacementString);
// alert(editedStr);

// function stringToLowerCase(inputStr) {
//     let lowerCaseStr = inputStr.toLowerCase();
//     return lowerCaseStr;
// }

// let originalString = prompt("Введите текст");
// let lowerCaseString = stringToLowerCase(originalString);
// alert(lowerCaseString);

// // Среднее задание (expression function):
// function containsSubstring(inputString, substring) {
//     return inputString.includes(substring);
// }

// let mainString = prompt("Введите текст");
// let subString = prompt("Введите текст");

// let containsSubString = containsSubstring(mainString, subString);
// if (containsSubString) {
//     alert("Подстрока найдена в строке!");
// } else {
//     alert("Подстрока не найдена в строке.");
// }


// // Легкое задание (arrow function):
// const getIndexOf = (inputString, substring) => {
//     return inputString.indexOf(substring);
// }

// let mainString = prompt("Введите текст");
// let subString = prompt("Введите текст");

// let index = getIndexOf(mainString, subString);
// alert("Индекс первого вхождения подстроки в строку: " + index);

// // Легкое задание (declaration function):
// function splitString(inputString) {
//     let wordsArray = inputString.split(" ");
//     return wordsArray;
// }

// let sentence =prompt("Введите текст");
// let words = splitString(sentence);
// console.log(words);

// // Среднее задание (expression function):
// function extractSubstring(inputString, startIndex, endIndex) {
//     let extractedSubstring = inputString.slice(startIndex, endIndex);
//     return extractedSubstring;
// }

// let originalString = prompt("Введите текст");
// let startIndex = 8;
// let endIndex = 12;

// let extractedSubString = extractSubstring(originalString, startIndex, endIndex);
// alert(extractedSubString);


// // Задания для чисел:
// // Среднее задание (declaration function):
// function convertToString(number) {
//     let stringNumber = number.toString();
//     return stringNumber;
// }

// let num = +prompt('Введите число');
// let stringNum = convertToString(num);
// alert(stringNum);

// // Легкое задание (expression function):
// function convertToFloat(inputString) {
//     let floatNumber = parseFloat(inputString);
//     return floatNumber;
// }

// let stringValue = +prompt('Введите число с точкой');
// let floatValue = convertToFloat(stringValue);
// alert(floatValue);

// // Среднее задание (arrow function):
// const sumNumbers = (num1, num2) => {
//     let sum = num1 + num2;
//     return sum;
// }

// let number1 = +prompt('Введите число');
// let number2 = +prompt('Введите число');
// let result = sumNumbers(number1, number2);
// alert(result);

// // Легкое задание (declaration function):
// function getFixedNumber(number) {
//     let fixedNumber = number.toFixed(2);
//     return fixedNumber;
// }

// let originalNumber = +prompt('Введите число с точкой');
// let formattedNumber = getFixedNumber(originalNumber);
// alert(formattedNumber); 

// // Среднее задание (expression function):
// function convertToInt(inputString) {
//     let intValue = parseInt(inputString);
//     return intValue;
// }

// let stringValue = prompt('Введите число');
// let intValue = convertToInt(stringValue);
// console.log(intValue);

// // Легкое задание (declaration function):
// function addNumbers(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let number1 = +prompt('Введите число');
// let number2 = +prompt('Введите число');
// let result = addNumbers(number1, number2);
// console.log(result);

// // Среднее задание (expression function):
// function convertToFloat(inputString) {
//     let floatValue = parseFloat(inputString);
//     return floatValue;
// }

// let stringValue = +prompt('Введите число с точкой');
// let floatValue = convertToFloat(stringValue);
// alert(floatValue);

// // Задания для массивов:
// // Легкое задание:
// // Создаем массив с несколькими фруктами
// let fruits = ["яблоко", "банан", "апельсин"];
// fruits.push("груша");
// fruits.pop();
// alert(fruits);

// // Среднее задание:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.slice().filter(num => num % 2 === 0);
// let evenNumbersString = evenNumbers.join(',');
// alert(evenNumbersString);

// // Легкое задание:
// let colors = ["Красный", "Синий", "Зеленый"];
// colors.unshift("Фиолетовый");
// colors.shift();
// alert(colors); 

// // Среднее задание:
// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6];
// let mergedArray = firstArray.concat(secondArray);
// let targetValue = 3;
// let includesTargetValue = mergedArray.includes(targetValue);
// alert(mergedArray);
// alert(`mergedArray содержит ${targetValue}: ${includesTargetValue}`);

// // Легкое задание:
// let animals = ["кошка", "собака", "слон"];
// animals.push("тигр");
// let newAnimal = "тигр";
// let indexOfNewAnimal = animals.indexOf(newAnimal);
// console.log(animals);
// console.log(`Индекс животного "${newAnimal}" в массиве: ${indexOfNewAnimal}`);

// // Среднее задание:
// let numbers = [1, 2, 3, 4, 5];

// let slicedArray = numbers.slice(0, 2);
// slicedArray.reverse();
// let resultString = slicedArray.toString();
// console.log(resultString);

// // Легкое задание:
// let fruits = ["яблоко", "банан", "апельсин"];
// fruits.unshift("груша");
// fruits.shift();
// alert(fruits);

// // Среднее задание:
// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6];
// let mergedArray = [firstArray, secondArray].flat();
// let resultString = mergedArray.join(',');
// console.log(resultString);

// // ДОП ЗАДАНИЯ:
// // Задания для строк:
// // Сложное задание (declaration function):
// function findUniqueWords(inputString) {
//     let words = inputString.toLowerCase().split(' ');
//     let uniqueWords = {};
//     words.forEach(word => {
//         if (word.trim() !== "") {
//             uniqueWords[word] = true;
//         }
//     });
//     let uniqueWordsArray = Object.keys(uniqueWords);
    
//     return uniqueWordsArray;
// }
// let inputString = prompt('Введите длинный текст с запятыми и пробелами')
// let uniqueWords = findUniqueWords(inputString);
// console.log(uniqueWords);

// // Сложное задание (expression function):
// function replaceVowelsWithAsterisk(inputString) {
//     let characters = inputString.split('');
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     for (let i = 0; i < characters.length; i++) {
//         if (vowels.includes(characters[i])) {
//             characters[i] = '*';
//         }
//     }
//     return characters.join('');
// }

// let inputString = prompt('Введите текст на англ')
// let modifiedString = replaceVowelsWithAsterisk(inputString);
// alert(modifiedString);

// // Задания для чисел:
// // Сложное задание (declaration function):
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     let average = sum / numbers.length;
//     return average;
// }

// let numbers = [1, 2, 3, 4, 5];
// let average = calculateAverage(numbers);
// console.log(average);

// // Сложное задание (expression function):
// function convertStringToNumbers(inputString) {
//     let numbersArray = inputString.split(',');
//     let convertedNumbers = [];
//     for (let i = 0; i < numbersArray.length; i++) {
//         let number = parseInt(numbersArray[i].trim(), 10);
//         if (!isNaN(number)) {
//             convertedNumbers.push(number);
//         }
//     }
//     return convertedNumbers;
// }

// let inputString = "1, 2, 3, 4, 5";
// let numbersArray = convertStringToNumbers(inputString);
// console.log(numbersArray);

// // Задания для массивов:
// // Сложное задание:
// function reverseWordsInSentence(sentence) {
//     let words = sentence.split(' ');
//     let reversedWords = words.reverse();
//     let reversedSentence = reversedWords.join(' ');
//     return reversedSentence;
// }

// let inputSentence = prompt('Введите предложение')
// let reversedSentence = reverseWordsInSentence(inputSentence);
// console.log(reversedSentence);

// // Сложное задание:
// function filterUniqueNumbers(numbers) {
//     let uniqueNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (uniqueNumbers.indexOf(numbers[i]) === -1) {
//             uniqueNumbers.push(numbers[i]);
//         }
//     }
//     return uniqueNumbers;
// }
// let numbers = [1, 2, 3, 2, 4, 5, 1, 6];
// let uniqueNumbers = filterUniqueNumbers(numbers);
// console.log(uniqueNumbers);