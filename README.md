# KidsCart

Interactive lunchbox planner app for busy working parents!

[Live Site] (https://kidscart.herokuapp.com/)

## Background and Overview

KidsCart is made to tackle three main challenges faced by working parents:

  * Time-consuming to find good/healthy lunbox receipees for kids
  * Difficult to manually compile the lunchbox receipees into shopping list and organise them for future reuse 
  * Cannot visualize how a normal receipee fit into lunchbox and edit it with an interactive interface

As overview, KidsCart has: 

  * interactive interface for chossing lunchbox preference; 
  * tailored meals automatically pushed into user's account; 
  * user can add, replace, edit, delete and create lunch box easily.
  
## Functionalities and Highlights 

## Technologies used

The KidsCart app is built with the MERN stack (MongoDB, Express, React, and Node.js). It features a back-end HTTP API used for retrieving user records in conjunction with client side rendering with React. Considering the low-latency and scalabitily, we chose MongoDB as database and Mongoose to manage schemas and queries.

Here is an overview of our database achitecture:

![alt text](https://github.com/ladydragonforever/KidsCart/blob/master/Kidscart%20architecture%20backend.png)

- Backend
  * Database: MongoDB
  * Routing, Controllers, and Models: 
  * Auth: BCrypt
- Frontend
React with Redux for state management
jQuery(only for AJAX requests)
jBuilder for backend requests
Styling and animations done with SCSS/CSS
