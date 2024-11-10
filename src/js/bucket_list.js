export let userBucketList = [];

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

// Load userBucketList from localStorage if it exists
const savedBucketList = localStorage.getItem('userBucketList');
if (savedBucketList) {
    userBucketList = JSON.parse(savedBucketList);
}

// Function to save userBucketList to localStorage
export function saveBucketList() {
    try {
        localStorage.setItem('userBucketList', JSON.stringify(userBucketList));
    } catch (error) {
        console.error('Failed to save userBucketList to localStorage:', error);
    }
} 

//Function to remove a city from the bucket list from the display
export function removeCityFromDOM(city, country) {
    const bucketListItems = document.querySelectorAll('.oc-bucket-list-group-item');
    bucketListItems.forEach(function (item) {
        const span = item.querySelector('span');
        if (span && span.textContent === `${city}, ${country}`) {
            item.remove();
        }
    });
}

//Adds the city to the persistent user bucket list
export function addCityToBL(city, country, countryCities) {
    const cityObject = countryCities.find(item => item.name == city && item.country == country);
    if(cityObject) {
        userBucketList.push(cityObject);
        saveBucketList();
        populateBucketList();
    }
}

//Removes the city from the persistent user bucket list
export function removeCityFromBL(city, country) {
    if(userBucketList.length == 0) { return; }
    const index = userBucketList.findIndex(item => item.name === city && item.country === country);
    if(index !== -1 ) {
        userBucketList.splice(index, 1);
        removeCityFromDOM(city, country);
        saveBucketList();
        populateBucketList();
    }
}

//Populates the bucket list based on the person's selections
export function populateBucketList() {
    const bl_group = document.querySelector('.list-group.oc-bucket-list-group');
    userBucketList.forEach(cityObject => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'oc-bucket-list-group-item');
        listItem.innerHTML = `
            <span>${cityObject.name}, ${cityObject.country}</span>
            <button class="btn-delete-list-item">Remove</button>
        `;
        // Check if the item already exists in the innerHTML
        const exists = Array.from(bl_group.querySelectorAll('li')).some(item => 
            item.querySelector('span').textContent === `${cityObject.name}, ${cityObject.country}`
        );

        if (!exists) {
            bl_group.appendChild(listItem);

            listItem.querySelector('.btn-delete-list-item').addEventListener('click', function () {
                removeCityFromBL(cityObject.name, cityObject.country);
                // Generate checkboxId by removing spaces
                const checkboxId = `${cityObject.name.replace(/\s+/g, '')}Checkbox`;
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.checked = false; // Uncheck the checkbox
                }
            });
        }

         // Ensure checkbox is checked if city is in the bucket list
         const checkboxId = `${cityObject.name.replace(/\s+/g, '')}Checkbox`;
         const checkbox = document.getElementById(checkboxId);
         if (checkbox) {
             checkbox.checked = true; // Check the checkbox
         }
 
        
    });
}

export function addCityCardCheckboxListener(checkboxId, countryCities) {
    const checkbox = document.getElementById(checkboxId);
    checkbox.addEventListener('click', function () {
        const city = this.getAttribute('data-city');
        const country = this.getAttribute('data-country');
        if (this.checked) {
            // Add city to bucket list
            addCityToBL(city, country, countryCities);
            populateBucketList();
            added_alert("City Added!");
        } else {
            // Remove city from bucket list
            removeCityFromBL(city, country);
            populateBucketList();
            added_alert("City Removed!");
        }
    });
}

export function addCityToBLFromOffcanvas(buttonId, countryCities) {
    const parts = buttonId.split(/[~\-]/);
    let city, country;
    console.log(parts);

    if (parts.length === 2) {
        city = parts[0].replace(/\./g, ' ');
        country = parts[1];
    } else if (parts.length === 3) {
        city = parts[0].replace(/\./g, ' ');
        country = parts.slice(1).join(' ').replace(/~/g, ' ');
    }
    console.log(city);
    console.log(country);

    addCityToBL(city, country, countryCities);
}

