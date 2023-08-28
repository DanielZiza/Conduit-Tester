import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { publishArticle_env } from "../../../../publishArticle.env";

Given('the user navigates to the Mainn page', () => {
	cy.visit('https://angular.realworld.io');
    });

Given('click in a Sign in Button', () => {
	cy.get(publishArticle_env.MainteanceSignButton).click();
});

Given('write an existing account e-mail', () => {
	cy.get(publishArticle_env.ArticleUsernameField).click().type('ferox104@gmail.com');

});

Given('write an valid password', () => {
	cy.get(publishArticle_env.ArticlePasswordField).click().type('abc12345');
});

Given('send submit in Sign in', () => {
	cy.get(publishArticle_env.SubmitButton).click();
});

Given("click in New Article in topside right", () => {
	cy.get(publishArticle_env.NewArticleButton).click();
});

Given("write: THIS IS FANTASTIC LOL", () => {
	cy.get(publishArticle_env.ArticleTitle).click().type('THIS IS FANTASTIC LOL')
});

Given("write in article about: Word Changes", () => {
	cy.get(publishArticle_env.ArticleAbout).click().type('Word Changes')
});

Given("write in body article: lorem ipsum", () => {
	cy.get(publishArticle_env.BodyArticle).click().type('Lorem Ipsum')
});

Given("And write enter tags: Space Word", () => {
	cy.get(publishArticle_env.EnterTags).click().type('Space Word')
});

Then("click in submit article", () => {
	cy.get(publishArticle_env.PublishArticleButton).click();
});