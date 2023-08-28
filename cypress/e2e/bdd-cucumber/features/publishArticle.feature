Feature: Publish Article

#STEP ID: CT012
Scenario: Verification of new article with valid account
Given the user navigates to the Main page
And click in a Sign in Button
When write an existing account e-mail  
And write an valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOLLLL
And write in article about: Word Changes
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article 
Then the delete button article must be displayed


#STEP ID: CT013
Scenario: Verification of new article without "article title"
Given the user navigates to the Main page
And click in a Sign in Button
When write an existing account e-mail  
And write an valid password
And send submit in Sign in
And click in New Article in topside right
And write in article about: Word Changes
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article 
Then must be displayed 'title can't be blank'

#STEP ID: CT014
Scenario: Verification of new article without "article about"
Given the user navigates to the Main page
And click in a Sign in Button
When write an existing account e-mail  
And write an valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOLLLL
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article 
Then must be displayed 'description can't be blank'

#STEP ID: CT015
Scenario: Verification of new article without "body article"
Given the user navigates to the Main page
And click in a Sign in Button
When write an existing account e-mail  
And write an valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOLLLL
And write in article about: Word Changes
And write enter tags: Space Word
And click in submit article 
Then must be displayed 'body can't be blank'

#STEP ID: CT016
Scenario: Verification of new article without "Tags"
Given the user navigates to the Main page
And click in a Sign in Button
When write an existing account e-mail  
And write an valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOLL
And write in article about: Word Changes
And write in body article: lorem ipsum 
And click in submit article 
Then the delete button article must be displayed

#STEP ID: CT017
Scenario: Verification of duplicate Article Title
Given the user navigates to the Main page
And click in a Sign in Button
When write an existing account e-mail  
And write an valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOLLLL
And write in article about: Word Changes
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article
Then the application should to return the following error response 'title must be unique'