export function removeCityFromBLFromOffcanvas(buttonId, countryCities) {
    const parts = buttonId.split(/[~\-]/);
    let city, country;
    console.log(parts);

    if (parts.length === 2) {
        city = parts[0].replace(/\./g, ' ');
        country = parts[1];
    } else if (parts.length === 3) {
        city = parts[0].replace(/\./g, ' ');
        country = parts.slice(1).join(' ').replace(/~/g, ' ');
    }
    console.log(city);

    removeCityFromBL(city, country, countryCities);

    const checkboxId = `${city.replace(/\s+/g, '')}Checkbox`;
    const checkbox = document.getElementById(checkboxId);
    
    if (checkbox) {
        checkbox.checked = false; // Uncheck the checkbox
    }    
}

export function saveButtonState(button) {
    const buttonState = {
        classList: Array.from(button.classList),
        textContent: button.textContent,
    };
    localStorage.setItem(button.id, JSON.stringify(buttonState));
}

export function loadButtonState(button) {
    const buttonState = JSON.parse(localStorage.getItem(button.id));
    if(buttonState) {
        button.className = buttonState.classList.join(' ');
        button.textContent = buttonState.textContent;
    }
}

export function getAttractionName(button) {
    const accordionItem = button.closest(".accordion-item");
    const attractionName = accordionItem.querySelector('.accordion-button').textContent.trim();
    console.log("Attraction Selected: ", attractionName);
    return attractionName;
}

function saveAttractionToLocalStorage(attractionName, isSelected) {
    localStorage.setItem(attractionName, isSelected);
}

export function setAttractionSelectedTrue(attractionName, countryCities) {
    for (const city of countryCities) {
        // Search in top_spots
        for (const spot of city.top_spots) {
            if (spot.name === attractionName) {
                spot.isSelected = true;
                saveAttractionToLocalStorage(attractionName, true);
                return;
            }
        }
        // Search in places_to_eat
        for (const place of city.places_to_eat) {
            if (place.name === attractionName) {
                place.isSelected = true;
                saveAttractionToLocalStorage(attractionName, true);
                return;
            }
        }
        // Search in lodging
        for (const lodge of city.lodging) {
            if (lodge.name === attractionName) {
                lodge.isSelected = true;
                saveAttractionToLocalStorage(attractionName, true);
                return;
            }
        }
    }
}
export function setAttractionSelectedFalse(attractionName, countryCities) {
    for (const city of countryCities) {
        // Search in top_spots
        for (const spot of city.top_spots) {
            if (spot.name === attractionName) {
                spot.isSelected = false;
                saveAttractionToLocalStorage(attractionName, false);
                return;
            }
        }
        // Search in places_to_eat
        for (const place of city.places_to_eat) {
            if (place.name === attractionName) {
                place.isSelected = false;
                saveAttractionToLocalStorage(attractionName, false);
                return;
            }
        }
        // Search in lodging
        for (const lodge of city.lodging) {
            if (lodge.name === attractionName) {
                lodge.isSelected = false;
                saveAttractionToLocalStorage(attractionName, false);
                return;
            }
        }
    }
}

export function loadAttractionsFromLocalStorage(countryCities) {
    for (const city of countryCities) {
        // Load state for top_spots
        for (const spot of city.top_spots) {
            const isSelected = localStorage.getItem(spot.name) === 'true';
            spot.isSelected = isSelected;
        }
        // Load state for places_to_eat
        for (const place of city.places_to_eat) {
            const isSelected = localStorage.getItem(place.name) === 'true';
            place.isSelected = isSelected;
        }
        // Load state for lodging
        for (const lodge of city.lodging) {
            const isSelected = localStorage.getItem(lodge.name) === 'true';
            lodge.isSelected = isSelected;
        }
    }
}