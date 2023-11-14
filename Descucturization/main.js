// person = {
//     name: 'Emir',
//     age: 19,
//     city: 'Bishkek'
// }
// const { name, age, gender, city} = person;
// console.log(`Имя: ${name}`);
// console.log(`Возраст: ${age} лет`);
// console.log(`Пол: ${gender}`);
// console.log(`Город: ${city}`);

// const numbersArray = [10, 20, 30, 40, 50];

// const [firstElement , , , lastElement] = numbersArray;

// console.log(`Первый элемент массива: ${firstElement}`);
// console.log(`Последний элемент массива: ${lastElement}`);

// function extractNameAndAge(person) {
//     const { name, age } = person;
//     return { name, age };
// }
// const personInfo = {
//     name: 'Анна',
//     age: 30,
//     gender: 'Женский',
//     city: 'Санкт-Петербург',
//   };

// const { name, age } = extractNameAndAge(personInfo);
// console.log(`Имя: ${name}`);
// console.log(`Возраст: ${age} лет`);

// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(`После обмена: a = ${a}, b = ${b}`);

// const companyInfo = {
//     name: 'Примерная Компания',
//     address: 'Улица Компании, Город',
//     employees: [
//       {
//         name: 'Иван',
//         position: 'Разработчик',
//       },
//       {
//         name: 'Анна',
//         position: 'Дизайнер',
//       },
//       {
//         name: 'Петр',
//         position: 'Менеджер',
//       },
//     ],
//   };

// const { name: companyName, employees: [{ name: firstEmployeeName }] } = companyInfo;
// console.log(`Название компании: ${companyName}`);
// console.log(`Имя первого сотрудника: ${firstEmployeeName}`);

// const students = [
//     { name: 'Надира', age: 99 },
//     { name: 'Айдар', age: 20 },
//     { name: 'Кама', age: 10 },
// ];

// for (const { name, age } of students) {
//     console.log(`Имя: ${name}, Возраст: ${age} лет`);
// }

