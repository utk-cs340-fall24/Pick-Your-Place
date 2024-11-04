import { japanCities } from "./data.js";
import * as bucketListFunctions from "./bucket_list.js";
const { userBucketList, populateBucketList, addCityCardCheckboxListener, addCityToBLFromOffcanvas, removeCityFromBLFromOffcanvas, loadButtonState, saveButtonState } = bucketListFunctions;

function populateKyotoOffCanvas(city) {
    const offCanvasTitle = document.getElementById("KyotoOffCanvas");
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
                    <div class="centered-nested-accordian-img-container" style="padding-bottom: 10px;">
                      <img src="${spots.img}" class="nested-accordion-img" />
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
                    <div class="centered-nested-accordian-img-container" style="padding-bottom: 10px;">
                      <img src="${place.img}" class="nested-accordion-img" />
                    </div>
                        <p>${place.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="spot">eats</button>
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
                    <div class="centered-nested-accordian-img-container" style="padding-bottom: 10px;">
                      <img src="${lodge.img}" class="nested-accordion-img" />
                    </div>
                        <p>${lodge.blurb}</p>
                        <button class="add-remove-button btn btn-outline-success" data-type-button="lodging">Add</button>
                    </div>
                </div>
            </div>
       `;
    });
}

function populateTokyoOffCanvas(city) {
    const offCanvasTitle = document.getElementById("TokyoOffCanvas");
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
                    <div class="centered-nested-accordian-img-container" style="padding-bottom: 10px;">
                      <img src="${spots.img}" class="nested-accordion-img" />
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
                    <div class="centered-nested-accordian-img-container" style="padding-bottom: 10px;">
                      <img src="${place.img}" class="nested-accordion-img" />
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
                    <div class="centered-nested-accordian-img-container" style="padding-bottom: 10px;">
                      <img src="${lodge.img}" class="nested-accordion-img" />
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

    addCityCardCheckboxListener("KyotoCheckbox", japanCities);
    addCityCardCheckboxListener("TokyoCheckbox", japanCities);
    
    //Provides the Add and Remove button for the entire city
    populateKyotoOffCanvas(japanCities[0]);
    populateTokyoOffCanvas(japanCities[1]);
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
                addCityToBLFromOffcanvas(buttonId, japanCities);
            } else {
                removeCityFromBLFromOffcanvas(buttonId, japanCities);
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

