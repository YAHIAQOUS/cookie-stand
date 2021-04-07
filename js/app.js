/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
'use strict';

let storesArray = [];


let startingHour = 6;
let closingHour = 8;

let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);



// Daily Hours
let dailyHoursArray = [];
function hours() {
    for (let i = startingHour; i < 12; i++) {
        dailyHoursArray.push(`${i}am`);
    }
    dailyHoursArray.push('12pm');
    for (let i = 1; i < closingHour; i++) {
        dailyHoursArray.push(`${i}pm`);
    }
}
hours();


// function from w3 schooles to get random number
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}



// Calcualtion Part
let totalCookiesPerHourArray = [];
for (let i = 0; i < dailyHoursArray.length; i++) {
    totalCookiesPerHourArray.push(0);
}

// Store function
function Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer) {
    this.storeName = storeName;
    this.minCustomersHour = minCustomersHour;
    this.maxCustomersHour = maxCustomersHour;
    this.avgCookieCustomer = avgCookieCustomer;
    this.avgCookiesPerHour = this.avgCookiesHour;
    this.totalCookiesArray = [];
    this.sum = 0;
    storesArray.push(this);
}


// Store calculation method
Store.prototype.avgCookiesHour = function () {

    // get random numbers of customers
    let totalCustomersArray = [];
    let randomCustomers = 0;
    for (let i = 0; i < dailyHoursArray.length; i++) {
        randomCustomers = randomNumber(this.minCustomersHour, this.maxCustomersHour);
        totalCustomersArray.push(randomCustomers);
    }

    // get hourly and total hourly cookies
    let hourlyCookies = 0;

    for (let i = 0; i < dailyHoursArray.length; i++) {
        hourlyCookies = Math.round(totalCustomersArray[i] * this.avgCookieCustomer);
        this.totalCookiesArray.push(hourlyCookies);
    }

    // get sum of cookies
    this.sum = 0;
    for (let i = 0; i < dailyHoursArray.length; i++) {
        this.sum = this.sum + this.totalCookiesArray[i];
    }
    // console.log(this.totalCookiesArray);
};










// Rendering Result - Table
let parent = document.getElementById('div2');

let table = document.createElement('table');
parent.appendChild(table);

// Making Header
function header() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);

    let headingData = document.createElement('th');
    headingRow.appendChild(headingData);

    for (let i = 0; i < dailyHoursArray.length; i++) {
        let headingData = document.createElement('th');
        headingRow.appendChild(headingData);
        headingData.textContent = dailyHoursArray[i];
    }
    let headingDataTotal = document.createElement('th');
    headingRow.appendChild(headingDataTotal);
    headingDataTotal.textContent = 'Daily Location Total';
}
header();



// Making Rows
Store.prototype.render = function () {
    let dataRows = document.createElement('tr');
    table.appendChild(dataRows);

    let rowName = document.createElement('td');
    dataRows.appendChild(rowName);
    rowName.textContent = this.storeName;

    for (let i = 0; i < 14; i++) {
        let numbersRow = document.createElement('td');
        dataRows.appendChild(numbersRow);
        numbersRow.textContent = this.totalCookiesArray[i];
    }
    let rowTotal = document.createElement('td');
    dataRows.appendChild(rowTotal);
    rowTotal.textContent = this.sum;
};
// console.log(rows);


let form = document.getElementById('form');
// console.log(form);
form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

    let storeName = event.target.storeName.value;
    // console.log(storeName);
    let minCustomersHour = event.target.minCustomersHour.valueAsNumber;
    // console.log(minCustomersHour);
    let maxCustomersHour = event.target.maxCustomersHour.valueAsNumber;
    // console.log(maxCustomersHour);
    let avgCookieCustomer = event.target.avgCookieCustomer.valueAsNumber;
    // console.log(maxCustomersHour);

    let newStore = new Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer);
    // console.log(newStore);

    table.textContent = '';

    header();

    // console.log(stores);
    megaTotals = 0;
    for (let i = 0; i < storesArray.length; i++) {
        storesArray[i].avgCookiesHour();
        storesArray[i].render();
        // console.log(stores[i]);
    }

    footer();
}
// console.log(stores);


// Calling function methods
for (let i = 0; i < storesArray.length; i++) {
    storesArray[i].avgCookiesHour();
    storesArray[i].render();
}




// Making Footer
let megaTotals = 0;
function footer() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    // totals
    let footerData = document.createElement('th');
    footerRow.appendChild(footerData);
    footerData.textContent = 'Totals';

    for (let i = 0; i < dailyHoursArray.length; i++) {
        let totalCookies = 0;
        for (let j = 0; j < storesArray.length; j++) {
            totalCookies += storesArray[j].totalCookiesArray[i];
            megaTotals+= storesArray[j].totalCookiesArray[i];
        }
        // console.log(total);

        let footerData = document.createElement('th');
        footerRow.appendChild(footerData);
        footerData.textContent = totalCookies;
    }

    let footerDataTotal = document.createElement('th');
    footerRow.appendChild(footerDataTotal);
    footerDataTotal.textContent = megaTotals;
}
footer();

// console.log(megaTotals);

