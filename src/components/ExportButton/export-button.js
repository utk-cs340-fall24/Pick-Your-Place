

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
});

$(document).ready(function(){
  let formSubmitted = false;

  // Prevent attaching multiple event listeners
  $("#userForm").off('submit');

  // Listen for the form submission
  $("#userForm").on('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    // Extract the form data
    const fullName = $('#fullName').val();
    const email = $('#email').val();

    // Check if the data is not empty (basic validation)
    if (fullName && email) {
      formSubmitted = true;
      console.log('Full Name:', fullName);
      console.log('Email:', email);

      // Hide the modal using Bootstrap's modal method
      $('#exampleModal').modal('hide');
    } else {
      alert('Please fill in all the fields.');
    }
  });

  // Optional: You can trigger additional logic after the modal is hidden
  $("#exampleModal").on('hidden.bs.modal', function() {
    if (formSubmitted) {
      alert('Please check email');
      formSubmitted = false; // Reset the flag
    }
  });
});