import { createBoard } from "../pageObjects/boardPage"
import { createOrg } from "../pageObjects/orgPage"
import { loginPage } from "../pageObjects/loginPage"

describe("create board", () => {
    before("login user", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login")
        loginPage.login('zokaopacic@gmail.com', 'zoka1412')

    })

    it("create new board", () => {
        createOrg.create('ispit')
        cy.url().should('include', '/organizations')
        createBoard.board('10')
        cy.url().should('include', '/boards')

    })
})