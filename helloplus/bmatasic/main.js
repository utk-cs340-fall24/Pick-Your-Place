

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Collect the form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
    };

    // Send the data to your back-end for further processing (e.g., using Fetch API or Axios)
    // For this example, we'll just log the data to the console
    console.log(formData);

    // Add code to generate and send the document based on form data
});
