// // Задание 1
// let age = 19

// if (age >= 18){
//     alert('Совершеннолетний')
// } 
// else {
//     alert('Несовершеннолетний')
// }

// // Задание 2
// let isStudent = true

// if (isStudent === true){
//     alert('Студент')
// } else {
//     alert('Не студент')
// }

//  // Задание 3
// let num1 = 10
// let num2 = 11

// alert(num1 + num2)

// // Задание 4
// let day = prompt("Введите число от 1 до 7:")

// day = parseInt(day)

// switch (day){
//     case 1:
//         alert('Понедельник');
//         break;
//     case 2:
//         alert('Вторник');
//         break;
//     case 3:
//         alert('Среда');
//         break;
//     case 4:
//         alert('Четверг');
//         break;
//     case 5:
//         alert('Пятница');
//         break;
//     case 6:
//         alert('Суббота');
//         break;
//     case 7:
//         alert('Воскресенье');
//         break;
//     default:
//         alert('Введите номер дня недели от 1 до 7')
// }

// // Задание 5
// let input_temperature = prompt('Введите температуру в Цельсии:');
// temperature = parseInt(input_temperature);

// if (temperature >= -5 && temperature < 15) {
//     alert("Холодно");
// } else if (temperature >= 15 && temperature < 30) {
//     alert("Тепло");
// } else if (temperature >= 30 && temperature <= 50) {
//     alert("Горячо");
// } else {
//     alert("Число не соответствует условиям: от -5 до 50.");
// }

// // Задание 6
// let score = parseInt(prompt('"Введите ваш балл от 0 до 100:"'));

// let result = (score >=60)? 'Сдал' : "Не сдал";
// alert(result);

// // Задание 7
// let num = parseInt(prompt('Введите число'));
// if(num % 2 === 0){
//     alert(num + " - четное число");
// } else {
//     alert(num + " - нечетное число");
// }

// // Задание 8
// let language = prompt('Введите язык программирования:')

// if(language =='JavaScript'){
//     alert('Поддерживается')
// } else{
//     alert('Неподдерживается')
// }

// // Задание 9
// let userRole = prompt('Введите свой статус пользователя:')

// if(userRole == 'admin' || 'Admin' || 'админ' || 'Админ'){
//     alert('Доступ разрешен')
// } else if(userRole =='editor' || 'Editor'|| 'редактор' || 'Редактор'){
//     alert('Доступ ограничен')
// } else{
//     alert('Доступ запрещен')
// }

// //Задание 10
// let a = parseInt(prompt('Введите первое число:'))
// let b = parseInt(prompt('Введите второе число:'))
// let c = parseInt(prompt('Введите третье число:'))
// let d = parseInt('')

// if(a>=b && a>=c){
//     d=a
//     alert("Наибольшее число: " + d)
// } else if(b>=a && b>=c){
//     d=b
//     alert("Наибольшее число: " + d)
// } else if(c>=a && c>=b){
//     d=c
//     alert("Наибольшее число: " + d)
// }
// else{
//     alert('...')
// }

// //Задание 11
// let fruit = prompt('Введите фрукт:')

// switch(fruit){
//     case 'Яблоко':
//         alert('Красное');
//         break;
//     case 'Апельсин':
//         alert('Оранжевый');
//         break;
//     case 'Банан':
//         alert('Желтый');
//         break;
//     default:
//         alert('Другое')
// }

// //Задание 12
// let income = parseInt(prompt('Введите свой доход:'))

// if(income<=40000){
//     alert('Низкий доход')
// } else if(income>=40000 && income<=100000){
//     alert('Средний доход')
// } else if(income>10000){
//     alert('Высокий доход')
// } else{
//     alert('Введите корректные данные')
// }

// //Задание 13
// let grade = prompt('Введите свою оценку(A, B, C, D, F):')

// switch(grade){
//     case 'A':
//         alert("Отлично");
//         break;
//     case 'B':
//         alert("Хорошо");
//         break;
//     case 'C':
//         alert("Удовлетворительно");
//         break;
//     case 'D':
//         alert("Неудовлетворительно");
//         break;
//     case 'F':
//         alert("Пересдача");
//         break;
//     default:
//         alert("Введите оценку от A до F!")
// }

// // Задание 14

// let password = prompt('Введите пароль:')

// if (password.length >= 8){
//     alert("Пароль надежный")
// } else{
//     alert("Пароль слишком короткий")
// }

// // Задание 15

// let x = parseInt(prompt('Введите первое число'))
// let y = parseInt(prompt('Введите второе число'))
// let result = (x > y) ? "Первое число больше второго" : (y > x) ? "Второе число больше первого" : "Первое и второе равны";
// alert(result)

// // Задание 16
// let isRaining = prompt('Введите true или false:')
// if(isRaining==true){
//     alert("Идет дождь")
// } else (isRaining ==false){
//     alert('Дождя нет')
// }

// // Задание 17
// let isLeapYear = Boolean(prompt('Введите true или false:'))
// if(isLeapYear === true){
//     alert('Год високосный')
// } else {
//     alert('Год невисокосный')
// }

// // Задание 18

// let userInput = prompt('')

// if (userInput === "") {
//     alert("Пустая строка");
// } else {
//     alert("Строка не пуста");
// }

// // Задание 20
// let num = parseInt(prompt('Введите число:'))

// if (num > 0) {
//     alert("Положительное");
// } else if (num < 0) {
//     alert("Отрицательное");
// } else {
//     alert("Ноль");
// }