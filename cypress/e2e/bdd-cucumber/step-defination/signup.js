import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { signup_env } from "../../../../signup.env";

//CT001
Given('the user navigates to Main page', () => {
	cy.visit('https://angular.realworld.io');
    })

Given('click in Sign Up', () => {
	cy.get(signup_env.SignUpButton).click();
});

Given('write the username with characteres special', () => {
	cy.get(signup_env.UsernameField).click().type('MaicOnaeeaaaaaaaaaaaaaaaaaaaaaaaa_P$R@f!!');

});

Given('write the valid email', () => {
    cy.get(signup_env.EmailField).click().type('tester000001121211110201090222o0000000001@gmail.com');
	
});

Given('write the valid password', () => {
	cy.get(signup_env.PasswordField).click().type('abc12345');
});

When('click submit signup button', () => {
	cy.get(signup_env.SubmitButton).click();
});

Then('should create a new account', () => {
	cy.get(signup_env.NoArticleHere).contains('No articles are here... yet.');
});


//CT002
Given('do not write anything in username', () => {
	cy.get(signup_env.UsernameField).click().type(' ');
});

Then("should give the error response: username can't be blank", () => {
	cy.get(signup_env.UsernameBlank).contains("username can't be blank");
});


//CT003
Given('write valid username', () => {
	cy.get(signup_env.UsernameField).click().type('Tester1001');
});

Then('do not write anything in email', () => {
	cy.get(signup_env.EmailField).click().type(' ');
});

Then("should give the error response: email can't be blank", () => {
	cy.get(signup_env.EmailBlank).contains("email can't be blank");
});


//CT004
Given('write the existing username', () => {
	cy.get(signup_env.UsernameField).click().type('tester');
});

Given('write the existing email', () => {
    cy.get(signup_env.EmailField).click().type('okay@gmail.com');
});

Then("should give the error response: username has already been taken", () => {
	cy.get(signup_env.UsernameTaken).contains("username has already been taken");
});

Then("should give the error response: email has already been taken", () => {
	cy.get(signup_env.EmailTaken).contains("email has already been taken");
});

//CT005
Given('write a valid username', () => {
	cy.get(signup_env.UsernameField).click().type('Tester1001');
});
Given('do not write anything in password', () => {
	cy.get(signup_env.PasswordField).click().type(' ');
});

Then("should give the error response: password can't be blank", () => {
	cy.get(signup_env.PasswordBlank).contains("password can't be blank");
});

//CT006
Given('click in Have Account?', () => {
	cy.get(signup_env.HaveAccount).click();
});

Then("Should switchs the page", () => {
	cy.get(signup_env.SignInpage).contains("Sign in");
});