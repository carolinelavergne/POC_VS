import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the google WebSite', () => {
  cy.visit("http://www.google.com/");
});

When('I search for {string}', (keyword) => {
  // find search bar, type the keyword and cliek enter
  cy.get('.gLFyf').type(keyword + '{enter}');
});
