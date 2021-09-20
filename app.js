let seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookiesSale: 6.3,
    periods: ['AM', 'PM'],
    hours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6pm', '7PM'],
    randomNumCust: function (){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    cookiesSold: function () {
        return (Math.floor(this.avgCookiesSale * this.randomNumCust()));
    },
    cookiesSoldPerHour: function () {
        return (this.cookiesSold + this.hours);
    }
} 
// console.log(seattle.randomNumCust());
// console.log(seattle.cookiesSold());
// console.log(seattle.hours);
console.log(seattle.cookiesSoldPerHour());