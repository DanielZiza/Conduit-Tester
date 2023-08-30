Feature: API request Publish Article

#STEP ID: CT026
Scenario: Testing to Publish new Article with a existing account to test the request from API
Given the user navigates to Main page
And click in a Sign in Button
When write an existing account e-mail  
And write a valid password
And send submit in Sign in
And click in New Article in topside right
And write: My first article
And write in article about: World Changes
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article 
Then API needs to return the code '201' when to create an article with user logged
