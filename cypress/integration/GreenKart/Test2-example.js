// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Checkboxes and radio buttons
describe('Operating checkboxes', () => {
    it('marks checkboxes correctly', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Target the checkbox with the selected id, marks it and assert that it has been marked AND asserts the expected value
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        // Uncheck the checked box and assert status
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    });

    it('checks all checkboxes', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('input[type="checkbox"]').check();
    });

    it('checks only given checkboxes', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('input[type="checkbox"]').check(['option1', 'option3']);
    });

    it("operates radio buttons", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('[value="radio2"]').check().should('be.checked');
    });
});

// Dropdown menus
describe('Operating dropdown menus', () => {
    // Static
    it(' operates static dropdown items', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('select').select('option2').should('have.value', 'option2');
    });

    // Dynamic
    it('operates dynamic dropdown items', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'India') {
                $el.click();
            }
        });
    });
});

// Non-visible items
describe("Operating hidden DOM items", () => {
    it('handles non visible items', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    });
});