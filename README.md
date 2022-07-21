# zanaty-budget-tracker

Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information.

I updated an existing budget tracker application to allow for offline access and functionality. The user would be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online. I deployed the application to [Heroku].

User Story

AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 
Acceptance Criteria
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
Mock-Up
The following image shows the web application's appearance and functionality:

At the top of a graph, text says, “Your total is: $250,” above options to add or subtract funds and a chart showing total over time.

![Screen Shot 2022-07-19 at 6 43 43 PM](https://user-images.githubusercontent.com/67457318/180116135-819a90e6-23a8-4cca-a38e-7ff9a932f7de.png)

Getting Started

Offline Functionality
I used IndexedDB to add offline functionality. 
I also added a service worker to your application. 


Web Manifest
Because this will be a mobile-first application, I’ll also need to add a web manifest to my application with the app’s metadata, to let users’ devices know what they’re installing and how the app should look on the home screen.

This manifest.json file for this app will contain the following properties:

name

short_name

icons

theme_color

background_color

start_url

display


Developer:

Mohammed Elzanaty
