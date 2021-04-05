'use strict';


// Daily Hours
let dailyHours = [];

for (let i = 6; i < 12; i++) {
    dailyHours.push(`${i}am`);
}

dailyHours.push(`12pm`)

for (let i = 1; i < 8; i++) {
    dailyHours.push(`${i}pm`);
}

// function from w3 schooles to get random number
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


// Literal Notation method
// let seattle = {
//     minCustomersHour: 13,
//     maxCustomersHour: 65,
//     avgCookieCustomer: 6.3,

//     avgCookiesHour: function () {

//         // get random numbers of customers
//         let totalCustomers = [];
//         let randomCustomers = 0;
//         for (let i = 0; i < dailyHours.length; i++) {
//             randomCustomers = randomNumber(this.minCustomersHour, this.maxCustomersHour);
//             totalCustomers.push(randomCustomers);
//         }

//         // get hourly cookies
//         let hourlyCookies = 0;
//         let totalCookies = [];
//         for (let i = 0; i < dailyHours.length; i++) {
//             hourlyCookies = Math.round(totalCustomers[i] * this.avgCookieCustomer);
//             totalCookies.push(hourlyCookies);
//         }

//         // get sum of cookies
//         let sum = 0;
//         for (let i = 0; i < dailyHours.length; i++) {
//             sum = sum + totalCookies[i];
//         }

//         // Rendering Result
//         let parent = document.getElementById('div1');

//         let h2Element = document.createElement('h2');
//         parent.appendChild(h2Element);
//         h2Element.textContent = 'Seattle';


//         let ulElement = document.createElement('ul');
//         parent.appendChild(ulElement);

//         for (let i = 0; i < dailyHours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${dailyHours[i]}: ${totalCookies[i]} cookies`;
//         }
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total: ${sum} cookies`;

//     }

// }
// seattle.avgCookiesHour();




// Constructor Object method
let stores = [];


function Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer) {
    this.storeName = storeName;
    this.minCustomersHour = minCustomersHour;
    this.maxCustomersHour = maxCustomersHour;
    this.avgCookieCustomer = avgCookieCustomer;
    this.avgCookiesPerHour = this.avgCookiesHour;

    stores.push(this);
}



Store.prototype.avgCookiesHour = function () {

    // get random numbers of customers
    let totalCustomers = [];
    let randomCustomers = 0;
    for (let i = 0; i < dailyHours.length; i++) {
        randomCustomers = randomNumber(this.minCustomersHour, this.maxCustomersHour);
        totalCustomers.push(randomCustomers);
    }

    // get hourly cookies
    let hourlyCookies = 0;
    let totalCookies = [];
    for (let i = 0; i < dailyHours.length; i++) {
        hourlyCookies = Math.round(totalCustomers[i] * this.avgCookieCustomer);
        totalCookies.push(hourlyCookies);
    }

    // get sum of cookies
    let sum = 0;
    for (let i = 0; i < dailyHours.length; i++) {
        sum = sum + totalCookies[i];
    }

    // Rendering Result
    let parent = document.getElementById('div1');

    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent = this.storeName;


    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i = 0; i < dailyHours.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${dailyHours[i]}: ${totalCookies[i]} cookies`;
    }
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${sum} cookies`;

}

let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);

seattle.avgCookiesHour();
tokyo.avgCookiesHour();
dubai.avgCookiesHour();
paris.avgCookiesHour();
lima.avgCookiesHour();

console.log(stores);

