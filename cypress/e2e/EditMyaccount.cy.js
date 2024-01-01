describe('Edit My Account', () => {
    it('passes', () => {
        cy.visit('/');
        cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a').click();
        cy.get('#email').click();
        cy.get('#email').type(Cypress.env('USER'));
        cy.get('#pass').click();
        cy.get('#pass').type(Cypress.env('PASS'));
        cy.get('#send2').click();  
        cy.visit('customer/account/')
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click();
//edit account customer
        cy.url().should('contains', 'customer/account/edit/');
        cy.get('#firstname').click();
        cy.get('#firstname').clear().type(Cypress.env('FIRSTNAME'));
        cy.get('#lastname').clear().type(Cypress.env('LASTNAME'));
        cy.get('.save > span').click();
//edit account address        
        cy.url().should('contains', 'customer/account/');
        cy.get('#maincontent > div.columns > div.column.main > div.block.block-dashboard-addresses > div.block-content > div.box.box-billing-address > div.box-actions > a > span').click();
        cy.get('#street_1').click();
        cy.get('#street_1').clear().type(Cypress.env('JALAN1'));
        cy.get('#street_2').clear().type(Cypress.env('JALAN2'));
        cy.get('#company').click();
        cy.get('#company').clear().type(Cypress.env('PERUSAHAAN'));
        cy.get('#telephone').clear().type(Cypress.env('NOHP'));
        cy.get('#city').click();
        cy.get('#city').clear().type(Cypress.env('KOTA'));
        cy.get('.fieldset:nth-child(2)').click();
        cy.get('#country').type('ID');
        cy.get('#city').click();
        cy.get('#region').click();
        cy.get('#region').clear().type(Cypress.env('PROVINSI'));
        cy.get('#zip').clear().type(Cypress.env('KODEPOS'));
        cy.get('.save > span').click();
        cy.url().should('contains', 'customer/address/index/');     
    })
  })


