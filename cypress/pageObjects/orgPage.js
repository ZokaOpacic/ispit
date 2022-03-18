class CreateOrg {
    get addOrg() {
        return cy.get(".vs-c-my-organization__header--add-new")
    }

    get nameOrgInput() {
        return cy.get("input[type='text']")
    }

    get nextBtn() {
        return cy.get("[name='next_btn']").contains('Next')
    }

    get nextCreateBtn() {
        return cy.get("[name='next_btn']").contains('Create')
    }

    create(name) {
        this.addOrg.click()
        this.nameOrgInput.type(name)
        this.nextBtn.click()
        this.nextCreateBtn.click()
    }
}

export const createOrg = new CreateOrg()