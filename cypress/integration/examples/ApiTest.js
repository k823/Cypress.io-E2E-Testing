/// <reference types="Cypress" />


describe("lots of stuff", function() {

    it("explains each task in comments", function() {
    
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium Automation with Java",
            "isbn": "bcdsss",
            "aisle": "22s7",
            "author": "John foe"
        }).then(function(response) {
            expect(response.body).to.have.property("Msg", "successfully added");
            expect(response.status).to.eq(200);
        });
    });
});