// Make sure we only run our js when the DOM has finished loading
$(document).ready(function () {

    // Create a string variable to hold what the user inputs
    let userInput = "";

    // Create a bool flag to know whether the user has already completed an operation
    // This flag is important when they want to go back and do another operation
    let hasCompletedOperation = false;

    // Listen to click event on the buttons
    $(".btns_container").on('click', function (event) {
        // Figure out which button was clicked on
        // Make it a jQuery object so that we can use jQuery functions on it
        let realTarget = $(event.target);

        // Every button has a "type" and "value" attribute that we can use to figure out what was clicked
        let btnType = realTarget.attr("type");
        let btnValue = realTarget.attr("value");

        // Every single time the user clicks a button, figure out what they clicked: do they want to clear everthing, keep doing operations or are they done and they want to know the result?
        // We'll know that they are done, if they clicked the equal sign. Otherwise we are going to keep adding to our userInput string
        if (btnType === "clear") {
            clear();
        } else if (btnType !== "equal") {
            processUserInput(btnType, btnValue)
        } else {
            // The user is done because they just clicked the equal button
            evalUserInput()
        }

    })

    // Listen to keydown event on the keyboard so that we can allow the user to use their keyboard
    $("body").on("keydown", function (event) {
        // Every event object the browser sends us has a "key" property that tells us what keyboard key was pressed. Every pressed key on the keyboard also has a key code which is avaible on the browser event object under the "keyCode" property. The "key" property value is a string while the "keyCode" is a number. Using the "key" property in this case because it makes our code more understandable because it reads more like English

        if (event.key === "Enter") {
            // The Enter key sometimes fires clicking buttons, stop it from doing that
            event.preventDefault();
        }

        let keyboardInput = event.key

        // Allow users to press any number on their keyboard also any of the following keys: ., +, -, *, /, =, Backspace, Enter
        if (parseInt(keyboardInput) || keyboardInput === "." || keyboardInput === "+" || keyboardInput === "-" || keyboardInput === "*" || keyboardInput === "/" || keyboardInput === "=" || keyboardInput === "Backspace" || keyboardInput === "Enter") {


            if (keyboardInput === "Backspace") {
                // Backspace is for deleting the last character on the userInput string
                userInput = userInput.substr(0, userInput.length - 1);
                // Show what the user entered into the #user_input div
                $("#user_input").text(userInput)
            } else if (keyboardInput === "=" || keyboardInput === "Enter") {
                // Enter is the same as clicking the = sign
                evalUserInput()
            } else {
                // Process user input
                let btnType;
                if (keyboardInput === "." || keyboardInput === "+" || keyboardInput === "-" || keyboardInput === "*" || keyboardInput === "/") {
                    btnType = "operator";
                } else {
                    btnType = "number";
                }

                let btnValue = keyboardInput;

                processUserInput(btnType, btnValue)
            }
        }
    })

    function processUserInput(btnType, btnValue) {
        if (hasCompletedOperation) {
            // If the user has already completed an operation and they want to go back and do another operation, clear everything for them and reset our flag
            clear();
            hasCompletedOperation = false;
        }

        // The user is not done yet. Keep adding to our userInput string
        if (btnType === "operator") {
            // If they clicked an operator, add some space around the operator to make it look nice
            userInput += ` ${btnValue} `; // same as userInput += " " + btnValue + " ";
        } else {
            // Otherwise, just add to our userInput string
            userInput += btnValue
        }

        // Show what the user entered into the #user_input div
        $("#user_input").text(userInput)
    }

    function evalUserInput() {
        // Evaluate the expression in the userInput variable and update the answer

        // Remember that we have spaces in our userInput string to make it look better
        // So, remove those space using a regular expression
        let userInputWithoutSpaces = userInput.replace(/ /g, ''); // Replace ALL the spaces with no space

        // Also remember that for multiplication we have x instead of *
        // So replace all x with *
        let mathStatement = userInputWithoutSpaces.replace(/x/g, '*');

        // Now evaluate the math statement
        let answer = eval(mathStatement);

        $("#answer").text(answer);
        $("#answer").addClass("answer")

        hasCompletedOperation = true;
    }

    function clear() {
        // clear the user input and set the answer to 0
        userInput = "";
        $("#user_input").text("");
        $("#answer").text("0");
        $("#answer").removeClass("answer")
    }
})