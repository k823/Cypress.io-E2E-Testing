// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Handling Web Tables
describe("lots of stuff", () => {
    it("explains each task in comments", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Getting elements of a table
        cy.get('tbody > tr > td:nth-child(2)')
        .each(($el, index, $list) => {
           const text = $el.text();
           if(text.includes("Python")) {
               cy.get("tr td:nth-child(2)")
               .eq(index)
               .next()
               .then(function(price) {
                   const priceText = price.text();
                   expect(priceText).to.equal('25');
               });
            }
        });
    });
});