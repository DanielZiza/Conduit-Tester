#STEP ID: CT001

Feature: Sign Up 

Scenario: New account with characteres special in "username"
Given the user navigates to Main page
And click in Sign Up
And write the username with characteres special 
And write a valid email 
And write a valid password 
When click submit signup button 
Then should create a new account


#STEP ID: CT002

Scenario: New account with "username" blank
Given the user navigates to Main page
And click in Sign Up
And do not write anything in username
And write a valid email 
And write a valid password
When click submit signup button
Then should give the error response: username can't be blank

#STEP ID: CT003

Scenario: New account with "email" blank
Given the user navigates to Main page
And click in Sign Up
And write valid username
And do not write anything in email 
And write a valid password
When click submit signup button
Then should give the error response: email can't be blank

#STEP ID: CT004

Scenario: Testing existing e-mail + existing username
Given the user navigates to Main page
And click in Sign Up
And write the existing username
And write the existing email 
And write a valid password
When click submit signup button
Then should give the error response: username has already been taken
Then should give the error response: email has already been taken


#STEP ID: CT005

Scenario: New account with "password" blank
Given the user navigates to Main page
And click in Sign Up
And write a valid username
And write a valid email
And do not write anything in password
When click submit signup button
Then should give the error response: password can't be blank


#STEP ID: CT006
Scenario: Testing Button "Have a account?" 
Given the user navigates to Main page
And click in Sign Up
And click in Have Account?
Then Should switchs the page
