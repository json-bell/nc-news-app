# NC News App

Welcome to Newser Friendly, a user-friendly news app. This is the front-end project for Northcoders, and I decided to make sure my app was accessible both without as many

This app integrates the back-end API project found [here](https://github.com/json-bell/nc-news-app).

The hosted version (with Netlify) is located [here](https://newser-friendly.netlify.app/).

## How to use

A user is hardcoded initally, but you can 'Change account' to browse other users. Authentication isn't yet implemented, so any username from the database will allow you to log in. A few possibilities: `grumpy19`, `tickle122`, `jessjelly`, `weegembump`, but more can be found as authors of comments and articles.

You can then browse the articles, comments, and topics (provided by Northcoders/lipsum), vote, delete and post comments under the account you're logged in to.

## Technologies used

The main library used for generating HTML is React, styled with CSS.

Ran with vite, node.js and browser.

(Backend: PostgreSQL and Express)

Main color scheme: https://www.happyhues.co/palettes/4

## How to run locally

Minimal node version: `v22.4.0`

Clone the repo with `git clone https://github.com/json-bell/nc-news-app; cd ./nc-news-app;`

Install dependencies: `npm install`

Run site: `npm run preview` and follow the link `vite` provides.

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)

<!--
General info about your app, a brief description of what the project is, and how to use your app.
 -->
