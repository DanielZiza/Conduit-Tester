Feature: Delete Article

#STEP ID: CT029
Scenario: Testing to creation of new Article with a existing account and delete him to test the request from API
Given the user navigates to Main page
And click in a Sign in Button
When write an existing account e-mail  
And write a valid password
And send submit in Sign in
And click in New Article in topside right
And write: My second article
And write in article about: My life
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article 
And click on middle delete button article 
Then API need's to return the code '204' when delete is sucessfully 