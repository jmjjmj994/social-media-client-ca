require("dotenv/config")
const email = Cypress.env("EMAIL")
const password = Cypress.env("PASSWORD")


describe("no.wikipedia.org", () => {
    it("can search for Noroff", () => {
        cy.visit("https://jmjjmj994.github.io/social-media-client-ca/");
        cy.wait(1000)
        cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success").click().wait(1000);
        cy.get('#loginEmail').type(`${email}`);
        cy.get("#loginPassword").type(`${password}`)


        cy.get(".btn-success").contains("Login").click()
    })
})
