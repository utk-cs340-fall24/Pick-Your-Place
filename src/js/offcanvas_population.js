function populateTopSpots(city, topSpotsListElement) {
    city.top_spots.forEach((spots, index) => {
        topSpotsListElement.innerHTML += `
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
}

function populatePlacesToEat(city, placesToEatListElement) {
    city.places_to_eat.forEach((place, index) => {
        placesToEatListElement.innerHTML += `
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
}

function populateLodging(city, lodgingListElement) {
    city.lodging.forEach((lodge, index) => {
        lodgingListElement.innerHTML += `
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




function populateOffcanvas(city, index) {
    const cityName = city.name.replace(/\s+/g, '');
    const offCanvasTitle = document.getElementById(`${cityName}OffCanvas`);
    if(offCanvasTitle) {
        offCanvasTitle.textContent = `${city.name}, ${city.country}`;
    }
    
    const topSpotsList = document.getElementById(`TopSpotsList_${index + 1}`);
    const placesToEatList = document.getElementById(`PlacesToEatList_${index + 1}`);
    const lodgingList = document.getElementById(`LodgingList_${index + 1}`);

    if(topSpotsList && placesToEatList && lodgingList) {
        populateTopSpots(city, topSpotsList);
        populatePlacesToEat(city, placesToEatList);
        populateLodging(city, lodgingList);
    }
}

export function populateAllOffcanvases(countriesCities) {
    for(let i = 0; i < countriesCities.length; i++) {
        populateOffcanvas(countriesCities[i], i);
    }
}