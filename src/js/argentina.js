import { argentinaCities } from "./data.js";
import * as bucketListFunctions from "./bucket_list.js";
const { userBucketList, populateBucketList, addCityCardCheckboxListener } = bucketListFunctions;


function populateBuenosAiresOffCanvas(city) {
    const offCanvasTitle = document.getElementById("BuenosAiresOffCanvas");
    offCanvasTitle.textContent = `${city.name}, ${city.country}`;

    //Populate Top Spots
    const topSpotsList = document.getElementById("TopSpotsList_1");
    topSpotsList.innerHTML = ""; // Clear previous content
    city.top_spots.forEach((spots, index) => {
        topSpotsList.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#TopSpots-collapse${index}" aria-expanded="false" aria-controls="TopSpots-collapse${index}">
                        ${spots.name}
                    </button>
                </h2>
                <div id="TopSpots-collapse${index}" class="accordion-collapse collapse"
                    data-bs-parent="#TopSpotsList">
                    <div class="accordion-body topSpots-accordion">
                    <div class="centered-nested-accordian-img-container">
                      <img src="img/main/under.jpeg" class="nested-accordion-img" />
                    </div>
                        <p>${spots.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="spot">Add</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Populate Places to Eat
    const placesToEatList = document.getElementById("PlacesToEatList_1");
    placesToEatList.innerHTML = ""; // Clear previous content
    city.places_to_eat.forEach((place, index) => {
        placesToEatList.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#PlacesToEat-collapse${index}" aria-expanded="false" aria-controls="PlacesToEat-collapse${index}">
                        ${place.name}
                    </button>
                </h2>
                <div id="PlacesToEat-collapse${index}" class="accordion-collapse collapse"
                    data-bs-parent="#PlacesToEatList">
                    <div class="accordion-body topSpots-accordion">
                    <div class="centered-nested-accordian-img-container">
                      <img src="img/main/under.jpeg" class="nested-accordion-img" />
                    </div>
                        <p>${place.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="eats">Add</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Populate Lodging
    const lodgingList = document.getElementById("LodgingList_1");
    lodgingList.innerHTML = ""; // Clear previous content
    city.lodging.forEach((lodge, index) => {
        lodgingList.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#Lodging-collapse${index}" aria-expanded="false" aria-controls="Lodging-collapse${index}">
                        ${lodge.name}
                    </button>
                </h2>
                <div id="Lodging-collapse${index}" class="accordion-collapse collapse"
                    data-bs-parent="#LodgingList">
                    <div class="accordion-body topSpots-accordion">
                    <div class="centered-nested-accordian-img-container">
                      <img src="img/main/under.jpeg" class="nested-accordion-img" />
                    </div>
                        <p>${lodge.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="lodging">Add</button>
                    </div>
                </div>
            </div>
       `;
    });
}

function populateMendozaOffCanvas(city) {
    const offCanvasTitle = document.getElementById("MendozaOffCanvas");
    offCanvasTitle.textContent = `${city.name}, ${city.country}`;
 
    //Populate Top Spots
    const topSpotsList = document.getElementById("TopSpotsList_2");
    topSpotsList.innerHTML = ""; // Clear previous content
    city.top_spots.forEach((spots, index) => {
        topSpotsList.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#TopSpots-collapse${index}" aria-expanded="false" aria-controls="TopSpots-collapse${index}">
                        ${spots.name}
                    </button>
                </h2>
                <div id="TopSpots-collapse${index}" class="accordion-collapse collapse"
                    data-bs-parent="#TopSpotsList">
                    <div class="accordion-body topSpots-accordion">
                    <div class="centered-nested-accordian-img-container">
                      <img src="img/main/under.jpeg" class="nested-accordion-img" />
                    </div>
                        <p>${spots.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="spot">Add</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Populate Places to Eat
    const placesToEatList = document.getElementById("PlacesToEatList_2");
    placesToEatList.innerHTML = ""; // Clear previous content
    city.places_to_eat.forEach((place, index) => {
        placesToEatList.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#PlacesToEat-collapse${index}" aria-expanded="false" aria-controls="PlacesToEat-collapse${index}">
                        ${place.name}
                    </button>
                </h2>
                <div id="PlacesToEat-collapse${index}" class="accordion-collapse collapse"
                    data-bs-parent="#PlacesToEatList">
                    <div class="accordion-body topSpots-accordion">
                    <div class="centered-nested-accordian-img-container">
                      <img src="img/main/under.jpeg" class="nested-accordion-img" />
                    </div>
                        <p>${place.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="eats">Add</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Populate Lodging
    const lodgingList = document.getElementById("LodgingList_2");
    lodgingList.innerHTML = ""; // Clear previous content
    city.lodging.forEach((lodge, index) => {
        lodgingList.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#Lodging-collapse${index}" aria-expanded="false" aria-controls="Lodging-collapse${index}">
                        ${lodge.name}
                    </button>
                </h2>
                <div id="Lodging-collapse${index}" class="accordion-collapse collapse"
                    data-bs-parent="#LodgingList">
                    <div class="accordion-body topSpots-accordion">
                    <div class="centered-nested-accordian-img-container">
                      <img src="img/main/under.jpeg" class="nested-accordion-img" />
                    </div>
                        <p>${lodge.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="lodging">Add</button>
                    </div>
                </div>
            </div>
       `;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    populateBucketList();

    addCityCardCheckboxListener("BuenosAiresCheckbox", argentinaCities);
    addCityCardCheckboxListener("MendozaCheckbox", argentinaCities);
    
    //Provides the Add and Remove button for the entire city
    populateBuenosAiresOffCanvas(argentinaCities[0]);
    populateMendozaOffCanvas(argentinaCities[1]);
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
        button.addEventListener('click', function () {
            if (button.classList.contains("btn-outline-success")) {
                button.classList.remove("btn-outline-success");
                button.classList.add("btn-outline-danger");
                button.textContent = "Remove City from Bucket List";
                added_alert("City Added!");
            } else {
                button.classList.remove("btn-outline-danger");
                button.classList.add("btn-outline-success");
                button.textContent = "Add City to Bucket List";
                added_alert('City Removed');
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

