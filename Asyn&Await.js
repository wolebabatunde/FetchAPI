// ASYNC AND PROMISE

// async function myFunc() {
//     return 'Hello'
// };

// myFunc()
//     .then(res => console.log(res));



// ASYNC PROMISE & AWAIT

// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     })

//     const error = false;

//     if (!error) {
//         const res = await promise; //It will wait until promise is resolved
//         return res;
//     } else {
//         await Promise.reject(new Error('something went wrong'));
//     }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));



// FETCH WITH ASYNC, PROMISE & AWAIT

async function getUsers() {
    // Await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // We only proceed once the promise is resolved
    const data = await response.json();

    // We only proceed once the second promise is resolved
    return data;

}

getUsers().then(users => console.log(users));