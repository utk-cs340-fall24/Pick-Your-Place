# Sprint 3 

Nia Maheshwari
pebblefoot31
Pick-Your-Place

### What you planned to do
-  Realign card after search [#61] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/61)
-  Insert Japan Accordion Information [#52] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/52)
-  Make javascript file with object that uses Ajax [#65] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/65)

https://github.com/utk-cs340-fall24/Pick-Your-Place/edit/main/sprint3/nmaheshw/nmaheshw.md

### What you did not do
- I completed issue #61 and #52, and have written the ajax function for issue #65. However, I wouldn't say that the ajax function is complete yet
  because I am still gaining an understanding of the role that the function plays in light of the overall application. As I work with my teammate who
  completed php-related issues in earlier sprints throughout this week and the next, I will modify this function to bring it to its final form. Until 
  then, this function remains in progress, with the first draft of the function having been written by me during this sprint. Hence, I am leaving the 
  issue open for sprint 4.

### What problems you encountered
- A major problem I faced was figuring out the conceptual role of the ajax function in relation to the email that we are sending the user once they have
  assembled their bucket list. For issue #61, I also had to play around with the css and html <divs> placement for a while in order to make the sliding 
  effect work correctly when a particular card is the result of the search.

### Issues you worked on
-  Realign card after search [#61] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/61)
-  Insert Japan Accordion Information [#52] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/52)
-  Make javascript file with object that uses Ajax [#65] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/65)

### Files you worked on
- Pick-Your-Place/src/css/main.css
- Pick-Your-Place/src/js/data.js 
- Pick-Your-Place/src/js/search_bar.js 
- Pick-Your-Place/src/js/ajax.js 


### What you accomplished
(Give a description of the features you added or tasks you accomplished. Provide some detail here. This section will be a little longer than the bulleted lists above) 

During this sprint, I worked on a variety of issues, including writing a function responsible for monitoring proper communication/data fetching from the server, code 
that gives city cards a 'slide to the front' effect when they are the result of a search, and some research to write brief descriptions about two Japanese Cities in 
the database of information. The research issue involved looking up 2 lodging options, touristic destinations, and well-rated eateries in the cities of Kyoto and Tokyo. 
For issue #61, a problem that we noticed during sprint 2 is that the identified city card would just stay in its place on the page before we searched for it. 
This could be inconvenient, in theory, if we had several city cards and it stuck to its position at the bottom of the page- leading to confusion about whether or 
not it actually exists simply because it is not visible unless the user scrolled. Therefore, to add scalability to our search functionality, I made the city card that 
is the result of a search slide over to the very left of the page near the top, so it is visible right under the search bar as the result. 


For the ajax function........

