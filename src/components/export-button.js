import {
  argentinaCities,
  franceCities,
  japanCities,
  moroccoCities,
  usCities,
} from "../js/data.js";

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
    if (formData.fullName && formData.email) {
      formSubmitted = true;

      // Hide the modal using Bootstrap's modal method
      $('#exampleModal').modal('hide');

      // Perform AJAX request to send email
      $.ajax({
        type: 'POST',
        url: 'send-email.php',
        data: formData,
        dataType: 'json',
        success: function(response) {
          console.log("Success:", response);
      },
      success: function(response) {
        console.log(response.message); // Displays the success or error message from the response
    },
    error: function(xhr) {
      console.log("An error occurred: " + xhr.responseText); // Handles any AJAX error
  },
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


const allData = [
  ...argentinaCities,
  ...franceCities,
  ...japanCities,
  ...moroccoCities,
  ...usCities,
];

document
  .getElementById("get-list")
  .addEventListener("click", function () {
    //sendBucketList is a button that serves as the trigger when clicked
    sendBucketList(allData);
  });

function sendBucketList(data) {
  console.log("grabbing data.");
  fetch("process_bucket_list.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  
    .then((response) => {
      if (response.status === 200) {
        return response.json(); // Parses JSON response if successful
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => console.log("Data sent successfully:", data))
    .catch((error) => console.error("Error:", error));
}