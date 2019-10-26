/*
When the button#counter_btn is clicked, display how many times it has been clicked in the span#click_count
*/

// Count the number of clicks from 0
let nClicks = 0;

let counterBtn = document.getElementById("counter_btn");

// When the button#counter_btn is clicked, call countClicks function
counterBtn.onclick = countClicks;

// Function that count clicks and displays the count in span#click_count
function countClicks() {
    // Increment the number of clicks
    nClicks++;

    // Display how many times it has been clicked in the span#click_count
    document.getElementById("click_count").innerHTML = nClicks;
}

/*
When the button#reset_btn is clicked, reset the button click counter to 0
*/

let resetBtn = document.getElementById("reset_btn");
resetBtn.onclick = function () {
    document.getElementById("click_count").innerHTML = 0;
}