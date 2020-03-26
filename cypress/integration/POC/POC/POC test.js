/// <reference types="cypress" />

context('Actions', () => {

  it('Given the climaginaire WebSite', () => {
    cy.visit("http://www.climaginaire.com/");
  });

  it('When I search for "Karmen"', () => {
    cy.get('.input-group').type("Karmen");
    cy.get('.input-group-btn').click();
  });

  it('Then the search retrieve 1 result', () => {
    cy.get('.text-center.ng-scope > .ng-binding').then(($response) => {
      expect($response.text()).to.equal('1 chroniques');
    }); 
    cy.get('[ng-switch-when="Thumbs"] > .row').children().should('have.length', 1);
  });
})

