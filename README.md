# gopal-site-redesign

This project is for overhauling the current design/UI of https://gloryofpeaceandlove.org/. 

I have used Webpack to automate development processes and manage my assets easily. 

Note: I've simply redesigned the pages that will most likely be used. Once these pages are shipped off to production, I don't anticipate any need to come back to this repository later. After the redesigned website goes live, things like adding new pages and modifying the content of the website will take place in the production environment (much of the content is dynamic, e.g. it comes from databases, and so it isn't feasible to keep modifying the site locally once it goes live in the production environment). 

# Usage

Prerequisites: 
- git
- node.js

Steps to clone project to your own computer: 
1. `https://github.com/gopalfoundation/gopal-site-redesign.git your-project-name` (Run `git@github.com:gopalfoundation/gopal-site-redesign.git your-project-name` if using SSH)
2. `cd your-project-name`
3. `npm install` (This will install all the dependencies needed to build the website).

If you want to view the site in development mode, run `npm run dev` in your terminal. Otherwise, to build the website using Webpack, run `npm run prod` instead. If you wish to change the names of these scripts, you can do so in `package.json` by editing the `scripts` object (e.g. if you want the development mode script to be `npm run start` instead of `npm run dev` as it currently is, replace `"dev"` with `"start"`). 

# Explanation of project

