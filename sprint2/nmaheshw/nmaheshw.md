# Sprint 2 

Nia Maheshwari
pebblefoot31
Pick-Your-Place

### What you planned to do
- Fix navbar functionality [#25] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/25)
- Place the navbar at the top of each country's page in the application [#26] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/26)
- Add greeting to Pick Your Place page (first page of app) [#27] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/27)

### What you did not do
- I completed all the issues that were opened for me.

### What problems you encountered
- A major problem I faced was figuring out the best styling for the greeting. Initially, having it display as a banner across the top seemed like a good idea, 
but it looked awkward after a while. Therefore, I moved it to a semi-opaque, dark banner in the center of the first page rather than at the top and paired
it with the 'pick your place' phrase.

### Issues you worked on
- Fix navbar functionality [#25] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/25)
- Place the navbar at the top of each country's page in the application [#26] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/26)
- Add greeting to Pick Your Place page (first page of app) [#27] (https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/27)


### Files you worked on
- Pick-Your-Place/src/css/main.css
- Pick-Your-Place/src/index.html
- Pick-Your-Place/src/css/index.css
- Pick-Your-Place/src/dropdowns.html
- Pick-Your-Place/src/css/dropdowns.css
- Pick-Your-Place/src/japan.html
- Pick-Your-Place/src/css/japan.css
- Pick-Your-Place/src/morocco.html
- Pick-Your-Place/src/us.html

### What you accomplished
(Give a description of the features you added or tasks you accomplished. Provide some detail here. This section will be a little longer than the bulleted lists above) 
The issue with the centering of the nav bar was fixed after wrapping it in a div of its own and using the "margin: auto" attribute in CSS. That was my first fix in
this sprint, since a all the other country pages depended on a functional navbar as well. After fixing the navbar, I copied its HTML and CSS to all the other country
pages and troubleshooted if that caused any issues to the original formatting of the page. Having done that, I began working on a simple tri-conditional javascript 
function that displays a particular greeting based on the time of day. This felt like a big accomplishment because it is one of the first javascript functions I have
ever written, and it was rewarding to see it working correctly as I opened up the webpage during different times of the day. Once the function was working as expected,
I moved on to styling the greeting in its place in index.html (the opening page). This part definitely needed some experimentation as I figured out where the greeting
fit best in relation to other elements in the page (background image, color overlay, 'Explore!' button). In the end, with some input from my teammate Jay, we agreed 
that it fit best in the center of the page and on a dark, semi-opaque banner that stretched across the entire page. In addition to these specific issues, I made minor
styling changes to the buttons in both the dropdowns.html and index.html pages, with a focus on the hover action.
