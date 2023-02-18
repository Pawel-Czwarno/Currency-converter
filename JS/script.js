console.log("Witaj w kalkulatorze walutowym stworzonym przez Pawła Czwarno!");

let formElement = document.querySelector(".js-currencyForm");
let outElement = document.querySelector(".js-currencyOut");
let askedElement = document.querySelector(".js-currencyAsked");
let resultElement = document.querySelector(".js-currencyResult");
let USD = 4.42;
let EURO = 4.72;
let UAH = 0.12;
let POUND = 5.39;
let CHF = 4.83;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result;
    let asked = askedElement.value;
    let currency = outElement.value;

    switch (currency) {
        case "$":
            result = asked / USD;
            break;

        case "€":
            result = asked / EURO;
            break;

        case "₴":
            result = asked / UAH;
            break;

        case "£":
            result = asked / POUND;
            break;

        case "CHF":
            result = asked / CHF;
            break;
    };

    resultElement.value = `${result.toFixed(2)} ${currency}`;
});