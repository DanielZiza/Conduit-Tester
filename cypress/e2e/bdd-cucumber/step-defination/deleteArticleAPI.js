import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { publishArticle_env } from '../../../../publishArticle.env';


When("write: My second article", () => {

  cy.get(publishArticle_env.ArticleTitle).click().type('My second article')
});

When("write in article about: My life", () => {

  cy.get(publishArticle_env.ArticleAbout).click().type('My life')
});

Then("API need's to return the code '204' when delete is sucessfully", () => {
  cy.wait('@deleteArticleRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(204);
  });
});









