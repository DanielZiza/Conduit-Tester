import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { signup_env } from "../../../../signup.env";
import { signin_env } from "../../../../signin.env";
import { publishArticle_env } from "../../../../publishArticle.env";


Given('the user navigates to Main page', () => {
    cy.visit('https://angular.realworld.io');
});

Given('click in Sign in Button', () => {
    cy.get(signin_env.SignInButton).click();
});

Given('click in Sign Up', () => {
    cy.get(signup_env.SignUpButton).click();
});

When('write an existing account e-mail', () => {
    cy.get(signup_env.EmailField).click().type('new_teste@gmail.com');
});

When('write an invalid account e-mail', () => {
    cy.get(signup_env.EmailField).click().type('invalid_email@example.com');
});

When('write a valid password', () => {
    cy.get(signin_env.PasswordField).click().type('your_valid_password');
});

Given('write a valid email', () => {
    cy.get(signup_env.EmailField).click().type('new_teste@gmail.com');

});

Given('click in Sign up', () => {
    cy.get(signup_env.SignUpButton).click();
});

When('write a username using valids characters', () => {
    cy.get(':nth-child(1) > .form-control').click().type('segundotesteeeeeeeeeee');
});

When('write existing username', () => {
    cy.get(':nth-child(1) > .form-control').click().type('segundotesteeeeeeeeeee');
});

When('submit in Sign up', () => {
    cy.get(signup_env.SubmitButton).click();
});

When("click in submit article", () => {
    cy.intercept('POST', '/api/articles').as('publishArticleRequest');
    cy.get(publishArticle_env.PublishArticleButton).click();
    cy.wait('@publishArticleRequest');
});

When("click on middle delete button article", () => {
    // Intercept the delete article request and click the delete button
    cy.intercept('DELETE', '/api/articles/*').as('deleteArticleRequest');
    cy.get(publishArticle_env.MiddleDeleteArticleButton).click();
    cy.wait('@deleteArticleRequest');
});