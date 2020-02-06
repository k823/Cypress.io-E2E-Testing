/// <reference types="Cypress" />


describe("lots of stuff", function() {

    it("explains each task in comments", function() {
    
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.server();

        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: {
                error: 'Comment does not exist.'
            },
            delay: 1000
        }).as('UpdateComment');

        cy.get('.network-put').click();
        cy.get('.network-put-comment').should('contain', 'Comment does not exist.');
    });
});