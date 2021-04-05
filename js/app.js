'use strict';

let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);


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

let totalHour = []
for (let i = 0; i < dailyHours.length; i++) {
    totalHour.push(0)
}

let totals = 0



function Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer) {
    this.storeName = storeName;
    this.minCustomersHour = minCustomersHour;
    this.maxCustomersHour = maxCustomersHour;
    this.avgCookieCustomer = avgCookieCustomer;
    this.avgCookiesPerHour = this.avgCookiesHour;
    this.totalCookies = [];
    this.sum = 0


}



Store.prototype.avgCookiesHour = function () {

    // get random numbers of customers
    let totalCustomers = [];
    let randomCustomers = 0;
    for (let i = 0; i < dailyHours.length; i++) {
        randomCustomers = randomNumber(this.minCustomersHour, this.maxCustomersHour);
        totalCustomers.push(randomCustomers);
    }

    // get hourly and total hourly cookies
    let hourlyCookies = 0;

    for (let i = 0; i < dailyHours.length; i++) {
        hourlyCookies = Math.round(totalCustomers[i] * this.avgCookieCustomer);
        this.totalCookies.push(hourlyCookies);

        totalHour[i] += this.totalCookies[i];
    }
    // console.log(this.totalCookies);
    // console.log(totalHour);


    // get sum of cookies
    for (let i = 0; i < dailyHours.length; i++) {
        this.sum = this.sum + this.totalCookies[i];
    }




    // Rendering Result - Unordered List
    // let parent = document.getElementById('div1');

    // let h2Element = document.createElement('h2');
    // parent.appendChild(h2Element);
    // h2Element.textContent = this.storeName;


    // let ulElement = document.createElement('ul');
    // parent.appendChild(ulElement);

    // for (let i = 0; i < dailyHours.length; i++) {
    //     let liElement = document.createElement('li');
    //     ulElement.appendChild(liElement);
    //     liElement.textContent = `${dailyHours[i]}: ${totalCookies[i]} cookies`;
    // }
    // let liElement = document.createElement('li');
    // ulElement.appendChild(liElement);
    // liElement.textContent = `Total: ${sum} cookies`;


    // let h2Element = document.createElement('h2');
    // parent.appendChild(h2Element);
    // h2Element.textContent = this.storeName;


    // let ulElement = document.createElement('ul');
    // parent.appendChild(ulElement);

    // for (let i = 0; i < dailyHours.length; i++) {
    //     let liElement = document.createElement('li');
    //     ulElement.appendChild(liElement);
    //     liElement.textContent = `${dailyHours[i]}: ${totalCookies[i]} cookies`;
    // }
    // let liElement = document.createElement('li');
    // ulElement.appendChild(liElement);
    // liElement.textContent = `Total: ${sum} cookies`;

}

seattle.avgCookiesHour();
tokyo.avgCookiesHour();
dubai.avgCookiesHour();
paris.avgCookiesHour();
lima.avgCookiesHour();



// get Totals
for (let i = 0; i < dailyHours.length; i++) {
    totals += totalHour[i];
}
// console.log(totals);


// Rendering Result - Table
let parent = document.getElementById('div1');

let table = document.createElement('table');
parent.appendChild(table);

// Making Header
let headingRow = document.createElement('tr');
table.appendChild(headingRow);

let headingData = document.createElement('th')
headingRow.appendChild(headingData);

for (let i = 0; i < dailyHours.length; i++) {
    let headingData = document.createElement('th')
    headingRow.appendChild(headingData);
    headingData.textContent = dailyHours[i];
}
let headingDataTotal = document.createElement('th')
headingRow.appendChild(headingDataTotal);
headingDataTotal.textContent = 'Daily Location Total'


// Making Rows
Store.prototype.render = function () {
    let dataRows = document.createElement('tr');
    table.appendChild(dataRows);

    let rowName = document.createElement('th')
    dataRows.appendChild(rowName);
    rowName.textContent = this.storeName;

    for (let i = 0; i < this.totalCookies.length; i++) {
        let numbersRow = document.createElement('th')
        dataRows.appendChild(numbersRow);
        numbersRow.textContent = this.totalCookies[i];
    }
    let rowTotal = document.createElement('th')
    dataRows.appendChild(rowTotal);
    rowTotal.textContent = this.sum;
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// Making Footer
let footerRow = document.createElement('tr');
table.appendChild(footerRow);

let footerData = document.createElement('th')
footerRow.appendChild(footerData);
footerData.textContent = 'Totals';

for (let i = 0; i < dailyHours.length; i++) {
    let footerData = document.createElement('th')
    footerRow.appendChild(footerData);
    footerData.textContent = totalHour[i];
}

let footerDataTotal = document.createElement('th')
footerRow.appendChild(footerDataTotal);
footerDataTotal.textContent = totals


// console.log(parent);





