import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { publishArticle_env } from "../../../../publishArticle.env";

//limpar a base de dados na aplicação antes de executar

//CT012
Given('click in a Sign in Button', () => {
	cy.get(publishArticle_env.MainteanceSignButton).click();
});

When('write an existing account e-mail', () => {
	cy.get(publishArticle_env.ArticleUsernameField).click().type('ferox104@gmail.com');

});

When('write an valid password', () => {
	cy.get(publishArticle_env.ArticlePasswordField).click().type('abc12345');
});

When('send submit in Sign in', () => {
	cy.get(publishArticle_env.SubmitButton).click();
});

When("click in New Article in topside right", () => {
	cy.wait(1000)
	cy.get(publishArticle_env.NewArticleButton).click();
});

When("write: THIS IS FANTASTIC LOLLLL", () => {
	
	cy.get(publishArticle_env.ArticleTitle).click().type('THIS IS FANTASTIC LOLLLL')
});

When("write in article about: Word Changes", () => {
	cy.get(publishArticle_env.ArticleAbout).click().type('Word Changes')
});

When("write in body article: lorem ipsum", () => {
	cy.get(publishArticle_env.BodyArticle).click().type('Lorem Ipsum')
});

When("write enter tags: Space Word", () => {
	cy.get(publishArticle_env.EnterTags).click().type('Space Word')
});

When("write: THIS IS FANTASTIC LOLL", () => {
	cy.get(publishArticle_env.ArticleTitle).click().type('THIS IS FANTASTIC LOLL')
});

When("click in submit article", () => {
	cy.get(publishArticle_env.PublishArticleButton).click();
});


Then("the delete button article must be displayed", () => {
	cy.get(publishArticle_env.MiddleDeleteArticleButton).should('be.visible');
});

Then("must be displayed 'title can't be blank'", () => {
	cy.get(publishArticle_env.ErrorMessages).contains("title can't be blank");
});

Then("must be displayed 'description can't be blank'", () => {
	cy.get(publishArticle_env.ErrorMessages).contains("description can't be blank");
});

Then("must be displayed 'body can't be blank'", () => {
	cy.get(publishArticle_env.ErrorMessages).contains("body can't be blank");
});

Then("the application should to return the following error response 'title must be unique'", () => {
	cy.get(publishArticle_env.ErrorMessages).contains("title must be unique");
});
