// let promise = new Promise(function(onResolve, onReject){
//     setTimeout(() => {
//         onResolve("Promise выполнено");
//     }, 2000);
// })
// promise
//     .then(onResolve =>{
//         console.log(onResolve)
//     })

// let promise = new Promise(function(onResolve, onReject){
//     setTimeout(() => {
//         onReject('ошибка')
//     }, 3000);
// })

// promise
//     .catch(onReject =>{
//         console.log(onReject);
//     })

// let promise = new Promise(function(onResolve, onReject){
//         setTimeout(() => {
//         onResolve("Promise выполнено");
//     }, 2000);
//     setTimeout(() => {
//         onReject('ошибка')
//     }, 3000);
// })

// promise
//     .then(onResolve =>{
//         console.log(onResolve)
//     })
//     .catch(onReject =>{
//         console.log(onReject);
//     })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Ошибка при выполнении запроса: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Данные получены успешно:', data);
//       })
//       .catch(error => {
//         console.error('Произошла ошибка:', error);
//       });