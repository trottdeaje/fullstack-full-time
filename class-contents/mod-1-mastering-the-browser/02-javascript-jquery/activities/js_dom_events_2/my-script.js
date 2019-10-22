// Generated from https://quotes-generator.com/quotes-generator.php
let inspirationalQuotes = [
    "When you let go of that which is holding you down you can rise to your highest potential. -Avina Celeste",
    "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree. -Martin Luther",
    "We see things not as they are, we see them as WE are. - Morrie Camhi",
    "May your vision pull you until you have no choice but to do it. Keep pressing! Never give up on your vision. Never give up on your dreams! You are worth it! -J.M. Guy",
    "Pain is temporary. Quitting lasts forever. -Lance Armstrong"
];

/*
When the button#random_quote_btn is clicked, generate a <p></p> element with a random quote from the inspirationalQuotes array using the pickRandomQuote function and append that element to div#quotes_container. Give the newly created element a random background color using getRandomHexColor
*/


function pickRandomQuote(quotes) {
    // Create a random index between 0 and quotes.length -1
    let randIdx = Math.floor(Math.random() * quotes.length);

    // Use random index to get a random quote
    let randQuote = quotes[randIdx];

    // return the random quote
    return randQuote;
}

function getRandomHexColor() {
    let hexChars = "0123456789ABCDEF";

    let randomColor = "#";

    for (let index = 0; index < 6; index++) {
        let randomHexCharIdx = Math.floor(Math.random() * hexChars.length);

        let randomHexChar = hexChars[randomHexCharIdx];

        randomColor += randomHexChar;
    }

    return randomColor;
}