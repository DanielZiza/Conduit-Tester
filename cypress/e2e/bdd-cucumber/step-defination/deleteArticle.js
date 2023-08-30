import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { publishArticle_env } from "../../../../publishArticle.env";
import { signup_env } from "../../../../signup.env";



When("click on topside delete button article", () => {
	cy.get(publishArticle_env.TopSideDeleteArticleButton).click();
});

When("click in your Profile", () => {
	cy.get(publishArticle_env.Profile).click();
});

When("click in an article", () => {
	cy.get('h1').click({multiple:true});
}); // must have 2 registred articles

Then("must be displayed 'no articles are here...yet'", () => {
	cy.get(signup_env.NoArticleHere).contains('No articles are here... yet.');
});
