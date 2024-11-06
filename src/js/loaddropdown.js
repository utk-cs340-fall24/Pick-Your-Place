// loadDropdown.js
function loadDropdown() {
    fetch('dropdowns.html')
      .then(response => response.text())
      .then(data => {
        // Create a temporary element to extract only the button content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
  
        // Select the dropdown button container within dropdowns.html
        const dropdownContent = tempDiv.querySelector('.dropdownbutton-container');
        
        // Add the dropdown button content to index.html
        if (dropdownContent) {
          document.getElementById('dropdown-container').innerHTML = dropdownContent.outerHTML;
        } else {
          console.error("Dropdown content not found");
        }
      })
      .catch(error => console.error('Error loading dropdown:', error));
  }