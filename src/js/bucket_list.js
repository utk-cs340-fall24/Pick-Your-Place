export let userBucketList = [];

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
            });
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
        } else {
            // Remove city from bucket list
            removeCityFromBL(city, country);
            populateBucketList();
        }
    });
}