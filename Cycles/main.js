// Задание 1
// for(let num = 0; num<=50; num++){
//     let prost = true; 
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             prost = false;
//             break;
//         }
//     }

//     if (prost) {
//         console.log(num);
//     }
// }

// Задание 2
// let promptNumber = parseInt(prompt())

// for (let i = 1; i <= promptNumber; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
// }

// Задание 3
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Задание 4
// let vvedennoeChislo = parseInt(prompt("Введите число:"));
// let sum = 0;

// for (let i = 1; i <= vvedennoeChislo; i++) {
//     sum += i;
// }

// console.log("Сумма всех чисел от 1 до " + vvedennoeChislo + " включительно: " + sum);

// Задание 5
// for(i=1; i<=10; i++){
//     console.log(i*7)
// }

// Задание 6
// let vvedennoeChislo = parseInt(prompt("Введите число:"));
// let sum = 0
// for(let i = 1; i<= vvedennoeChislo; i++){
//     sum = sum + i
// }
// console.log(sum);

// Задание 7
// const heightNum = parseInt(prompt('Введите высоту пирамиды:'))
// let pyramid = ""

// for (let i = 1; i <= heightNum; i++){
//     for (let j = 1; j <= heightNum - i; j++) {
//     pyramid += " ";
// }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         pyramid += "*";
//     }
//     pyramid += "\n";
// }
// console.log(pyramid);