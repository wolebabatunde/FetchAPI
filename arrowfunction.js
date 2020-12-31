// NORMAL FUNCTION

// const sayHello = function () {
//     console.log('Hello');
// };

// sayHello();



// ARROW FUNCTION

// const sayHello = () => {
//     console.log('Hello!')
// };



// ONE LINE FUNCTION DOESN'T NEED BRACES

// const sayHello = () => console.log('Hello!');

// sayHello();


// ONE LINE RETURNS

// const sayHello = () => `Hello`;

// console.log(sayHello());


// RETURN OBJECT

// const sayHello = () => ({
//     mssg: 'Hello'
// })

// console.log(sayHello());


// SINGLE PARAMETERES DOESN'T NEED PARENTHESIS

// const sayHello = firstName => console.log(`Hello ${firstName}`)

// sayHello('Kola');



// MULTIPLE PARAMETERES NEEDS PARENTHESIS

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Kolawole', 'Yekini')


// ARRAY AS CALLBACK

// const users = ['Smiths', 'James', 'Bob', 'King'];

// const nameLenght = users.map(function (name) {
//     return name.length
// });

// console.log(nameLenght);


// ARRAY AS CALLBACK (SHORTER)
// const users = ['Smiths', 'James', 'Bob', 'King'];

// const nameLenght = users.map((name) => {
//     return name.length
// });

// console.log(nameLenght);


// ARRAY AS CALLBACK (SHORTEST)
const users = ['Smiths', 'James', 'Bob', 'King'];

const nameLenght = users.map(name => name.length);

console.log(nameLenght);