import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { signup_env } from "../../../../signup.env";



Then("API need's to return the code '201' when Sign in is sucessfully", () => {
    
    cy.intercept('POST', '/api/users').as('signupRequest'); 
  
    cy.get(signup_env.SubmitButton).click();
  
    cy.wait('@signupRequest').then((interception) => {
     
      expect(interception.response.statusCode).to.equal(201); 
    
    });
  });

Then("API need's to return the code '422' when Sign in is unsucessfull", () => {
    
      cy.intercept('POST', '/api/users').as('signupRequest'); 
    
      cy.get(signup_env.SubmitButton).click();
    
      cy.wait('@signupRequest').then((interception) => {
       
        expect(interception.response.statusCode).to.equal(422); 
      
      });
  });
  


