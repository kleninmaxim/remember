'use strict';

// function init(name, isTrue) {
//     document.getElementById('output').innerHTML = `${username.name} (${username.email})`;
// }

// function nameString() {
//     return `${username.name} (${username.email})`;
// }

// const nameString = name => `${name} (${username.email})`;

// document.getElementById('output').innerHTML = nameString('Andrew');

let users = [
    {
        name: 'Andrew',
        email: 'andrew@example.com'
    },
    {
        name: 'Ashley',
        email: 'ashley@example.com'
    }
];

let names = [];

// users.forEach(function(user) {
//     // do something with that user object
//     names.push(user.name);
// });

users.forEach(user => names.push(user.name));

document.getElementById('output').innerHTML = names.join(', ');

document.getElementById('btn').addEventListener('click', (e) => {
    const getDetails = () => {
        return `The button id is ${e.currentTarget.getAttribute('id')}`;
    }

    document.getElementById('output').innerHTML = getDetails();
});