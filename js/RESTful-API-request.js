//GET METHOD //

// let getOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// };

// const getBooks = () => {
//     fetch("https://wool-jolly-numeric.glitch.me/books")
//         .then(resp => resp.json())
//         .then(books => {
//             console.log(books);
//             let htmlStr = "";
//             for (let book of books) {
//                 htmlStr += `<h3>${book.title}</h3><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
//             }
//             $("#container").html(htmlStr);
//         });
// }
//
// getBooks();


function sayHello(name) {
    return 'Hello, ' + name + '!';
}

console.log(sayHello('alex'));

const sayHello1 = (name) => { 'Hello, ' + name + '!' };
console.log(sayHello1('alex'));
const sayHello2 = name => { 'Hello, ' + name + '!' };
console.log(sayHello2('alex'));
const sayHello3 = (name) => `Hello, ${name}!`;
console.log(sayHello3('alex'));

// let numbers = [1, 2, 3, 4, 5];
// numbers = numbers.map(n => n * 3);
//
// console.log(numbers);

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);

