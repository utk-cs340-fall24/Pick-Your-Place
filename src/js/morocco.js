import { moroccoCities } from "./data.js";

function createBucketList(cities) {
    const bucketList = {};

    // Group cities by country
    cities.forEach(city => {
        if (!bucketList[city.country]) {
            bucketList[city.country] = []; // Create an array for the country if it doesn't exist
        }
        bucketList[city.country].push(city.name); // Add city to the country's array
    });

    return bucketList; // Return the grouped bucket list
}

function renderBucketList(bucketList) {
    const bucketListContainer = document.getElementById('bucket-list');
    bucketListContainer.innerHTML = ''; // Clear previous content

    for (const country in bucketList) {
        const countryHeader = document.createElement('h3');
        countryHeader.textContent = country; // Country name
        bucketListContainer.appendChild(countryHeader);
    }
}

function populateCasablancaOffCanvas(city) {
    const offCanvasTitle = document.getElementById("CasablancaOffCanvas");
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
                        <button class="add-remove-button btn btn-outline-success">Add</button>
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
                        <button class="add-remove-button btn btn-outline-success">Add</button>
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
                        <button class="add-remove-button btn btn-outline-success">Add</button>
                    </div>
                </div>
            </div>
       `;
    });
}

function populateRabatOffCanvas(city) {
    const offCanvasTitle = document.getElementById("RabatOffCanvas");
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
                        <button class="add-remove-button btn btn-outline-success">Add</button>
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
                        <button class="add-remove-button btn btn-outline-success">Add</button>
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
                        <button class="add-remove-button btn btn-outline-success">Add</button>
                    </div>
                </div>
            </div>
       `;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const bucketList = createBucketList(moroccoCities); 
    renderBucketList(bucketList);
    function addCityToBucketList(city, country) {
        const bucketList = document.querySelector('.oc-bucket-list-group');
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'oc-bucket-list-group-item');
        listItem.innerHTML = `
            <span>${city}, ${country}</span>
            <button class="btn-delete-list-item">Remove</button>
        `;
        bucketList.appendChild(listItem);

        // Add event listener to remove the city from the list
        listItem.querySelector('.btn-delete-list-item').addEventListener('click', function () {
            bucketList.removeChild(listItem);
        });
    }

    // Function to remove a city from the bucket list
    function removeCityFromBucketList(city, country) {
        const bucketListItems = document.querySelectorAll('.oc-bucket-list-group-item');
        bucketListItems.forEach(function (item) {
            if (item.querySelector('span').textContent === `${city}, ${country}`) {
                item.remove();
            }
        });
    }

    // Event listener for Casablanca checkbox
    const CasablancaCheckbox = document.getElementById('CasablancaCheckbox');
    CasablancaCheckbox.addEventListener('change', function () {
        const city = this.getAttribute('data-city');
        const country = this.getAttribute('data-country');

        if (this.checked) {
            // Add city to bucket list
            addCityToBucketList(city, country);
        } else {
            // Remove city from bucket list
            removeCityFromBucketList(city, country);
        }
    });

    // Event listener for Rabat checkbox
    const RabatCheckbox = document.getElementById('RabatCheckbox');
    RabatCheckbox.addEventListener('change', function () {
        const city = this.getAttribute('data-city');
        const country = this.getAttribute('data-country');

        if (this.checked) {
            // Add city to bucket list
            addCityToBucketList(city, country);
        } else {
            // Remove city from bucket list
            removeCityFromBucketList(city, country);
        }
    });
    //Provides the Add and Remove button for the entire city
    populateCasablancaOffCanvas(moroccoCities[0]);
    populateRabatOffCanvas(moroccoCities[1]);
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

