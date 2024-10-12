document.addEventListener('DOMContentLoaded', function () {
    //Provides the Add and Remove button for the entire city
    const addRemoveCityButtons = document.querySelectorAll('.add-remove-city');

    addRemoveCityButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains("btn-outline-success")) {
                button.classList.remove("btn-outline-success");
                button.classList.add("btn-outline-danger");
                button.textContent = "Remove City from Bucket List";
            } else {
                button.classList.remove("btn-outline-danger");
                button.classList.add("btn-outline-success");
                button.textContent = "Add City to Bucket List";
            }
        });
    })

    //Provides the Add and Remove button for the city information in the nested accordion
    const addRemoveButtons = document.querySelectorAll('.add-remove-button');

    addRemoveButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains("btn-outline-success")) {
                button.classList.remove("btn-outline-success");
                button.classList.add("btn-outline-danger");
                button.textContent = "Remove";
            } else {
                button.classList.remove("btn-outline-danger");
                button.classList.add("btn-outline-success");
                button.textContent = "Add";
            }
        });
    });
});
