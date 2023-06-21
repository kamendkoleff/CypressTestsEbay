# CypressTestsEbay


This repo contains e2e tests written in Cypress for Ebay.com Checkout Page

## Install
All of this must be installed in your path: 

```node –-version``` 

## Install Packages

```npm install``` 

## Run Tests

```npm run cy:run-all```

## Pattern

Page Object Model is used, despite what Cypress says for improved code readability.
POM pattern is used and every page is represented as a single class 
Test Cases are limited to focus on the Checkout Page
Data is fed from support > data>data.js

## Dependencies 

Non required.

## Notes:

Tests are purely for illustrational purpose. Cypress explicitly does not handle page redirection, and options specified by them are not working scenarios. However the checkout page gives a good case for testing purposes.