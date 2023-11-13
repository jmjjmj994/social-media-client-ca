require("dotenv/config")
const email = Cypress.env("EMAIL")
const password = Cypress.env("PASSWORD")


describe("login", () => {
    it("can log a user in", () => {
        cy.visit("https://jmjjmj994.github.io/social-media-client-ca/");
        cy.wait(2000)
        cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success").click().wait(2000);
        cy.get('#loginEmail').type(`${email}`);
        cy.get("#loginPassword").type(`${password}`)


        cy.get(".btn-success").contains("Login").click()
        cy.wait(2000)



        cy.get('[data-auth="logout"]')
            .contains("Logout").click()
        cy.wait(2000)
        
    })

})



/* describe("log user out", () => {
    it("can log a user out", () => {

    })

}) */