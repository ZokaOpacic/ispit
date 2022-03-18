import { createOrg } from "../pageObjects/orgPage"
import { loginPage } from "../pageObjects/loginPage"

describe("create org", () => {
    before("login user", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login")
        loginPage.login('zokaopacic@gmail.com', 'zoka1412')
    })
    it("create new org", () => {
        createOrg.create('ispit')
    })
})