import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the google WebSite', () => {
  cy.visit("http://www.google.com/");
});

When('I search for {string}', (keyword) => {
  // find search bar, type the keyword and cliek enter
  cy.get('.gLFyf').type(keyword + '{enter}');
});

Then('the search retrieves {string} as results', (keyword) => {
  cy.get(':nth-child(1) > .rc > .r > a').then(($response) => {
    cy.get($response).invoke('attr', 'href').then($href => {
      expect($href).to.equal(keyword);
    });
  })
});

Then('the page {string} exists', (number) => {
  var count = parseFloat(number)+1;
  cy.get(':nth-child('+count+') > .fl').should('be.visible');
});
   