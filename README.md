# Digitalibrary
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of content
* [About](#about-the-project)
* [Usage](#usage)
  * [Installation](#Installation)
  * [How to use?](#how-to-use)
* [Issues](#issues)
* [Improvements](#improvements)
* [Built with](#built-with)
* [Acknowledgements](#Acknowledgements)
* [Contact me](#contact-me)
## About the project
Full stack MERN application for searching books using google books api and saving selected results to database. 
## Usage  
### Installation   
Application is deployed on heroku, no installation needed.
Heroku link: [https://digitalibrary1.herokuapp.com/](https://digitalibrary1.herokuapp.com/).    
The repo with code on github: [https://github.com/PavN93/Digitalibrary.git](https://github.com/PavN93/Digitalibrary.git).
### How to use?    
Home page shows the users saved books library in a convenient clickable list that will unfold and show more details on mouse click. Delete button will remove the book from database.    
![screenshot1](./assets/Screenshot-1.png)    
Search page is the place where the user can search for books and save results to database.    
![screenshot1](./assets/Screenshot-2.png)    
The app allows user to switch between both pages and still keep track on the recent search results.     
## Issues    
* The issue I noticed is that despite implementing search on Enter key press, the route won't switch automatically when the event occurs. Attempts to redirect manually only work to certain degree, causing the whole page to reload and thus, loosing the typed search phrase. The feature still works with manual search button, the user gets redirected properly.    
## Improvements    
* First improvement would include fixing an issue mentioned above    
* Another potential improvements would be making the library page not fully re-render on book remove. At the moment, the whole component gets re-rendered causing the library to show its initial state.     
* I have to admit that I'm not the best frontend designer and thus I'd like to improve the page layout and overall styling asap (that is when I will get better at it).    
## Built with
* [Visual Studio Code](https://code.visualstudio.com/)
* [MongoDB](https://www.mongodb.com/)
* [Express js](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [React Bootstrap](https://react-bootstrap.netlify.app/)
* JavaScript
* HTML
* CSS
## Acknowledgements
* [W3Schools](https://www.w3schools.com/)
* [MDN web docs](https://developer.mozilla.org/en-US/)
* [StackOverflow](https://stackoverflow.com/)
## Contact me
Pawel Nawoj  
See my [GitHub Profile](https://github.com/PavN93)    
email: paweln993@gmail.com

