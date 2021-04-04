'use strict';


// Daily Hours
let dailyHours = [];

for (let i = 6; i < 12; i++) {
    dailyHours.push(`${i}am`);
}


dailyHours.push(`12pm`)

for (let i = 1; i < 9; i++) {
    dailyHours.push(`${i}pm`);
}




// function from w3 schooles to get random number
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}




// First Object
let seattle = {
    minCustomersHour: 13,
    maxCustomersHour: 65,
    avgCookieCustomer: 6.3,

    avgCookiesHour: function () {

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
        h2Element.textContent = 'Seattle';


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

}
seattle.avgCookiesHour();



// Second Object
let tokyo = {
    minCustomersHour: 3,
    maxCustomersHour: 24,
    avgCookieCustomer: 1.2,

    avgCookiesHour: function () {

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
        h2Element.textContent = 'Tokyo';


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


}
tokyo.avgCookiesHour();



// Third Object
let dubai = {
    minCustomersHour: 11,
    maxCustomersHour: 38,
    avgCookieCustomer: 3.7,

    avgCookiesHour: function () {

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
        h2Element.textContent = 'Dubai';


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

}
dubai.avgCookiesHour();



// Fourth Object
let paris = {
    minCustomersHour: 20,
    maxCustomersHour: 38,
    avgCookieCustomer: 2.3,

    avgCookiesHour: function () {

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
        h2Element.textContent = 'Paris';


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

}
paris.avgCookiesHour();



// Fifth Object
let lima = {
    minCustomersHour: 2,
    maxCustomersHour: 16,
    avgCookieCustomer: 4.6,

    avgCookiesHour: function () {

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
        h2Element.textContent = 'Lima';


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

}
lima.avgCookiesHour();


