Feature: API Request Sign in

#STEP ID: CT022
Scenario: Testing to Sign in with a valid account to test the request from API
Given the user navigates to Main page
And click in Sign in Button
When write an existing account e-mail  
And write a valid password 
And submit in Sign in
Then API needs to return the code '200' when Sign in is successful

#STEP ID: CT023
Scenario: Testing to Sign in with an invalid account to test the request from API
Given the user navigates to Main page
And click in Sign in Button
When write an invalid account e-mail  
And write a valid password 
And submit in Sign in
Then API needs to return the code '403' when Sign in is unsuccessful
