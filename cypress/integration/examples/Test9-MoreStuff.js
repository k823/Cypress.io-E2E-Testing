// Autocomplete definitions with Cypress methods
/// <reference types="Cypress" />

// Import the created objects
import HomePage from '../../support/pageObjects/HomePage';
import Products from '../../support/pageObjects/Products';


// Implementing Page Object Design patterns to make code more efficient
// IT DOESEN'T WORK WITH ES6 ARROWS
describe("lots of stuff", function() {

    // This code will be executed previously to each test
    // Fails with simple before(like beforeAll)
    beforeEach(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    });

    it("explains each task in comments", function() {
        // Creates new Objects from the ones imported 
        const homePage = new HomePage();
        const products = new Products();
        // Replace the given URL for the newly defined enviroment URL in Cypress json commands 
        cy.visit(Cypress.env('url'));

        // Old code is commented and new substitutes it, functionality it's the same as in Test7  

        // cy.get(':nth-child(1) > .form-control').type(this.data.name);
        homePage.getEditBox().type(this.data.name);
        // cy.get('select').select(this.data.gender);
        homePage.getGender().select(this.data.gender);

        // Assertions
        // cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        // cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        // cy.get('#inlineRadio3').should('be.disabled');
        homePage.getEntrepreneur().should('be.disabled');
        homePage.getShopTab().click();

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });

        products.checkOutButton().click();

        let sum = 0;

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            // cy.log($el.text());
            const actualText = $el.text();
            let result = actualText.split(' ');
            result = result[1].trim();
            sum = Number(sum) + Number(result);
            // cy.log(result);
            // cy.log(sum);
        }).then(function() {
            cy.log(sum);
        });

        cy.get('h3 strong').then(function(element) {
            const amount = element.text();
            let res = amount.split(' ');
            let total = res[1].trim();
            expect(Number(total)).to.equal(sum);
        });
        cy.contains('Checkout').click();
        cy.get('#country').type('ind');
        cy.get('.suggestions > :nth-child(1) > li > a').click();
        cy.get('.checkbox > label').click();
        cy.get('input[type="submit"]').click();
        // Shorthand method to validate text inside a specific area 
        // cy.get('.alert').contains('Success! Thank you! Your order will be delivered in next few weeks :-).');
       
        // Long method to operate with that text
        cy.get('.alert').then(function(element) {
            const actualText = element.text();
            expect(actualText.includes('Success')).to.be.true;
        });
    });
});