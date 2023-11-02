// // Создайте объект "Пользователь" с полями "имя" и "возраст". Напишите метод в объекте, который будет выводить информацию о пользователе в консоль, используя this.
// let User = {
//     name: 'Emir',
//     age: 19,
//     logInfo: function(){
//             console.log("Имя: " + this.name + ", Возраст: " + this.age);
//         }
// }

// User.logInfo()

// // Создайте объект "Автомобиль" с полем "марка". Напишите метод, который будет возвращать строку "Моя машина - [марка]" с использованием this.
// let auto = {
//     brand: "Audi",
//     logAutoBrand: function(){
//         console.log(`Моя машина - ${this.brand}`)
//     }
// }

// auto.logAutoBrand()

// // Создайте объект "Круг" с полем "радиус". Добавьте метод, который будет возвращать площадь круга, используя this.
// let circle = {
//     radius: 10,
//     logRadius: function(){
//         console.log(`Радиус круга - ${this.radius}`);
//     }
// }
// circle.logRadius()

// // Создайте объект "Калькулятор" с полями "число1" и "число2". Добавьте методы для сложения и умножения чисел, используя this.
// let calculator = {
//     num1: +prompt(),
//     num2: +prompt(),
//     logSum: function(){
//         let sum= this.num1 + this.num2
//         console.log('Сумма - ', sum);
//     },
//     logMult: function(){
//         let mult= this.num1 * this.num2
//         console.log('Произведение - ', mult);
//     }
// }
// calculator.logSum()
// calculator.logMult()

// // Создайте функцию "День недели", которая будет возвращать текущий день недели с использованием this.
// function getDayOfWeek() {
//     const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     const dayIndex = this.getDay();
//     return daysOfWeek[dayIndex];
//   }
  
// const today = new Date();
// const currentDayOfWeek = getDayOfWeek.call(today);
// console.log('Сегодня ' + currentDayOfWeek);

// // Создайте объект "Продукт" с полями "название" и "цена". Добавьте метод, который будет выводить информацию о продукте вида "Продукт [название] стоит [цена] долларов", используя this.
// let product = {
//     title: 'Chocopie',
//     price: 160,
//     logInfoAboutProduct: function(){
//         console.log(`Продукт ${this.title} стоит ${this.price} сомов`);
//     }
// }
// product.logInfoAboutProduct()

// // Создайте объект "Животное" с полем "имя". Добавьте метод, который будет издавать звук, связанный с этим животным, вида "[имя] издает звук [звук]", используя this.
// let animal = {
//     animalName: 'Axolotl',
//     animalsSound: 'I dont know ┐(￣ヘ￣;)┌',
//     whatSoundDoesAnimalDo: function(){
//         console.log(`${this.animalName} издает звук ${this.animalsSound}`);
//     }
// }
// animal.whatSoundDoesAnimalDo()

// Создайте свой reduce, изучите sort и также создайте свой sort
// mySort и myReduce - сделайте наиболее похожий функционал, учитывая даже ошибки
Array.prototype.myReduce = function(callback, initialValue) {
let accumulator = initialValue !== undefined ? initialValue : this[0];
const startIndex = initialValue !== undefined ? 0 : 1;
  
for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
}
return accumulator;
};

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

Array.prototype.mySort = function() {
const length = this.length;

for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
    if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
    }
    }
}
return this;
};

const unsortedNumbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = unsortedNumbers.mySort();
console.log(sortedNumbers);
  