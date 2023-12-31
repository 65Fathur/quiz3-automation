describe('Login', () => {
    it('passes', () => {
        cy.visit('/');
        cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a').click();
        cy.get('#email').click();
        cy.get('#email').type(Cypress.env('USER'));
        cy.get('#pass').click();
        cy.get('#pass').type(Cypress.env('PASS'));
        cy.get('#send2').click();  
        cy.get('.block-content:nth-child(2) > #login-form').submit();
        cy.url().should('contains', '/');        
    })
  })
  