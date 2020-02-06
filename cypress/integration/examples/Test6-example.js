// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Handling Tabs and Windows
describe("lots of stuff", () => {
    it("explains each task in comments", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Redirecting to a new URL through a button link
        cy.get('#opentab').then((el) => {
            const URL = el.prop('href');
            cy.log(URL);
            cy.visit(URL);
        });
    });
});