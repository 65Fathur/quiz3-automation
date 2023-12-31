describe('ChooseProduct', () => {
    it('passes', () => {
        cy.visit('/');
//      Memilih Product pada Main Page       
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#qty').clear().type(2);
        cy.get('#product-addtocart-button').click();     

    })
  })