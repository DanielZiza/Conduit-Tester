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
	cy.get(signup_env.UsernameField).click().type('MaicOnaaaaaaaaaaaa_P$R@f!!');

});

Given('write the valid email', () => {
    cy.get(signup_env.EmailField).click().type('tester10000000000001@gmail.com');
	
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


Then(/^click in Sign Up$/, () => {
	return true;
});

Then(/^write valid username$/, () => {
	return true;
});

Then(/^do not write anything in email$/, () => {
	return true;
});

Then(/^should give the error response: email can't be blank$/, () => {
	return true;
});
