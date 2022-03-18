class CreateBoard {
    get boardBtn() {
        return cy.get(".vs-c-modal--features-confirm-button")
    }

    get addBoardSecond() {
        return cy.get(".vs-c-organization-boards__item--add-new")
    }

    get boardTitleInput() {
        return cy.get("input[type='text']").eq(1)
    }

    get nextBtn() {
        return cy.get("[name='next_btn']").contains('Next')
    }

    get scrumBtn() {
        return cy.get(".vs-c-radio-check").eq(0)
    }

    get nextBtn() {
        return cy.get("[name='next_btn']").contains('Next')
    }

    get nextBtn() {
        return cy.get("[name='next_btn']").contains('Next')
    }

    get nextBtn() {
        return cy.get("[name='next_btn']").contains('Next')
    }

    get finishBtn() {
        return cy.get("[name='next_btn']").contains('Finish')
    }

    board(name) {
        this.boardBtn.click()
        this.addBoardSecond.click()
        this.boardTitleInput.type(name)
        this.nextBtn.click()
        this.scrumBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.finishBtn.click()

    }
}

export const createBoard = new CreateBoard()