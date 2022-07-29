/// <reference types="cypress" />

import recommendationBody from "./factories/recommendationFactory";

describe("Home page tests", () => {
    it("should register a recommendation successfully", () => {
        const body = recommendationBody();
        cy.handleCreateRecommendation
        cy.visit("http://localhost:3000/");
        cy.get("input").first().type(body.name);
        cy.get("input").last().type(body.youtubeLink);
        cy.intercept("POST", "/recommendations").as("postRecommendation");
        cy.get("Button").first().click();
        cy.wait("@postRecommendation");
        cy.contains(body.name).should("to.have.length", 1);
        cy.contains(body.name).should("be.visible");
        cy.url().should("equal", "http://localhost:3000/")
    });
});  