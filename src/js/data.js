/**
 * To import: import { allCities } from "./data.js";
 * Source: https://worldpopulationreview.com
 */
export const allCities = [
    {
        name: "Buenos Aires",
        country: "Argentina",
        population: "15,618,288",
    },
    {
        name: "Mendoza",
        country: "Argentina",
        population: "1,242,319",
    },
    {
        name: "Colmar",
        country: "France",
        population: "71,163",
    },
    {
        name: "Paris",
        country: "France",
        population: "11,276,701",
    },
    {
        name: "Kyoto",
        country: "Japan",
        population: "1,459,640",
    },
    {
        name: "Tokyo",
        country: "Japan",
        population: "8,336,599",
    },
    {
        name: "Casablanca",
        country: "Morocco",
        population: "3,950,408",
    },
    {
        name: "Rabat",
        country: "Morocco",
        population: "1,989,197",
    },
    {
        name: "Los Angeles",
        country: "United States",
        population: "3,795,936",
        state: "California",
    },
    {
        name: "New York",
        country: "United States",
        population: "8,097,282",
        state: "New York",
    },
];

/**
 * To import: import { argentinaCities } from "./data.js";
 */
export const argentinaCities = [
    {
        name: "Buenos Aires",
        country: "Argentina",
        population: "15,618,288",
        top_spots: [
            {
                name: "Colón Theater (Teatro Colón)",
                img: "img/argentina/buenos-aires/spot1.png",
                blurb: "This is an outstanding opera house that offers beautiful architecture and performances. You can purchase tickets to attend performances and take guided tours to learn more about its history.",
                isSelected: false,
            },
            {
                name: "San Telmo",
                img: "img/argentina/buenos-aires/spot2.png",
                blurb: "This is the oldest neighborhood in Buenos Aires that offers many different tastes of the city. You can find coffee shops, shops, restaurants, and many more! There's also a weekly street fair on Sundays where you can buy souvenirs to take home.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Fogón Asado",
                img: "img/argentina/buenos-aires/pTe1.png",
                blurb: "This is a 5-star Michelin restaurant that offers Asado steak tradition with a twist. Not only will you have amazing steak and barbeque, you'll also have an unforgetable experience!",
                isSelected: false,
            },
            {
                name: "D'Oro Italian Bar",
                img: "img/argentina/buenos-aires/pTe2.png",
                blurb: "This beautiful restaurant offers Italian, Mediterranean, and European cuisine. It is also vegetarian and gluten free friendly with vegan options.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Pestana Buenos Aires",
                img: "img/argentina/buenos-aires/lodging1.png",
                blurb: "This hotel is an 8-block walk from Florida Street and has been rated 8-9/10 from guests. Some of the amenities offered include: indoor swimming pool, airport shuttle, breakfast, free wifi, air conditioning, hot tub, and many more!",
                isSelected: false,
            },
            {
                name: "Hub Porteño",
                img: "img/argentina/buenos-aires/lodging2.png",
                blurb: "This is a 1957 French-style home that was previously used as a guest house by an Argentinian family. It continues to provide a home like feel. Some of the amenities offered include: suites with various views (city, garden, and winter garden), a dry sauna, a mini gym, and many more!",
                isSelected: false,
            },
        ],
    },
    {
        name: "Mendoza",
        country: "Argentina",
        population: "1,242,319",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "This full day tour allows you to see and explore the Andes Mountains. Depending on the time of year you visit, the view could be covered in snow or completely dry!",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "This winery offers beautiful views and delicious wines. This experience allows you to experience the offerings privately with your group and indulge in the experience!",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "This is a 5-star Michelin restaurant that offers healthy Argentina cuisine. It has a connected winery and its very own organic garden that their vegetables are sourced from.",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "This 4.5 star winery offers a wide variety of wine and cuisine options. You'll get to have the full wine tasting experience with wine and their pairings.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "This hotel is located in La Carrera, offering a mixture of mountains and countryside. Some of the amenitites offered include: an outdoor swimming pool, airport shuttle, a bar, and many more!",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "This hotel is located right in the city's center and is just 10 minute drive from the airport. Some of the amenities offered include: a suana room, an outdoor pool, a Mediterranean restaurant, and many more!",
                isSelected: false,
            },
        ],
    },
];

/**
 * To import: import { franceCities } from "./data.js";
 */
export const franceCities = [
    {
        name: "Colmar",
        country: "France",
        population: "71,163",
        top_spots: [
            {
                name: "F-TS1",
                img: "",
                blurb: "F-TS1 blurb",
                isSelected: true,
            },
            {
                name: "F-TS2",
                img: "",
                blurb: "F-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "F-PE1",
                img: "",
                blurb: "F-PE1 blurb",
                isSelected: false,
            },
            {
                name: "F-PE2",
                img: "",
                blurb: "F-PE2 blurb",
                isSelected: true,
            },
        ],
        lodging: [
            {
                name: "F-L1",
                img: "",
                blurb: "F-L1 blurb",
                isSelected: true,
            },
            {
                name: "F-L2",
                img: "",
                blurb: "F-L2 blurb",
                isSelected: false,
            },
        ],
    },
    {
        name: "Paris",
        country: "France",
        population: "11,276,701",
        top_spots: [
            {
                name: "P-TS1",
                img: "",
                blurb: "P-TS1 blurb",
                isSelected: false,
            },
            {
                name: "P-TS2",
                img: "",
                blurb: "P-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "P-PE1",
                img: "",
                blurb: "P-PE1 blurb",
                isSelected: false,
            },
            {
                name: "P-PE2",
                img: "",
                blurb: "P-PE2 blurb",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "P-L1",
                img: "",
                blurb: "P-L1 blurb",
                isSelected: false,
            },
            {
                name: "P-L2",
                img: "",
                blurb: "P-L2 blurb",
                isSelected: false,
            },
        ],
    },
];

