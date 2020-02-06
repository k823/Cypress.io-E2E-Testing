// Implementing Page Objects Design Patterns into Cypress

export default class Products {
    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    };
};