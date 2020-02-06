// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Handling alerts and PopUps
describe("event changes management", () => {
    it("explains each task in comments", () => {
        // Checking boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        // Window Alert validation
        cy.on('window:alert', (str) => {
            // Relays on Mocha arquitechture to handle certain events
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        cy.on('window:confirm', (str) => {
            // Relays on Mocha arquitechture to handle certain events
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });

        // Disable element to prevent opening in a child window
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        // Check correct URL 
        cy.url().should('include', 'clickacademy');

        // Switch to previous nav URL
        cy.go('back');
    });
});