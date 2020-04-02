/// <reference types="cypress" />

context('Actions', () => {

  it('Given the google WebSite', () => {
    cy.visit("http://www.google.com/");
  });
  
  it('When I search for "climaginaire"', () => {
    // find search bar, type the keyword and cliek enter
    cy.get('.gLFyf').type('climaginaire' + '{enter}');
  });
  
  it('Then the search retrieves "http://www.climaginaire.com/" as results', () => {
    cy.get(':nth-child(1) > .rc > .r > a').then(($response) => {
      cy.get($response).invoke('attr', 'href').then($href => {
        expect($href).to.equal('http://www.climaginaire.com/');
      });
    });
  });
})

