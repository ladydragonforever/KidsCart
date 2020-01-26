# KidsCart

Interactive lunchbox planner app for busy working parents!

[Live Site](https://kidscart.herokuapp.com/)

## Background and Overview

KidsCart is made to tackle three main challenges faced by working parents:

  * Time-consuming to find good/healthy lunbox receipees for kids
  * Difficult to manually compile the lunchbox receipees into shopping list and organise them for future reuse 
  * Cannot visualize how a normal receipee fit into lunchbox and edit it with an interactive interface

As overview, KidsCart has: 

  * interactive interface for chossing lunchbox preference; 
  * tailored receipees automatically pushed into user's account; 
  * user can add, replace, edit, delete and create lunch box easily.
  
## Functionalities and Highlights 

### Features

Search
 * Our search function allows users to search for lunchbox receipees without being logged in, as well as serach for meals to replace pre-generated ones.
 * The search function is case insensitive and users can search with category and key words. 
 
Food preference selection
 * Users can choose their favorite food category with specific ingredients through an interactive User Interface.
 * Users create forms for each child and add food preference to them
 
SelectedReceipees
 * Based on preference, lunchbox receipees will be automatically generated for each child.
 * Users can add a new one based on search, delete a particular one.

Profile and summary
 * Users can add more or delete child forms
 * Users can create their user profile
 * Users can see the summary of their selected meals, and can see the detail of each meal through links.

### Bonus Features

- Edit and create a new lunch box receipee by the user
- Compiled shopping list
- Integration with Instacart

### Interactive interface for selecting meals
We made the food preference selection an interactive feature. In order to accomplish this, we used javascripts to manipulate the html elements.

![Cu-TEk](https://i.makeagif.com/media/1-26-2020/Cu-TEk.gif)

### Scalable and flexible database achitecture
We have four models where we store the date for meal receipees, user account, user's children, selected meals. In the selected meals collection, we only store the mealID that points to the meal receipees collection instead of storing redundant meal receipee data. And the structure is quite flexible and can face future scalabily.  
![alt text](https://github.com/ladydragonforever/KidsCart/blob/master/Kidscart%20architecture%20backend.png)

## Technologies used

The KidsCart app is built with the MERN stack (MongoDB, Express, React, and Node.js). It features a back-end HTTP API used for retrieving user records in conjunction with client side rendering with React/Redux. Node.js and Express are used for backend routing. Considering the low-latency and scalabitily, we chose MongoDB as database and Mongoose to manage schemas and queries.

- Backend
  * express (the main framework)
  * mongoose (to connect and interact with MongoDB)
  * passport (for authentication)
  * passport-jwt (for JSON web tokens)
  * jsonwebtoken (to generate the tokens)
  * body-parser (to parse data from requests)
  * bcryptjs (for securing the password with hashing and salting)
  * validator (for database validations)
  * nodemon for watching the changes and updating instantly
  
- Frontend
  * React with Redux for state management
  * Axios for sending HTTP requests
  * Styling and animations done with SCSS/CSS
