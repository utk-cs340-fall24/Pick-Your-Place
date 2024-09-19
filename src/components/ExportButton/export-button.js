

document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML from an external file
    function includeHTML(file, elementId) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
          var scripts = document.getElementById(elementId).getElementsByTagName('script');
          for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i].innerText);
          }
        })
        .catch(error => console.log('Error loading file:', error));
    }
    

    // This function will be called when the button is pressed
  document.querySelector("button").addEventListener("click", function() {
    includeHTML('EmailForm/email-form.html', 'email-form');
  });
});