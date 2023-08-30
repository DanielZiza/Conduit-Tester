import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { signin_env } from "../../../../signin.env";


When('submit in Sign in', () => {
	cy.get(signin_env.SubmitButton).click();
});

Then("the application should take me to the main page of the account", () => {
	cy.get(signin_env.YourFeedButton).contains("Your Feed");
});

//CT008
Given('write an invalid password', () => {
	cy.get(signin_env.PasswordField).click().type('invalid01');
});

Then("the application should me the error: email or password is invalid", () => {
	cy.get(signin_env.InvalidPassword).contains("email or password is invalid");
});

//CT009
Given('do not write anything in e-mail', () => {
	cy.get(signin_env.UsernameField).click().clear();
});

 Then("the sign up button must be disabled", () => {
   cy.get(signin_env.SubmitButton).should('be.disabled')

});

//CT010
Given('do not write anything in password ', () => {
	cy.get(signin_env.PasswordField).click().type(' ');
});

Then("the application should me the error: password can't be blank", () => {
    cy.get(signin_env.PasswordBlank).contains("password can't be blank");
 
 });

 //CT011
 Given('click in Need an account?', () => {
	cy.get(signin_env.NeedAccount).click();
});

Then("Should switch the page", () => {
	cy.get(signin_env.SignUpPage).contains("Sign up");
});