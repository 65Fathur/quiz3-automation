describe('Checkout', () => {
    it('passes', () => {
//      LOGIN        
        cy.visit('/');
        cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a').click();
        cy.get('#email').click();
        cy.get('#email').type(Cypress.env('USER'));
        cy.get('#pass').click();
        cy.get('#pass').type(Cypress.env('PASS'));
        cy.get('#send2').click();  
        cy.get('.block-content:nth-child(2) > #login-form').submit();
        cy.url().should('contains', '/');  
//      Pilih Product        
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.wait(3000); 
        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#qty').clear().type(2);
        cy.get('#product-addtocart-button').click();    
//      Melihat isi Keranjang        
        cy.wait(3000);        
        cy.get('.showcart').click(); 
        cy.get(':nth-child(7) > .secondary > .action > span').click(); 
//      Checkout 
        cy.wait(3000);       
        cy.get('.checkout-methods-items > :nth-child(1) > .action').click();  
        cy.wait(3000); 
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click();       
        cy.get('.button').click();
        cy.wait(3000); 
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
    })
  })
  