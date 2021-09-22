// hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// const stores = [
//     {
//         minCust: 23,
//         maxCust: 65,
//         avgCookiesSale: 6.3,
//         cookiesEachHour: [],
//         totalCookies: 0,
//         location: 'seattle'
        
//     },
//     {
//         minCust: 3,
//         maxCust: 24,
//         avgCookiesSale: 1.2,
//         cookiesEachHour: [],
//         totalCookies: 0,
//         location: 'tokyo'
//     },
//     {
//         minCust: 11,
//         maxCust: 38,
//         avgCookiesSale: 3.7,
//         cookiesEachHour: [],
//         totalCookies: 0,
//         location: 'dubai'
//     },
//     {
//         minCust: 20,
//         maxCust: 38,
//         avgCookiesSale: 2.3,
//         cookiesEachHour: [],
//         totalCookies: 0,
//         location: 'paris'
//     },
//     {
//         minCust: 2,
//         maxCust: 16,
//         avgCookiesSale: 4.6,
//         cookiesEachHour: [],
//         totalCookies: 0,
//         location: 'lima' 
//     }
// ];


// const randomCustGen = function (maxCust, minCust) {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
// }

// const cookiesSoldPerHour = function (store) {
//     for ( let i = 0; i < hours.length; i++) {
//         const oneHour = Math.floor(store.avgCookiesSale * randomCustGen(store.maxCust, store.minCust));
//         store.cookiesEachHour.push(oneHour);
//         store.totalCookies = store.totalCookies + oneHour;
//     }
// }

// function printData (store) {
//     cookiesSoldPerHour(store);
//     let cookiesPerHour = store.cookiesEachHour
//     for ( let i = 0; i < cookiesPerHour.length; i++){
//         let el = document.createElement('li');
//         el.innerHTML = `${hours[i]} ${cookiesPerHour[i]}`;
//         document.getElementById(`${store.location.toLowerCase()}Sales`).appendChild(el);
//     }
//     let el = document.createElement('li');
//     el.innerHTML = `Total Cookies ${store.totalCookies}`;
//     document.getElementById(`${store.location}Sales`).appendChild(el);

// }


hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
let stores = [];
let totalPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Store (minCust, maxCust, avgCookiesSale, cookiesEachHour, totalCookies, location){
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesSale = avgCookiesSale;
    this.cookiesEachHour = cookiesEachHour;
    this.totalCookies = 0;
    this.location = location;
}

const randomCustGen = function (maxCust, minCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}

const cookiesSoldPerHour = function (store) {
    for ( let i = 0; i < hours.length; i++) {
        const oneHour = Math.floor(store.avgCookiesSale * randomCustGen(store.maxCust, store.minCust));
        store.cookiesEachHour.push(oneHour);
        store.totalCookies = store.totalCookies + oneHour;
        totalPerHour[i] = totalPerHour[i] + oneHour;
    }
}

function printData (store) {
    cookiesSoldPerHour(store);
    let cookiesPerHour = store.cookiesEachHour;
    const row = document.createElement('tr');
    let name = document.createElement('td');
    name.innerHTML = store.location;
    row.appendChild(name);
    cookiesPerHour.forEach(hour => {
        let el = document.createElement('td');
        el.innerHTML = `${hour}`;
        row.appendChild(el);
    })
    let total = document.createElement('td');
    total.innerHTML = `${store.totalCookies}`;
    row.appendChild(total);
    document.getElementsByTagName('tbody')[0].appendChild(row);
}

function printHourlyTotal () {
    let totals = 0;
    const row = document.createElement('tr');
    let name = document.createElement('td');
    row.appendChild(name);
    totalPerHour.forEach((hour)=>{
        let el = document.createElement('td');
        el.innerHTML = `${hour}`;
        row.appendChild(el);
        totals = totals + hour;
    })
    let grandTotal = document.createElement('td');
    grandTotal.innerHTML = `${totals}`;
    row.appendChild(grandTotal);
    document.getElementsByTagName('tbody')[0].appendChild(row);
}

stores.push(new Store (23, 65, 6.3, [], 0, 'seattle'));
stores.push(new Store (3, 24, 1.2, [], 0, 'tokyo'));
stores.push(new Store (11, 38, 3.7, [], 0, 'dubai'));
stores.push(new Store (20, 38, 2.3, [], 0, 'paris'));
stores.push(new Store (2, 16, 4.6, [], 0, 'lima'));

console.log(stores);

for (let i = 0; i < stores.length; i++){
    printData(stores[i]);
    if (i == stores.length - 1){
        printHourlyTotal ();
    }
}





// Store.prototype.populateHTML = function populateHTML (){
//     for (let i = 0; i < this.stores.length; i++){
//         this.printData(this.stores[i]);
//     }
// }

// let cities = new Cities (stores);
// cities.populateHTML();

// hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// function Cities (store){
//     // this.minCust = minCust;
//     // this.maxCust = maxCust;
//     // this.avgCookiesSale = avgCookiesSale;
//     // this.cookiesEachHour = cookiesEachHour;
//     // this.totalCookies = totalCookies;
//     // this.location = location;
//     this.stores = stores;
// }

// Cities.prototype.randomCustGen = function (maxCust, minCust) {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
// }

// Cities.prototype.cookiesSoldPerHour = function (store) {
//     for ( let i = 0; i < hours.length; i++) {
//         const oneHour = Math.floor(store.avgCookiesSale * this.randomCustGen(store.maxCust, store.minCust));
//         store.cookiesEachHour.push(oneHour);
//         store.totalCookies = store.totalCookies + oneHour;
//     }
// }

// Cities.prototype.printData = function printData (store) {
//     this.cookiesSoldPerHour(store);
//     let cookiesPerHour = store.cookiesEachHour
//     for ( let i = 0; i < cookiesPerHour.length; i++){
//         let el = document.createElement('td');
//         el.innerHTML = `${hours[i]} ${cookiesPerHour[i]}`;
//         document.getElementById(`${store.location.toLowerCase()}Sales`).appendChild(el);
//     }
//     let el = document.createElement('td');
//     el.innerHTML = `Total Cookies ${store.totalCookies}`;
//     document.getElementById(`${store.location}Sales`).appendChild(el);
// }

// Cities.prototype.populateHTML = function populateHTML (){
//     for (let i = 0; i < this.stores.length; i++){
//         this.printData(this.stores[i]);
//     }
// }

// let cities = new Cities (stores);
// cities.populateHTML();
