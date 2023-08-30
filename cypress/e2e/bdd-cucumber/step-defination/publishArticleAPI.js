import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { publishArticle_env } from '../../../../publishArticle.env';


When("write: My first article", () => {
	
	cy.get(publishArticle_env.ArticleTitle).click().type('My first article')
});

When("write in article about: World Changes", () => {
	
	cy.get(publishArticle_env.ArticleAbout).click().type('World Changes')
});


Then("API needs to return the code '201' when to create an article with user logged", () => {

    cy.intercept('POST', '/api/articles').as('publishArticleRequest');
  
    cy.get(publishArticle_env.MiddleDeleteArticleButton).should('be.visible');
  
    cy.wait('@publishArticleRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
    });
  });

  
  
  
  
  
  


