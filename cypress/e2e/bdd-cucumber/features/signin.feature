Feature: Sign In 

#STEP ID: CT007
Scenario: Login account existing
Given the user navigates to the Main page
And click in Sign in Button
When write a existing account e-mail  
And write a valid password 
And submit in Sign in
Then the application should take me to the main page of the account

#STEP ID: CT008
Scenario: Login with account but invalid "password"
Given the user navigates to the Main page
And click in Sign in Button
When write a existing account e-mail  
And write a invalid password 
And submit in Sign in
Then the application should me the error: email or password is invalid

#STEP ID: CT009
Scenario: Login without "email"
Given the user navigates to the Main page
And click in Sign in Button
When do not write anything in e-mail  
And write a valid password 
And submit in Sign in
Then the application should me the error: email can't be blank

#STEP ID: CT010
Scenario:Login without "password"
Given the user navigates to the Main page
And click in Sign in Button
When write a existing account e-mail  
And do not write anything in password 
And submit in Sign in
Then the application should me the error: password can't be blank

#STEP ID: CT011
Scenario:Button "Need an account?"
Given the user navigates to the Main page
And click in Sign in Button 
And click in Need an account?
Then Should switch the page
