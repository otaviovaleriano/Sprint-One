## Overview

**Project Title**: To-Do Web App

**Project Description**: Web App developed in ReactJs and Firestore (Firebase Database), to keep track of a personal To-Do list.

**Project Goals**: Develop a simple web page with react that will allow the user to Create, Read, Update, and Delete To-Do items from the list, that is stored in a collection in a Cloud Database - Firestore.

## Instructions for Build and Use

Steps to build and/or run the software:

1. Clone the repository
2. in the folder you cloned, run in the terminal: npm install and run npm i firebase@^8.10.0
3. Create a Firebase project at the Firebase Console -> https://console.firebase.google.com/u/1/
4. With the information provided by Firebase, replace the information in the variable "firebaseConfig" on firebase.js
5. Run/build the project entering "npm start" in the terminal

Instructions for using the software:

1. After entering "npm start," it will open automatically a page on [http://localhost:3000](http://localhost:3000) 
2. Type a To-Do item, press enter or click "Add To-do." The item will be added automatically to the list and collection in the database.
3. The item will be displayed bellow the input bar with options to edit the To-Do or delete it.
4. When clicking in the pen icon, it will transform the item into an input text field, where you can edit it and save the to-do item. The update occur automatically and in real-time with the database.
5. When clicking in the trash can icon, it will delete/remove the item from the list and from the database collection.

## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

*  Vs Code
*  Node.js v20.12.2.
*  firebase@^8.10.0  

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Cloud Firestore](https://firebase.google.com/docs/firestore)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* [Youtube ](www.youtube.com)


## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] "Done" status feature for the tasks 
* [ ] Deadline feature 
* [ ] Authentication
* [ ] Reminder Feature to send emails to the email used on the authentication.
