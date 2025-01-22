let age = 20;
let day = "Tuesday";

let ticketPrice = 10;

if (age < 12 || age > 60) {
    ticketPrice *= 0.5;
}

if (day === "Tuesday" ) {
    ticketPrice *= 0.8;
}

console.log("The Ticket Price is:" , ticketPrice);