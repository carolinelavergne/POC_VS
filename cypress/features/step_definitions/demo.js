import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as demo from '../fragments/demo.js';


Given('the climaginaire WebSite', () => {
  cy.visit("http://www.climaginaire.com/");
});


When('I search for "{string}"', (bookName) => {
  // finc search bar input-group & pass bookname
  cy.get('.input-group').type(bookName);
 
  // click on search
  cy.get('.input-group-btn').click();
});

Then('the search retrieve {integer} result for "{string}"', (count, bookName) => {
  // finc search bar input-group & pass bookname
  cy.get('.input-group').type(bookName);
 
  // click on search
  cy.get('.input-group-btn').click();
});

