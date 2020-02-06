// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Test application end to end
describe("end to end testing", () => {
    it("performs correctly", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
        cy.get('.products')
        .find('.product')
        .each(($el, index, $list) => {
            const textItem = $el.find('h4.product-name').text();
            if(textItem.includes('Cashews')) {
                $el.find('button').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    });
});
