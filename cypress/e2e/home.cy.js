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
        cy.url().should("equal", "http://localhost:3000/");
        cy.end();
    });

    it("upvote recommendation test", () =>{
        cy.get("#root article:first div:last").should("have.text", "0");
        cy.get("#root article:first div:last svg:first").click();
        cy.get("#root article:first div:last").should("have.text", "1");
        cy.end();
    });

    it("upvote recommendation test", () =>{
        cy.get("#root article:first div:last").should("have.text", "1");
        cy.get("#root article:first div:last svg:last").click();
        cy.get("#root article:first div:last").should("have.text", "0");
        cy.end();
    });

    it("remove recommendation if downvote lower -5", () =>{
        cy.contains("Meu Deus, Meu Senhor, Me ajuda!");
        for(let i = 0; i < 6; i++){
            cy.get("#root article:first div:last svg:last").click();
        }
        cy.contains("Meu Deus, Meu Senhor, Me ajuda!").should('not.exist');
        cy.end();
    });
});  