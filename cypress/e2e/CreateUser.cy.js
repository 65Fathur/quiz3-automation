describe('Create User', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a').click();
    cy.get('#firstname').click();
    cy.get('#firstname').type(Cypress.env('FIRSTNAME'));
    cy.get('#lastname').click();
    cy.get('#lastname').type(Cypress.env('LASTNAME'));
    cy.get('#email_address').click();
    cy.get('#email_address').type(Cypress.env('USER'));
    cy.get('#password').type(Cypress.env('PASS'));
    cy.get('#password-confirmation').click();
    cy.get('#password-confirmation').type(Cypress.env('PASS'));
    cy.get('.fieldset:nth-child(3)').click();
    cy.get('.submit > span').click();
    cy.url().should('contains', 'customer/account/');
//validate user sudah terbuat    
    cy.get('.box-content > p').dblclick();
    cy.get('.box-content > p').click();
  })
})
