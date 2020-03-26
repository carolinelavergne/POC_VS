import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the climaginaire WebSite', () => {
  cy.visit("http://www.climaginaire.com/");
});

When('I search for {string}', (bookName) => {
  // find search bar input-group & pass bookname
  cy.get('.input-group').type(bookName);
 
  // click on search
  cy.get('.input-group-btn').click();
});

Then('the search retrieve {string} result', (count) => {
  // title
  cy.get('.text-center.ng-scope > .ng-binding').then(($response) => {
    expect($response.text()).to.equal(count + ' chroniques');
  }); 
  // table response
  cy.get('[ng-switch-when="Thumbs"] > .row').children().should('have.length', count);
});