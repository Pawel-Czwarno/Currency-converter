{
    const welcome = () => {
        console.log("Witaj w kalkulatorze walutowym stworzonym przez Pawła Czwarno!");
    };

    const calculateResult = (asked, currency) => {
        const USD = 4.42;
        const EURO = 4.72;
        const UAH = 0.12;
        const POUND = 5.39;
        const CHF = 4.83;

        switch (currency) {
            case "$":
                return asked / USD;

            case "€":
                return asked / EURO;

            case "₴":
                return asked / UAH;

            case "£":
                return asked / POUND;

            case "CHF":
                return asked / CHF;
        };
    };

    const showCurrencyResult = (result, currency) => {
        const resultElement = document.querySelector(".js-currencyResult");
        resultElement.value = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const outElement = document.querySelector(".js-currencyOut");
        const askedElement = document.querySelector(".js-currencyAsked");
        const asked = askedElement.value;
        const currency = outElement.value;

        let result = calculateResult(asked, currency);
        showCurrencyResult (result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-currencyForm");
        formElement.addEventListener("submit", onFormSubmit);
        welcome();
    }

    init();
}