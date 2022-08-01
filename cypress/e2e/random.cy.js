describe("Random page tests", () => {
    it("must go to random page", () => {
        cy.visit("http://localhost:3000/");
        cy.contains("Random").click();
        cy.url().should("equal", "http://localhost:3000/random");
        cy.end();
    })
    it("should display only one", () => {
        cy.get("article").then(($recommendations) => {
            expect($recommendations).to.have.length.of.at.most(1);
        });
        cy.url().should("equal", "http://localhost:3000/random");
        cy.end();
    })
});