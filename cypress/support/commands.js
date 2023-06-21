// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HomePage from "../support/PageObjects/01_HomePage";
import SearchPage from "../support/PageObjects/02_SearchPage";
import ShoppingCart from "../support/PageObjects/03_ShoppingCartPage";
import CheckOut from "../support/PageObjects/04_CheckoutPage";


Cypress.Commands.add('setupCheckout', () => {
    const homePage = new HomePage();
    const searchPage = new SearchPage();
    const shoppingCart = new ShoppingCart();
    const checkOut = new CheckOut();
  
    // Visit eBay homepage
    cy.visit(Cypress.config().baseUrl);
    homePage.getLocatorBannerAccept();
    homePage.getSearchBoxandType();
  
    // Search for an item
    homePage.clickOnsearchBtn();
    cy.wait(5000);
  
    // Click on the first search result
    searchPage.getFirstElementAndClick().then(($a) => {
      // Extract the fully qualified href property
      const href = $a.prop('href');
      cy.visit(href);
    });
    //this is where the redirect blocks the remaining steps to add the element
    // we assume there are 2 differnt items added at the basket
    shoppingCart.goToCheckOut()
    shoppingCart.continueAsAGuest()
    cy.wait(5000);
    // here have landed on the CheckOut Page with 2 different items added 
    checkOut.openPaymentPage();

  })