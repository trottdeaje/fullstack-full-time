# Homework 4: Making a static "Best 2019 Pride Parade Photo" voting survey web page dynamic using Firebase and localStorage

## Overview
With APIs, you learned how to connect your web apps to the outside world and make them dynamic. However, with just third-party APIs, you can only show what those APIs give you. Thanks to data persistence services like Firebase RealTime Database, you now know how to quickly use a Back-End-As-A-Service tool to persist data and use it in your application. You now also know how to use client-side persistence solutions like `localStorage`, `sessionStorage` and `cookies` to save information your web applications need to persist.


```This week, you will be given a static web page and you will make it dynamic using Firebase and localStorage.```

## Problem description & page overview
A client had six 2019 Pride Parade photos and wanted to know which one users liked the most. Therefore they contracted a developer to build them a "Best 2019 Pride Parade Photo" voting survey. However, the developer they contracted for the job was an amateur. The developer did an O.K job structuring and styling the page. But, as you can see in the gif below and by opening the `index.html` file in the starter files, all the first developer did was build a static page with a few undesireable bugs: 
* Clicking the vote button doesn't work at all, it doesn't show the user how many votes the photo had
* Instead of showing the vote results, clicking the vote button gets rid of the vote button all together. Even refreshing the page doesn't fix the page.

![Best 2019 pride parade photo bugs overview](./best-pride-parade-photo-vote-page-bugs-overview.gif)


This client heard that you are a great developer and wants you to fix their "Best 2019 Pride Parade Photo" voting survey page. These are the page overview requirements as you can see in page overview the gif below:
* Clicking the vote button should show the vote results where the button was
* After a user has voted once, the page shouldn't allow them to vote again even if they refresh their page or close their page and re-open it
* The page should show the voting results from all users in real-time

## Page overview

![Best 2019 pride parade photo page overview](./best-pride-parade-photo-page-overview.gif)


The focus on this homework will be hooking your web application to Firebase RealTime Database service and using Javascript and jQuery to dynamically change the DOM to fix the above mentioned bugs. 

You will be given starter files to start with. Before doing anything, your responsibility will be to open the given web page in your browser, understand what code in those starter files do and how it does it. Only after you understand what that code does and how it does it, should you start modifying and adding to it.

Throught this homework you will learn an important skill that will be valuable to you as a web developer. Not all the times will you be asked to build an app from scratch. Most of the times, you will be asked to fix a bug, improve a feature by changing something around, or adding a new feature to an existing application. In these cases, to accomplish the given objective, you will be required to first understand how the existing application is built and what the code other developers wrote does.

As shown in the page overview gif above, in this homework you are to build a page that allows the user to vote for their favorite 2019 Pride Parade photo. The user can only vote once. After the user has voted, the page will always show them each picture vote results. When another user somewhere else votes, your web application should update the vote results in real time. 


## Instructions

1. File structure
    * On Github, create a new repository and name it `hmwk-4-best-pride-photo-vote`. Clone this repo to your computer
    
    * Copy the content of the [hmwk-4-best-pride-parade-photo-vote-starter-files directory](./hmwk-4-best-pride-parade-photo-vote-starter-files) and paste them into your `hmwk-4-best-pride-photo-vote` directory using the terminal

2. Page layout
    - **`index.html`** & **`styles.css`**
        * You do not need to modify these files unless you want to customize your page to look how you want.

    - **`scripts.js`**
        * The `scripts.js` file has starter code that the previous developer wrote and `YOUR CODE GOES HERE` sections for you to add your code to make the page behave how the client wants. 

3. Deployment
    * Deploy your portfolio page to [Github pages](https://pages.github.com/) and submit your project link in the [`#hmwk-4-best-pride-parade-photo-vote` Slack channel](https://app.slack.com/client/TLKSMB8R4/CP51XL9M0)


4. HAVE FUN AND HELP EACH OTHER OUT!

5. BONUS
    * Currently, this web page uses localStorage to persist whether the user has already voted and prevent them from voting again. When you have finished achieving all requirements of the homework, use this [link](https://www.w3schools.com/js/js_cookies.asp) as a resource and update your page to use a cookie instead of localStorage.
