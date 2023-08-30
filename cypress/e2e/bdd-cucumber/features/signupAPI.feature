Feature: API Request Sign up

#STEP ID: CT024
Scenario: Testing to Sign up with a valid requirements to test the request from API
Given the user navigates to the Main page
And click in Sign up
When write a username using valids characters
And write a valid email
And write a valid password
And submit in Sign up
Then API need's to return the code '201' when Sign in is sucessfully

#STEP ID: CT025
Scenario: Testing to Sign up with an existing username to test the request from API
Given the user navigates to the Main page
And click in Sign up 
When write existing username 
And write a valid email  
And write a valid password 
And submit in Sign up
Then API need's to return the code '422' when Sign in is unsucessfull