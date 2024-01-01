describe('ShoppingCart', () => {
    it('passes', () => {
        cy.visit('/');
//      Memilih Product pada Main Page       
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.wait(3000);
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#qty').clear().type(2);
        cy.get('#product-addtocart-button').click(); 
//      melihat isi cart
        cy.wait(3000);        
        cy.get('.showcart').click(); 
        cy.get(':nth-child(7) > .secondary > .action > span').click();    
//      edit cart
        cy.wait(3000);
        cy.get('[id*="cart-5"]').click().clear().type(4);
//      delete cart        
        cy.wait(3000); 
        cy.get('.action-delete').click();       
    })
  })