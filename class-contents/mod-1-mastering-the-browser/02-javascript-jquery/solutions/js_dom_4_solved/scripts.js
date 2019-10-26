/*
element.setAttribute(attribute, value)	changes the attribute value of an HTML element

In <p id="myPara" class="centered">, id and class are attributes
In <img src="..." alt="...">, src and alt are attributes

E.g
var myImage = document.getElementById("profile_photo");
myElement.setAttribute("src", "https://placehold.it/200/200");

The above lines of code will set the src attribute on the <img> with the id profile_photo to https://placehold.it/200/200

myElement.src = "https://placehold.it/200/200"; would also do the same as myElement.setAttribute("src", "https://placehold.it/200/200");

*/

// Prompt the user to tell you their name and put their name with a greeting in the <h1>.
var userName = prompt("What's your name?");
document.getElementById("greeting_name").innerHTML = `Hello ${userName}`

// Make the src attribute of your <img> be https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif
document.getElementById("greeting_gif").src = "https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif"

// Add a class attribute of "container" to the #greeting div
document.getElementById("greeting").setAttribute("class", "container");