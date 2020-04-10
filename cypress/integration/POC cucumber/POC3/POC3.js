import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('the climaginaire WebSite', () => {
  cy.visit("http://www.climaginaire.com/");
});

When('I search for {string}', (bookName) => {
  cy.server();
  cy.fixture('karmen_total.json').as('karmenTotal');
  cy.route('GET', '/app/php/DatabaseGet.php?count=true&favorite=false&listChros=true&search=KARMEN', '@karmenTotal');
  cy.route('GET', '/app/php/DatabaseGet.php?favorite=false&listChros=true&max=18&min=0&order=Date&search=KARMEN', 'fixture:karmen_result.json');

  // find search bar input-group & pass bookname
  cy.get('.input-group').type(bookName);
  
  // click on search
  cy.get('.input-group-btn').click();
});

Then('the search retrieves {string} results', (count) => {
  // title
  cy.get('.text-center.ng-scope > .ng-binding').then(($response) => {
    expect($response.text()).to.equal(count + ' chroniques');
   }); 
  // table response
  cy.get('[ng-switch-when="Thumbs"] > .row').children().should('have.length', count);
});