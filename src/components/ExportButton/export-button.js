

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
    event.preventDefault();
    
    // Get form data
    var formData = {
      fullName: $('#fullName').val(),
      email: $('#email').val(),
    }

    console.log('Full Name:', formData.fullName);
    console.log('Email:', formData.email);


    // Check if the data is not empty (basic validation)
    if (fullName && email) {
      formSubmitted = true;

      // Hide the modal using Bootstrap's modal method
      $('#exampleModal').modal('hide');

      // Perform AJAX request to send email
      $.ajax({
        type: 'POST',
        url: 'sendEmail.php',
        data: formData,
        dataType: 'json',
        success: function(response) {
          // Handle success response
        if (response.success) {
          $('#response').html('<p>Email sent successfully!</p>');
          } else {
            $('#response').html('<p>Error: ' + response.message + '</p>');
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // Handle error response
          $('#response').html('<p>An error occurred: ' + textStatus + '</p>');
        }
      });
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