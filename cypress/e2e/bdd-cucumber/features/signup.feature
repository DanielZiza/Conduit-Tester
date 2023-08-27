#STEP ID: CT001

Feature: Sign Up 

Scenario: New account with characteres special in "username"
Given the user navigates to Main page
And click in Sign Up
And write the username with characteres special 
And write the valid email 
And write the valid password 
When click submit signup button 
Then should create a new account


#STEP ID: CT002

Scenario: New account with "username" blank
Given the user navigates to Main page
And click in Sign Up
And do not write anything in username
And write the valid email 
And write the valid password
When click submit signup button
Then should give the error response: username can't be blank

#STEP ID: CT003

Scenario: New account with "email" blank
Given the user navigates to Main page
And click in Sign Up
And write valid username
And do not write anything in email 
And write the valid password
When click submit signup button
Then should give the error response: email can't be blank