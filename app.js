hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

const stores = [
    {
        minCust: 23,
        maxCust: 65,
        avgCookiesSale: 6.3,
        cookiesEachHour: [],
        totalCookies: 0,
        location: 'seattle'
        
    },
    {
        minCust: 3,
        maxCust: 24,
        avgCookiesSale: 1.2,
        cookiesEachHour: [],
        totalCookies: 0,
        location: 'tokyo'
    },
    {
        minCust: 11,
        maxCust: 38,
        avgCookiesSale: 3.7,
        cookiesEachHour: [],
        totalCookies: 0,
        location: 'dubai'
    },
    {
        minCust: 20,
        maxCust: 38,
        avgCookiesSale: 2.3,
        cookiesEachHour: [],
        totalCookies: 0,
        location: 'paris'
    },
    {
        minCust: 2,
        maxCust: 16,
        avgCookiesSale: 4.6,
        cookiesEachHour: [],
        totalCookies: 0,
        location: 'lima' 
    }
];


const randomCustGen = function (maxCust, minCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}

const cookiesSoldPerHour = function (store) {
    for ( let i = 0; i < hours.length; i++) {
        const oneHour = Math.floor(store.avgCookiesSale * randomCustGen(store.maxCust, store.minCust));
        store.cookiesEachHour.push(oneHour);
        store.totalCookies = store.totalCookies + oneHour;
    }
}

function printData (store) {
    cookiesSoldPerHour(store);
    let cookiesPerHour = store.cookiesEachHour
    for ( let i = 0; i < cookiesPerHour.length; i++){
        let el = document.createElement('li');
        el.innerHTML = `${hours[i]} ${cookiesPerHour[i]}`;
        document.getElementById(`${store.location.toLowerCase()}Sales`).appendChild(el);
    }
    let el = document.createElement('li');
    el.innerHTML = `Total Cookies ${store.totalCookies}`;
    document.getElementById(`${store.location}Sales`).appendChild(el);

}

for (let i = 0; i < stores.length; i++){
    printData(stores[i]);
}