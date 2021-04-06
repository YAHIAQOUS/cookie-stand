'use strict';

let stores = [];


// Inputs: Type here .. let storeName = new Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer)
let startingHour = 6;
let closingHour = 8;

let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);









// Daily Hours
let dailyHours = [];

function hours() {
    for (let i = startingHour; i < 12; i++) {
        dailyHours.push(`${i}am`);
    }
    dailyHours.push(`12pm`)
    for (let i = 1; i < closingHour; i++) {
        dailyHours.push(`${i}pm`);
    }
}
hours();

// function from w3 schooles to get random number
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


// Calcualtion Part
let totalCookiesPerHour = []
for (let i = 0; i < dailyHours.length; i++) {
    totalCookiesPerHour.push(0)
}

// Store function
function Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer) {
    this.storeName = storeName;
    this.minCustomersHour = minCustomersHour;
    this.maxCustomersHour = maxCustomersHour;
    this.avgCookieCustomer = avgCookieCustomer;
    this.avgCookiesPerHour = this.avgCookiesHour;
    this.totalCookies = [];
    this.sum = 0
    stores.push(this);
}


// Store calculation method
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

        totalCookiesPerHour[i] += this.totalCookies[i];
    }
    // console.log(this.totalCookies);
    // console.log(totalCookiesPerHour);


    // get sum of cookies
    for (let i = 0; i < dailyHours.length; i++) {
        this.sum = this.sum + this.totalCookies[i];
    }
}
// console.log(stores);










// Rendering Result - Table
let parent = document.getElementById('div1');

let table = document.createElement('table');
parent.appendChild(table);

// Making Header
function header() {
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
}



// Making Rows
function rows() {
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
}


// get mega totals
let megaTotals = 0
for (let i = 0; i < dailyHours.length; i++) {
    megaTotals += totalCookiesPerHour[i];
}
// console.log(megaTotals);


// Making Footer
function footer() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    let footerData = document.createElement('th')
    footerRow.appendChild(footerData);
    footerData.textContent = 'Totals';

    for (let i = 0; i < dailyHours.length; i++) {
        let footerData = document.createElement('th')
        footerRow.appendChild(footerData);
        footerData.textContent = totalCookiesPerHour[i];
    }

    let footerDataTotal = document.createElement('th')
    footerRow.appendChild(footerDataTotal);
    footerDataTotal.textContent = megaTotals
}

header();
rows();

// Calling function methods
for (let i = 0; i < stores.length; i++) {
    stores[i].avgCookiesHour();
    stores[i].render();
}

footer();

// console.log(parent);



