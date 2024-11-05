import { moroccoCities } from "./data.js";
import * as bucketListFunctions from "./bucket_list.js";
import * as offcanvasPopulationFunctions from "./offcanvas_population.js";
const { userBucketList, populateBucketList, addCityCardCheckboxListener, addCityToBLFromOffcanvas, removeCityFromBLFromOffcanvas, loadButtonState, saveButtonState } = bucketListFunctions;
const { populateAllOffcanvases } = offcanvasPopulationFunctions;


document.addEventListener('DOMContentLoaded', function () {
    populateBucketList();

    addCityCardCheckboxListener("CasablancaCheckbox", moroccoCities);
    addCityCardCheckboxListener("RabatCheckbox", moroccoCities);

    populateAllOffcanvases(moroccoCities);
    
   let alert_box = document.getElementById('alert_box');

    function added_alert(msg){
        let alert = document.createElement('div');
        alert.classList.add('alert');
        alert.innerHTML = msg;
        alert_box.appendChild(alert);

        if (msg.includes('Removed')) {
            alert.classList.add('remove');
        }


        setTimeout(() => {
        alert.remove();
        },3000);

        
    }
    
    //Provides the Add and Remove button for the entire city
    const addRemoveCityButtons = document.querySelectorAll('.add-remove-city');
    addRemoveCityButtons.forEach(function (button) {
        loadButtonState(button);
        button.addEventListener('click', function () {
            const buttonId = button.id;
            const isAdding = button.classList.contains("btn-outline-success");
    
            if (isAdding) {
                addCityToBLFromOffcanvas(buttonId, moroccoCities);
            } else {
                removeCityFromBLFromOffcanvas(buttonId, moroccoCities);
            }
    
            button.classList.toggle("btn-outline-success", !isAdding);
            button.classList.toggle("btn-outline-danger", isAdding);
            button.textContent = isAdding ? "Remove City from Bucket List" : "Add City to Bucket List";
            saveButtonState(button);
            added_alert(isAdding ? "City Added!" : "City Removed");
        });
    });

    //Provides the Add and Remove button for the city information in the nested accordion
    const addRemoveButtons = document.querySelectorAll('.add-remove-button');

    addRemoveButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains("btn-outline-success")) {
                button.classList.remove("btn-outline-success");
                button.classList.add("btn-outline-danger");
                button.textContent = "Remove";
                
                let type = button.getAttribute('data-type-button');
                if (type == 'spot') {
                    added_alert("Attraction Added");
                } else if (type == 'eats') {
                    added_alert("Food Place Added");
                } else if (type == 'lodging') {
                    added_alert("Lodging Added");
                }
            } else {
                button.classList.remove("btn-outline-danger");
                button.classList.add("btn-outline-success");
                button.textContent = "Add";

                let type = button.getAttribute('data-type-button');
                if (type == 'spot') {
                    added_alert("Attraction Removed");
                } else if (type == 'eats') {
                    added_alert("Food Place Removed");
                } else if (type == 'lodging') {
                    added_alert("Lodging Removed");
                }
            }
        });
    });
});