/**
 * To import: import { japanCities } from "./data.js";
 */
export const japanCities = [
    {
        name: "Kyoto",
        country: "Japan",
        population: "1,459,640",
        top_spots: [
            {
                name: "K-TS1",
                img: "",
                blurb: "K-TS1 blurb",
                isSelected: false,
            },
            {
                name: "K-TS2",
                img: "",
                blurb: "K-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "K-PE1",
                img: "",
                blurb: "K-PE1 blurb",
                isSelected: false,
            },
            {
                name: "K-PE2",
                img: "",
                blurb: "K-PE2 blurb",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "K-L1",
                img: "",
                blurb: "K-L1 blurb",
                isSelected: false,
            },
            {
                name: "K-L2",
                img: "",
                blurb: "K-L2 blurb",
                isSelected: false,
            },
        ],
    },
    {
        name: "Tokyo",
        country: "Japan",
        population: "8,336,599",
        top_spots: [
            {
                name: "T-TS1",
                img: "",
                blurb: "T-TS1 blurb",
                isSelected: false,
            },
            {
                name: "T-TS2",
                img: "",
                blurb: "T-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "T-PE1",
                img: "",
                blurb: "T-PE1 blurb",
                isSelected: false,
            },
            {
                name: "T-PE2",
                img: "",
                blurb: "T-PE2 blurb",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "T-L1",
                img: "",
                blurb: "T-L1 blurb",
                isSelected: false,
            },
            {
                name: "T-L2",
                img: "",
                blurb: "T-L2 blurb",
                isSelected: false,
            },
        ],
    },
];

/**
 * To import: import { moroccoCities } from "./data.js";
 */
export const moroccoCities = [
    {
        name: "Casablanca",
        country: "Morocco",
        population: "3,950,408",
        top_spots: [
            {
                name: "CM-TS1",
                img: "",
                blurb: "CM-TS1 blurb",
                isSelected: false,
            },
            {
                name: "CM-TS2",
                img: "",
                blurb: "CM-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "CM-PE1",
                img: "",
                blurb: "CM-PE1 blurb",
                isSelected: false,
            },
            {
                name: "CM-PE2",
                img: "",
                blurb: "CM-PE2 blurb",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "CM-L1",
                img: "",
                blurb: "CM-L1 blurb",
                isSelected: false,
            },
            {
                name: "CM-L2",
                img: "",
                blurb: "CM-L2 blurb",
                isSelected: false,
            },
        ],
    },
    {
        name: "Rabat",
        country: "Morocco",
        population: "1,989,197",
        top_spots: [
            {
                name: "R-TS1",
                img: "",
                blurb: "R-TS1 blurb",
                isSelected: false,
            },
            {
                name: "R-TS2",
                img: "",
                blurb: "R-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "R-PE1",
                img: "",
                blurb: "R-PE1 blurb",
                isSelected: false,
            },
            {
                name: "R-PE2",
                img: "",
                blurb: "R-PE2 blurb",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "R-L1",
                img: "",
                blurb: "R-L1 blurb",
                isSelected: false,

            },
            {
                name: "R-L2",
                img: "",
                blurb: "R-L2 blurb",
                isSelected: false,
            },
        ],
    },
];

/**
 * To import: import { usCities } from "./data.js";
 */
export const usCities = [
    {
        name: "Los Angeles",
        country: "United States",
        population: "3,795,936",
        state: "California",
        top_spots: [
            {
                name: "LA-TS1",
                img: "",
                blurb: "LA-TS1 blurb",
                isSelected: false,
            },
            {
                name: "LA-TS2",
                img: "",
                blurb: "LA-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "LA-PE1",
                img: "",
                blurb: "LA-PE1 blurb",
                isSelected: false,
            },
            {
                name: "LA-PE2",
                img: "",
                blurb: "LA-PE2 blurb",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "LA-L1",
                img: "",
                blurb: "LA-L1 blurb",
                isSelected: false,
            },
            {
                name: "LA-L2",
                img: "",
                blurb: "LA-L2 blurb",
                isSelected: false,
            },
        ],
    },
    {
        name: "New York",
        country: "United States",
        population: "8,097,282",
        state: "New York",
        top_spots: [
            {
                name: "NY-TS1",
                img: "",
                blurb: "NY-TS1 blurb",
                isSelected: false,
            },
            {
                name: "NY-TS2",
                img: "",
                blurb: "NY-TS2 blurb",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "NY-PE1",
                img: "",
                blurb: "NY-PE1 blurb",
                isSelected: false,
            },
            {
                name: "NY-PE2",
                img: "",
                blurb: "NY-PE2 blurb",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "NY-L1",
                img: "",
                blurb: "NY-L1 blurb",
                isSelected: false,
            },
            {
                name: "NY-L2",
                img: "",
                blurb: "NY-L2 blurb",
                isSelected: false,
            },
        ],
    },
];

