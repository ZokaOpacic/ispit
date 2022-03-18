class Logout {

    get userName() {
        return cy.get('.vs-c-user-name')
    }

    get profile() {
        return cy.get("a[href='/account/settings']")
    }

    get logoutBtn() {
        return cy.get(".vs-c-logout")
    }

    logoutButton() {
        this.userName.click()
        this.profile.click()
        this.logoutBtn.click()
    }
}

export const logout = new Logout()