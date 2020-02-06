// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Dummy example passing test
describe('My First Test', () => {
    it('Does not a lot', () => {
        expect(true).to.equal(true);
    });
});

// Dummy example failing test
// describe('My First Failing Test', () => {
//     it('Does not a lot and does it badly', () => {
//         expect(true).to.equal(false);
//     });
// });

// Navigate to an URL and perform actions
describe("First course test", () => {
    // Navigate to URL 
    it("tests first test case", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    });

    // Navigate to URL and select items with CSS selector
    it("gets elements from the webpage", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
        cy.get(".product:visible").should('have.length', 4);
    });
    
    // Add a product to the shopping cart
    it("adds a product to the shopping cart", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
        cy.get(".product").should('have.length', 5);
        cy.get(".product:visible").should('have.length', 4);
        // Parent-child chaining
        cy.get(".products").find('.product').should('have.length', 4);
        // Selects the second item within the 4 items list
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

        // Shorthand method, not recommended for precission and avoiding errors in case something changes
        //cy.get(':nth-child(2) > .product-action > button').click();
    });

    // Click a product by its name 
    it("clicks a product by name reference", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
        // Loops through the elements with given parameters, finds one an clicks on it within the specific scope
        cy.get('.products')
        .find('.product')
        .each(($el, index, $list) => {
            const textItem = $el.find('h4.product-name').text();
            if(textItem.includes('Cashews')) {
                $el.find('button').click();
            }
        });
    });

    // Resolving promises in Cypress manually
    it("manipulates the dom with non cypress commands", () => {
        cy.get('.brand').then((logoElement) => {
            cy.log(logoElement.text());
        });

        // Cypress uses promises under the visible methods, therefore, everything that is not a Cypress method must be handled as a promise
        
        // The below method doesen't work 
        // const logo = cy.get('.brand');
        // cy.log(logo.text);
    });

    // Assigning variables to Cypress to invoque them later
    it("uses declared variables to access the DOM", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
        // Assigns the variable to CSS class to have it accessible later
        cy.get('.products').as('productLocator');
        // Uses the previously declared variable to access the DOM nodes
        cy.get('@productLocator').find('.product').should('have.length', 4);
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
    });

    // Check that the displayed text in the DOM is correct
    it("checks that elements are correctly placed in the DOM", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
        // Print in Cy logs 
        // cy.get('.brand').then((logoElement) => {
        //     cy.log(logoElement.text());
        // });
        // Assert if logo text is correctly displayed 
        cy.get('.brand').should('have.text', 'GREENKART')
    });
});