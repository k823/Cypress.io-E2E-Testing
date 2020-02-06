// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Handling Mouse Hover
describe("lots of stuff", () => {
    it("explains each task in comments", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Mouse hover events 
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
        // Force click when element is not visible by looking directly at all hidden elements in the DOM
        // cy.contains('Top').click({ force: true });
    });
});