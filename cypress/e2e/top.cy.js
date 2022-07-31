describe("Top page tests", () => {
    it("10 recommendations should appear on the display", () => {
        cy.visit("http://localhost:3000/");
        cy.contains("Top").click();
        cy.get("article").then(($recommendations) => {
            expect($recommendations).to.have.length.of.at.most(10);
          });
        cy.end();
    });

    it("must list 10 recommendations in descending order", () => {
        cy.get("#root article:first div:nth-child(2) div:first").click();
        cy.get("#root article:first div:last").should("have.text", "50");
        cy.get("#root article:last div:last").should("have.text", "9");
        cy.url().should("equal", "http://localhost:3000/top");
        cy.end();
    });
});