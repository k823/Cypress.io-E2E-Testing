// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Handling Hooks
// IT DOESEN'T WORK WITH ES6 ARROWS
describe("lots of stuff", function() {

    // This code will be executed previously to each test
    // Fails with before
    beforeEach(function() {
        cy.fixture('example').then(function(data) {
            // Here we get the fixture example and store it in a global variable to make it visible through the file
            this.data = data;
        });
    });

    // Navigate through the webpage and interact with its elements
    it("explains each task in comments", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        // Here we use the variable defined previously to get the data that we will be passing to the page 
        cy.get(':nth-child(1) > .form-control').type(this.data.name);
        cy.get('select').select(this.data.gender);
        // Assertions
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');
    });

    // Operating with child webpages
    it("explains each task in comments", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        // Navigate to a new URL through clicking a button 
        cy.get(':nth-child(2) > .nav-link').click();
        // Find an element into the new webpage navigating through cards 
        cy.get('h4.card-title').each(($el, index, $list) => {
            // Defines what to look for and seeks it
            if($el.text().includes('Blackberry')) {
                // Clicks into the found element
                cy.get('button.btn.btn-info').eq(index).click();
            };
        });
    });

    // Using custom generated commands to extend functionality
    it("explains each task in comments", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(':nth-child(2) > .nav-link').click();
        // This command has been manually created in '../support/commands.js'
        // We just pass the name we're looking for and the logic executes automatically
        cy.selectProduct('Blackberry');
        cy.selectProduct('Nokia Edge');
    });

    // Doing the same with parametrized object tests 
    it("explains each task in comments", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(':nth-child(2) > .nav-link').click();
        
        // Gets data from fixture array brought in line 11 and loops through it to access all the array properties
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
            // Add .debug() for debugging
        });
    });
});





