Feature: Publish Article

#STEP ID: CT012
Scenario: Verification of new article with valid account
Given the user navigates to the Mainn page
And click in a Sign in Button
When write an existing account e-mail  
And write an valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOL
And write in article about: Word Changes
And write in body article: lorem ipsum 
And write enter tags: Space Word
Then click in submit article 