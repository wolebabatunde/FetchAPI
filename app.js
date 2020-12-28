// BUTTON 1
document.getElementById('button1').addEventListener('click',
    getText);


// BUTTON 2
document.getElementById('button2').addEventListener('click',
    getJson);


// BUTTON 3
document.getElementById('button3').addEventListener('click',
    getExternalApi);


// BUTTON 1 FUNCTION
// Fetch from text file

function getText() {
    fetch('text.tst') //Fetch returns promises so we have to use ".then"
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("output").innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        })
}



// BUTTON 2 FUNCTION
// fetch from JSON File

function getJson() {
    fetch('post.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            let output = '';

            data.forEach(function (post) {
                output += `<li>${post.title}</li>`
            })

            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            console.log(err);
        })
}


// BUTTON 3 FUNCTION
// Get Data From ExternalAPI

function getExternalApi() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data);

            let output = '';

            data.forEach(function (user) {
                output += `<li>${user.login}</li>`
            })

            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}