import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { signin_env } from '../../../../signin.env';



Then("API needs to return the code '200' when Sign in is successful", () => {
  cy.intercept('POST', '/api/users/login').as('signinRequest');
  cy.wait('@signinRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
  });
});

Then("API needs to return the code '403' when Sign in is unsuccessful", () => {
  cy.intercept('POST', '/api/users/login').as('signinRequest');
  cy.wait('@signinRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(403);
  });
});
