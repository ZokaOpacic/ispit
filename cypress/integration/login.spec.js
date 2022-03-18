import { loginPage } from "../pageObjects/loginPage"
import { logout } from "../pageObjects/logout"

describe("login test", () => {
    it("visit vivifyscrum login", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login")
        cy.url().should('include', '/login')
        logout.logoutBtn.should('not.exist')
        loginPage.login('zokaopacic@gmail.com', 'zoka1412')
        logout.logoutButton()

    })


})