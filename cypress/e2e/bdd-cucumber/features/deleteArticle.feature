Feature: Delete Article

#STEP ID: CT018
Scenario: Creation of new Article and delete him using the middle button page
Given the user navigates to Main page
And click in a Sign in Button
When write an existing account e-mail  
And write a valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOL
And write in article about: Word Changes
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article 
And click on middle delete button article 
Then must be displayed 'no articles are here...yet' 


Scenario: Creation of new Article and delete him using the topside button page
Given the user navigates to Main page
And click in a Sign in Button
When write an existing account e-mail  
And write a valid password
And send submit in Sign in
And click in New Article in topside right
And write: THIS IS FANTASTIC LOL
And write in article about: Word Changes
And write in body article: lorem ipsum 
And write enter tags: Space Word
And click in submit article 
And click on topside delete button article 
Then must be displayed 'no articles are here...yet' 

Scenario: Choose an article already created and delete using the middle button page
Given the user navigates to Main page
And click in a Sign in Button
When write an existing account e-mail  
And write a valid password
And send submit in Sign in
And click in your Profile
And click in an article
And click on middle delete button article
Then must be displayed 'no articles are here...yet' 



Scenario: Choose an article already created and delete using the topside button page
Given the user navigates to Main page
And click in a Sign in Button
When write an existing account e-mail  
And write a valid password
And send submit in Sign in
And click in your Profile
And click in an article
And click on topside delete button article  
Then must be displayed 'no articles are here...yet' 
