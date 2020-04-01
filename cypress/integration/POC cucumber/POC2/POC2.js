import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import common from '../common/common.js';

Then('the search retrieves no result for {string}', (keyword) => {
  // title
  cy.get('.med > [aria-level="3"]').then(($response) => {
    cy.log($response.text());
    expect($response.text()).to.contains('Aucun document ne correspond aux termes de recherche spécifiés ('+ keyword +').');
  }); 
});
