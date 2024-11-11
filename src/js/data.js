/**
 * To import: import { allCities } from "./data.js";
 * Source: https://worldpopulationreview.com
 */
export const allCities = [
    //Argentina
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
        name: "Ushuaia",
        country: "Argentina",
        population: "82,615",
    },
    {
        name: "Cordoba",
        country: "Argentina",
        population: "1,626,000",
    },
    {
        name: "Rosario",
        country: "Argentina",
        population: "1,613,000",
    },
    {
        name: "Puerto Iguazu",
        country: "Argentina",
        population: "82,227",
    },
    {
        name: "San Miguel de Tucuman",
        country: "Argentina",
        population: "1,039,000",
    },
    {
        name: "Puerto Madryn",
        country: "Argentina",
        population: "103,175",
    },

    //France
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
        name: "French Alps",
        country: "France",
        population: "14,200,000",
    },
    {
        name: "Nice",
        country: "France",
        population: "348,085",
    },
    {
        name: "Montpellier",
        country: "France",
        population: "483,000",
    },
    {
        name: "Strasbourg",
        country: "France",
        population: "487,000",
    },
    {
        name: "Toulouse",
        country: "France",
        population: "1,071,000",
    },
    {
        name: "Lourdes",
        country: "France",
        population: "13,509",
    },


    //Japan
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
        name: "Osaka",
        country: "Japan",
        population: "18,967,000",
    },
    {
        name: "Yokohama",
        country: "Japan",
        population: "	3,820,144",
    },
    {
        name: "Nagoya",
        country: "Japan",
        population: "9,557,000",
    },
    {
        name: "Kobe",
        country: "Japan",
        population: "1,528,478",
    },
    {
        name: "Hiroshima",
        country: "Japan",
        population: "2,063,000",
    },
    {
        name: "Takayama",
        country: "Japan",
        population: "88,473",
    },


    //Morocco
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
        name: "Marrakech",
        country: "Morocco",
        population: "1,067,000",
    },
    {
        name: "Chefchaouen",
        country: "Morocco",
        population: "490,757",
    },
    {
        name: "Fes",
        country: "Morocco",
        population: "1,989,197",
    },
    {
        name: "Agadir",
        country: "Morocco",
        population: "1,989,197",
    },
    {
        name: "Ouarzazate",
        country: "Morocco",
        population: "1,989,197",
    },
    {
        name: "Tangier",
        country: "Morocco",
        population: "1,989,197",
    },

    //United States
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
    {
        name: "Seattle",
        country: "United States",
        population: "759, 915",
        state: "Washington",
    },
    {
        name: "Miami",
        country: "United States",
        population: "460,289",
        state: "Florida",
    },
    {
        name: "Chicago",
        country: "United States",
        population: "2,638,159",
        state: "Illinois",
    },
    {
        name: "Las Vegas",
        country: "United States",
        population: "665,640",
        state: "Nebada",
    },
    {
        name: "Washington",
        country: "United States",
        population: "5,545,000",
        state: "District of Columbia",
    },
    {
        name: "Philadelphia",
        country: "United States",
        population: "12,951,300",
        state: "Pennsylvania",
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
    {
        name: "Ushuaia",
        country: "Argentina",
        population: "82,615",
        top_spots: [
            {
                name: "Tierra del Fuego National Park",
                img: "img/argentina/ushuaia/spot1.jpg",
                blurb: "This beautiful national park, located just outside Ushuaia, offers lush forests, lakes, and mountains. Visitors can hike scenic trails, kayak on rivers, and enjoy spectacular views of the Beagle Channel. The park is also rich in wildlife, with opportunities to spot Andean foxes, beavers, and various bird species.",
                isSelected: false,
            },
            {
                name: "Laguna Esmeralda",
                img: "img/argentina/ushuaia/spot2.jpg",
                blurb:"This beautiful, emerald-colored lake is accessible via a moderate hike through lush forests and peat bogs. Surrounded by mountains and offering a tranquil atmosphere, Laguna Esmeralda is a perfect spot for nature lovers looking to experience Ushuaia’s pristine wilderness.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Kalma Resto",
                img: "img/argentina/ushuaia/eat1.jpg",
                blurb: "Kalma Resto is a small, refined restaurant known for its innovative approach to Argentine cuisine. The chef incorporates local ingredients like Patagonian lamb, trout, and wild mushrooms, creating artfully plated dishes that celebrate regional flavors. With its intimate setting, Kalma Resto provides a unique and memorable dining experience for those seeking a modern twist on Patagonian food.",
                isSelected: false,
            },
            {
                name: "Taberna del Viejo Lobo",
                img: "img/argentina/ushuaia/eat2.jpg",
                blurb: "Located in the heart of Ushuaia, Taberna del Viejo Lobo offers stunning views of the harbor along with a great variety of local dishes. Known for its king crab, seafood stews, and Patagonian lamb, this restaurant combines traditional flavors with a relaxed, welcoming atmosphere. It’s also a great spot for a casual lunch or dinner with a view.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Arakur Ushuaia Resort & Spa",
                img: "img/argentina/ushuaia/lodging1.jpg",
                blurb: " Located on a hilltop overlooking the Beagle Channel, Arakur Ushuaia Resort & Spa offers luxury accommodations with breathtaking panoramic views. The resort features spacious, elegantly designed rooms, a heated indoor-outdoor pool, and a full-service spa, making it an ideal spot for relaxation. With eco-friendly construction and access to hiking trails, Arakur is perfect for nature lovers seeking comfort and tranquility in a beautiful setting.",
                isSelected: false,
            },
            {
                name: "Los Cauquenes Resort",
                img: "img/argentina/ushuaia/lodging2.jpg",
                blurb: "Situated on the shores of the Beagle Channel, Los Cauquenes offers a cozy yet luxurious experience with stunning water and mountain views. The resort includes a spa, a gourmet restaurant, and outdoor hot tubs, allowing guests to relax after a day of exploring. They also provide curated excursions like kayaking, hiking, and city tours, making it a great base for adventure seekers looking for tailored experiences in Ushuaia.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Cordoba",
        country: "Argentina",
        population: "1,626,000",
        top_spots: [
            {
                name: "Plaza San Martín and Córdoba Cathedral",
                img: "img/argentina/cordoba/spot1.jpeg",
                blurb: "Plaza San Martín is the heart of Córdoba and a great starting point for exploring the city. The plaza is surrounded by beautiful colonial architecture, including the iconic Córdoba Cathedral, which dates back to the 16th century and is known for its stunning Baroque facade and elaborate interior. The square is a bustling spot where locals and visitors alike gather to enjoy the city’s atmosphere.",
                isSelected: false,
            },
            {
                name: "Manzana Jesuítica (Jesuit Block) ",
                img: "img/argentina/cordoba/spot2.jpg",
                blurb: "This UNESCO World Heritage site is a must-visit for history lovers. The Jesuit Block includes several historic buildings such as the Montserrat School, the Universidad Nacional de Córdoba (one of the oldest universities in South America), and the Church of the Society of Jesus. The site offers a glimpse into the influence of the Jesuit order in Argentina, with architecture that reflects colonial Spanish style and historical significance.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "El Papagayo",
                img: "img/argentina/cordoba/eat1.webp",
                blurb: "El Papagayo is a renowned restaurant known for its innovative approach to traditional Argentine cuisine. The menu features a selection of seasonal dishes crafted from local ingredients, with a focus on fresh flavors and artistic presentation. The ambiance is elegant yet cozy, making it an ideal spot for a special dinner or a romantic night out.",
                isSelected: false,
            },
            {
                name: "El Ruedo",
                img: "img/argentina/cordoba/eat2.jpg",
                blurb: "Famous for its parrilla, El Ruedo serves a wide variety of grilled meats cooked to perfection over an open flame. This traditional steakhouse offers a rustic ambiance and a menu filled with Argentine classics such as bife de chorizo (sirloin steak) and morcilla (blood sausage). The extensive wine list features excellent local options, making it a great choice for meat lovers.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel de la Cañada",
                img: "img/argentina/cordoba/lodging1.jpg",
                blurb: "This elegant hotel is situated near the historic center of Córdoba, providing guests with comfortable rooms and excellent service. Hotel de la Cañada offers amenities such as a restaurant, bar, and an outdoor swimming pool. Its central location makes it a convenient base for exploring the city’s attractions and vibrant nightlife.",
                isSelected: false,
            },
            {
                name: "Yrigoyen 111 Hotel",
                img: "img/argentina/cordoba/lodging2.jpg",
                blurb: "Yrigoyen 111 is a boutique hotel located in a beautifully restored building, combining historic charm with modern amenities. The hotel features stylish rooms, a bar, and a terrace with panoramic views of the city. Its location in the city center makes it easy for guests to explore nearby cultural sites, shops, and restaurants.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Rosario",
        country: "Argentina",
        population: "1,613,000",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Puerto Iguazu",
        country: "Argentina",
        population: "82,227",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "San Miguel de Tucuman",
        country: "Argentina",
        population: "1,039,000",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Puerto Madryn",
        country: "Argentina",
        population: "103,175",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
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
                name: "La Petite Venise (The Little Venice)",
                img: "img/france/colmar/spot_1.jpeg",
                blurb: "La Petite Venise in Colmar is a charming riverside neighborhood known for its picturesque canals, colorful buildings, and lively cafes. It offers the city’s most iconic views!",
                isSelected: true,
            },
            {
                name: "Eglise des Dominicains",
                img: "img/france/colmar/eglise_spot_2.jpg",
                blurb: "Eglise des Dominicains is a peaceful 14th-century Gothic church with stunning stained-glass windows, an intricate high-vaulted ceiling, and the beautiful Vierge au Buisson de Roses painting. It is open Tuesday - Sunday from March 25th to Dec 26th.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Le 20ème Colmar",
                img: "img/france/colmar/eat_1.jpg",
                blurb: "This cozy restaurant offers authentic seasonal Colamar cuisine with stylishly presented meat & fish dishes, plus Alsatian wines!",
                isSelected: false,
            },
            {
                name: "Bistrot des Copains de Colmar",
                img: "img/france/colmar/eats_2.jpg",
                blurb: "Bistrot des Copains de Colmar is a local restaurant that provides authentic French cuisine and attentive service, with a charming summer terrace overlooking the cathedral for a cheerful dining experience.",
                isSelected: true,
            },
        ],
        lodging: [
            {
                name: "Hotel Le Colombier Colmar",
                img: "img/france/colmar/lodge_1.jpg",
                blurb: "Hotel Le Colombier is a charming 4-star hotel in Colmar’s Little Venice district, featuring an organic Alsatian breakfast, a cozy courtyard with a fountain, and eco-friendly amenities like a fitness room, bio sauna, and electric-car charging station.",
                isSelected: true,
            },
            {
                name: "Hotel Le Marechal Colmar",
                img: "img/france/colmar/lodge_2.jpg",
                blurb: "This 1565 historic house offers 30 uniquely decorated rooms that mix authenticity with modern amenities. Located on the Alsace wine route, the hotel features a gourmet restaurant, A l’Echevin, and amenities like free Wi-Fi, a riverside terrace, and jacuzzi bathrooms.",
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
                name: "Louvre Museum",
                img: "img/france/paris/spot_1.jpeg",
                blurb: "The Louvre, a historic fortress-turned-museum, features a vast collection of art from antiquities to masterpieces by da Vinci and Michelangelo. Visitors can explore thematic trails and guided tours, with various entry points to enhance their experience.",
                isSelected: false,
            },
            {
                name: "Cathédrale Notre-Dame de Paris",
                img: "img/france/paris/spot2.jpeg",
                blurb: "Notre-Dame Cathedral is a stunning French Gothic architecture located on Île de la Cité in Paris. This historic Catholic cathedral is dedicated to the Virgin Mary and features breathtaking stained glass windows and other significant artifacts",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Le Chardenoux",
                img: "img/france/paris/eat_1.jpeg",
                blurb: "At the historic Parisian bistro Le Chardenoux guests are drawn into a Belle Époque atmosphere with painted ceilings, Art Nouveau details, and a 100-year-old bar. Celebrity chef Cyril Lignac’s menu offers seafood highlights like lobster roll, salt-crusted sea bass, and tuna tartar. The cozy dining room and sunlit terrace provide a warm ambiance, perfect for enjoying inventive, seafood-focused dishes and cocktails located in the 11th arrondissement.",
                isSelected: false,
            },
            {
                name: "Le Petit Vendôme",
                img: "img/france/paris/eat_2.jpeg",
                blurb: "Close to Place Vendôme, this charming, down-to-earth luncheonette is a hit among office workers, luxury boutique staff, and tourists alike. The decor, with its bright chairs and cracked tile floor, exudes vintage appeal, but it’s the classic French fare that draws the crowds. Think baguette sandwiches with ham and Fourme d’Ambert blue cheese, comforting dishes like escargots, onion soup, duck confit with sautéed potatoes, and desserts like chocolate mousse or tarte Tatin. Prices are modest for the central location, making it a true Parisian experience. Arrive early to beat the crowd! Located in the 2nd arrondissement.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Kimpton St Honoré Paris",
                img: "img/france/paris/lodge_1.jpg",
                blurb: "Kimpton St Honoré Paris is steps from the Opera Garnier, Faubourg St Honoré, and Tuileries Gardens. At Montecito, the hotel restaurant, guests can dine in a spacious area with a lush patio viewed through bay windows. The hotel also features a serene spa, an indoor heated pool, and treatments for ultimate relaxation. The Sequoia rooftop bar offers panoramic views of Paris.",
                isSelected: false,
            },
            {
                name: "Le Grand Mazarin",
                img: "img/france/paris/lodge_2.jpg",
                blurb: "A 5-star hotel in Paris’s Marais, combines classic French charm with modern flair. Its rooms and suites showcase artistic elegance, crafted by top French artisans. The hotel’s Boubalé Restaurant offers a fusion of Mediterranean and Levantine flavors, emphasizing sharing and tradition. Amenities include an 8-meter pool, a vaulted fitness room, and a serene treatment space. Set in the vibrant Marais, near the Hôtel de Ville, Le Grand Mazarin places guests at the heart of Parisian style and discovery.",
                isSelected: false,
            },
        ],
    },
    {
        name: "French Alps",
        country: "France",
        population: "14,200,000",
        top_spots: [
            {
                name: "Chamonix-Mont-Blanc",
                img: "img/france/french_alps/spot1.webp",
                blurb: "One of the most famous ski resorts in the world, Chamonix is nestled at the base of Mont Blanc, the highest peak in the Alps. Known for its challenging slopes and breathtaking scenery, it’s a haven for skiers, snowboarders, and mountaineers. In addition to winter sports, Chamonix offers year-round activities such as hiking, paragliding, and climbing, as well as a vibrant town center with shops, restaurants, and lively après-ski.",
                isSelected: false,
            },
            {
                name: "Grenoble",
                img: "img/france/french_alps/spot2.jpg",
                blurb: "Known as the capital of the French Alps, Grenoble is surrounded by mountains and offers a rich cultural scene. Visitors can explore its historic center, which features charming squares, museums, and the stunning Bastille fortress, accessible by a cable car that offers panoramic views of the city and the surrounding mountains. Grenoble also serves as a gateway to various ski resorts and hiking trails.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "La Calèche (Chamonix)",
                img: "img/france/french_alps/eat1.jpg",
                blurb: "Nestled in the heart of Chamonix, La Calèche offers a cozy atmosphere and a menu rich in traditional Savoyard cuisine. The restaurant is known for its fondue, raclette, and hearty mountain dishes, perfect for warming up after a day on the slopes. The rustic decor and friendly service make it a favorite among locals and visitors alike.",
                isSelected: false,
            },
            {
                name: "L'Atelier d'Edmond (La Clusaz)",
                img: "img/france/french_alps/eat2.jpg",
                blurb: "A Michelin-starred restaurant, L'Atelier d'Edmond is known for its creative dishes that celebrate the flavors of the Alps. The restaurant features a warm and inviting ambiance, with a focus on seasonal and local ingredients. Chef Edmond serves beautifully presented dishes that offer a modern twist on traditional alpine flavors, making it a must-visit for food enthusiasts.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Les Granges d'en Haut (Chamonix)",
                img: "img/france/french_alps/lodging1.jpg",
                blurb: "This stunning chalet complex offers a luxurious alpine retreat just a short distance from Chamonix. Les Granges d'en Haut features beautifully designed rooms with rustic decor and modern amenities. Guests can enjoy a spa, fine dining, and easy access to ski slopes, making it a perfect choice for a pampered mountain getaway.",
                isSelected: false,
            },
            {
                name: "L'Apogée (Courchevel)",
                img: "img/france/french_alps/lodging2.jpg",
                blurb: "Located in the prestigious Courchevel ski resort, L'Apogée is a luxurious hotel that offers opulent accommodations and exceptional service. The hotel features spacious suites and chalets, a world-class spa, and gourmet dining options. With direct access to the slopes, it’s a favorite among celebrities and those seeking a high-end alpine experience.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Nice",
        country: "France",
        population: "348,085",
        top_spots: [
            {
                name: "Promenade des Anglais",
                img: "img/france/nice/spot1.jpeg",
                blurb: "This famous waterfront promenade stretches along the Mediterranean Sea, offering breathtaking views and a perfect place for leisurely strolls, cycling, or rollerblading. Lined with palm trees, cafes, and restaurants, the Promenade des Anglais is an iconic symbol of Nice and a great spot to relax while enjoying the sea breeze.",
                isSelected: false,
            },
            {
                name: "Castle Hill (Colline du Château)",
                img: "img/france/nice/spot2.jpg",
                blurb: " Offering some of the best panoramic views of Nice, Castle Hill is a must-visit for anyone looking to appreciate the city's beauty from above. Visitors can hike or take an elevator to the top, where they can explore the ruins of the old castle and enjoy a peaceful park with lush greenery and waterfalls.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "La Petite Maison",
                img: "img/france/nice/eat1.jpg",
                blurb: "A favorite among locals and celebrities alike, La Petite Maison offers a warm and inviting atmosphere with a menu featuring fresh, seasonal ingredients. Signature dishes include the famous Niçoise salad, grilled fish, and a selection of delicious pasta. The restaurant's charming decor and attentive service make it a perfect spot for a memorable meal.",
                isSelected: false,
            },
            {
                name: "L'Atelier de Julien",
                img: "img/france/nice/eat2.jpg",
                blurb: "This contemporary restaurant offers a creative twist on classic French cuisine, emphasizing seasonal and locally sourced ingredients. The menu changes regularly, showcasing innovative dishes that surprise and delight diners. The elegant atmosphere and attentive service make it a great choice for special occasions.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel Negresco",
                img: "img/france/nice/lodging1.jpg",
                blurb: "An iconic symbol of Nice, Hotel Negresco is a historic palace that exudes elegance and charm. The hotel features luxurious rooms and suites adorned with exquisite decor and antique furnishings. With its stunning location on the Promenade des Anglais, guests can enjoy breathtaking views of the Mediterranean Sea, as well as fine dining at the Michelin-starred restaurant Le Chantecler.",
                isSelected: false,
            },
            {
                name: "Hotel La Perouse",
                img: "img/france/nice/lodging2.webp",
                blurb: "Overlooking the Mediterranean, Hotel La Perouse offers a blend of modern comfort and classic charm. The hotel features beautifully decorated rooms, many with private balconies and sea views. Guests can relax by the outdoor pool or enjoy a meal at the hotel’s restaurant, which serves Mediterranean cuisine. Its proximity to the Old Town and the beach makes it a convenient choice for visitors.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Montpellier",
        country: "France",
        population: "483,000",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Strasbourg",
        country: "France",
        population: "487,000",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Toulouse",
        country: "France",
        population: "1,071,000",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Lourdes",
        country: "France",
        population: "13,509",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
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
                name: "Nijo (Nijojo) Castle",
                img: "img/japan/kyoto/TS1.jpg",
                blurb: `Nijo Castle (Nijojo) is a UNESCO World Heritage Site that showcases the architectural 
                  splendor of the Edo period, featuring beautiful gardens and stunning wooden structures. 
                  Visitors can stroll through its historic halls, admire intricate wall paintings, and 
                  experience the unique nightingale floors that chirp underfoot.`,
                isSelected: false,
            },
            {
                name: "The Kyoto Railway Museum",
                img: "img/japan/kyoto/TS2.jpeg",
                blurb: `The Kyoto Railway Museum offers an immersive journey through Japan's rich 
            railway history, showcasing an impressive collection of trains and interactive exhibits. 
            Visitors can explore vintage locomotives, learn about the evolution of rail travel, 
            and even experience a simulated train ride.`,
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Fire Ramen Kyoto - Menbaka",
                img: "img/japan/kyoto/PE1.jpg",
                blurb: ` A unique dining experience that combines delicious ramen with a dramatic flair, 
          as chefs ignite the broth for a spectacular presentation. Guests can enjoy rich, flavorful 
          noodles while witnessing the captivating fire show-- a must-visit spot for 
          adventurous food lovers.`,
                isSelected: false,
            },
            {
                name: "Matsuzakagyu What's Kyoto Muromachi",
                img: "img/japan/kyoto/PE2.jpg",
                blurb: `Specializes in exquisite Matsuzaka beef, renowned for its exceptional 
          marbling and flavor, providing a gourmet experience in 
          the heart of Kyoto. Diners can savor a variety of dishes prepared with this premium 
          beef, all within a sophisticated setting that highlights the essence of Japanese cuisine.`,
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Sora Niwa Terrace Kyoto",
                img: "img/japan/kyoto/L1.jpg",
                blurb: `A stylish hotel that combines modern comfort with 
          traditional Japanese aesthetics, offering guests a serene retreat in the heart of the city.
           With spacious rooms, a tranquil garden terrace, and easily accessible local attractions, it 
           is ideal for both relaxation and cultural immersion.`,
                isSelected: false,
            },
            {
                name: "Hiiragiya Hotel",
                img: "img/japan/kyoto/L2.jpg",
                blurb: `A renowned ryokan that embodies the elegance of Kyoto’s traditional 
          hospitality, offering guests a unique blend of luxurious comfort and rich cultural heritage. 
          It provides an unforgettable experience in an environment reflective of the charm of old Japan.`,
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
                name: "Shinjuku Gyoen National Garden",
                img: "img/japan/tokyo/TS1.jpg",
                blurb: `A serene urban oasis that beautifully blends traditional Japanese, English, 
          and French garden landscapes. Visitors can enjoy relaxing strolls through its lush 
          greenery and vibrant seasonal flowers as a peaceful escape from the 
          busy city.`,
                isSelected: false,
            },
            {
                name: "TeamLab Borderless Art Museum",
                img: "img/japan/tokyo/TS2.jpeg",
                blurb: `An innovative digital art museum that immerses visitors 
          in a captivating world of interactive installations and stunning visual displays. Its 
          dynamic exhibits offer a unique and engaging experience for art enthusiasts and 
          curious minds alike`,
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Tsuta Ramen",
                img: "img/japan/tokyo/PE1.jpg",
                blurb: `A Michelin-starred noodle shop celebrated for its delicate 
          flavors and handcrafted noodles, offering a unique take on traditional ramen with 
          a rich truffle oil-infused broth. Guests can savor a bowl of this culinary 
          masterpiece in a cozy setting, where each dish reflects a commitment to quality and artistry.`,
                isSelected: false,
            },
            {
                name: "Ginza Kojyu",
                img: "img/japan/tokyo/PE2.jpg",
                blurb: `Ginza Kojyu is a prestigious kaiseki restaurant that showcases the artistry 
          of Japanese haute cuisine, featuring seasonal ingredients and beautifully presented 
          dishes. Diners are treated to an exquisite multi-course meal in an elegant atmosphere, 
          making it a memorable experience for those seeking a taste of luxury in Tokyo.`,
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Peninsula Tokyo",
                img: "img/japan/tokyo/L1.jpg",
                blurb: `The Peninsula Tokyo is a luxurious hotel that combines modern elegance with 
          traditional Japanese hospitality, offering stunning views of the Imperial Palace. 
          Guests can enjoy spacious rooms, exquisite dining options, and a tranquil spa, 
          making it a perfect retreat in the heart of the city.`,
                isSelected: false,
            },
            {
                name: "Shinjuku Granbell Hotel",
                img: "img/japan/tokyo/L2.jpg",
                blurb: `Shinjuku Granbell Hotel features stylish, contemporary accommodations with
           breathtaking views of Tokyo's skyline, making it an ideal base for exploring the 
           vibrant Shinjuku district. With chic design, a rooftop bar, and easy access to 
           transport, it caters to both business and leisure travelers seeking comfort and 
           convenience.`,
                isSelected: false,
            },
        ],
    },
    {
        name: "Osaka",
        country: "Japan",
        population: "18,967,000",
        top_spots: [
            {
                name: "Dotonbori",
                img: "img/Japan/Osaka/TS1.jpg",
                blurb: `A lively district famous for its neon lights, street food, and unique 
                        attractions like the Glico running man sign. It’s a great spot for experiencing 
                        Osaka’s energetic nightlife and vibrant atmosphere.`,
                isSelected: false,
            },
            {
                name: "Osaka Castle",
                img: "img/Japan/Osaka/TS2.jpg",
                blurb: `A historical landmark surrounded by lush gardens, offering a mix of history 
                        and natural beauty. You can explore the castle’s museum and enjoy panoramic 
                        views from the top.`,
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Mizuno",
                img: "img/Japan/Osaka/PE1.jpg",
                blurb: `A renowned okonomiyaki restaurant in Dotonbori, famous for its savory Japanese 
                pancake filled with various ingredients and a signature sauce. Expect a casual but 
                authentic experience with delicious, made-to-order dishes.`,
                isSelected: false,
            },
            {
                name: "Kuromon Ichiba Market",
                img: "img/Japan/Osaka/PE2.jpg",
                blurb: `A bustling market where you can sample fresh seafood, skewers, and Osaka-style 
                street foods. It’s perfect for grabbing a bite on the go or enjoying a sit-down meal in 
                one of the local eateries.`,
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Swissotel Nankai Osaka",
                img: "img/Japan/Osaka/L1.jpg",
                blurb: `A luxurious hotel situated above Namba Station, offering great views, top-notch 
                amenities, and convenient access to transport, shopping, and dining. Ideal for both business 
                and leisure travelers.`,
                isSelected: false,
            },
            {
                name: "Hotel Nikko Osaka",
                img: "img/Japan/Osaka/L2.jpg",
                blurb: `Located near the heart of Dotonbori and Shinsaibashi, this hotel provides comfortable 
                rooms, excellent service, and easy access to shopping, dining, and entertainment districts.`,
                isSelected: false,
            },
        ],
    },
    {
        name: "Yokohama",
        country: "Japan",
        population: "	3,820,144",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Nagoya",
        country: "Japan",
        population: "9,557,000",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Kobe",
        country: "Japan",
        population: "1,528,478",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Hiroshima",
        country: "Japan",
        population: "2,063,000",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Takayama",
        country: "Japan",
        population: "88,473",
        top_spots: [
            {
                name: "Andes High Mountain Tour",
                img: "img/argentina/mendoza/spot1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Catena Zapata Winery",
                img: "img/argentina/mendoza/spot2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Zonda Cocina De Paisaje",
                img: "img/argentina/mendoza/pTe1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Clos de Chacras",
                img: "img/argentina/mendoza/pTe2.png",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Hotel De Cielo",
                img: "img/argentina/mendoza/lodging1.png",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Diplomatic Hotel",
                img: "img/argentina/mendoza/lodging2.png",
                blurb: "",
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
                name: "The Corniche",
                img: "img/morocco/casablanca/spotq.jpg",
                blurb: "Casablanca’s Corniche is a lively waterfront promenade where locals and tourists alike stroll, dine, and enjoy the beach. Lined with cafes, restaurants, and beach clubs, it’s a great spot to take in the views of the Atlantic Ocean, watch the sunset, or enjoy the city’s vibrant nightlife scene.",
                isSelected: false,
            },
            {
                name: "The Old Medina of Casablanca",
                img: "img/morocco/casablanca/spot2.jpeg",
                blurb: "The Old Medina, or historic quarter, is a lively and authentic area where visitors can experience traditional Moroccan life. It’s filled with narrow alleys, small shops, and street vendors selling everything from spices to artisanal goods. This is the perfect place to buy souvenirs, try local snacks, and enjoy the bustling atmosphere.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "La Sqala",
                img: "img/morocco/casablanca/eat1.jpg",
                blurb: "Located in a charming old fortress near the port, La Sqala offers a unique dining experience with an inviting courtyard, fountains, and beautiful Moroccan decor. The menu includes a range of traditional Moroccan dishes, such as tagines, couscous, and briouats. This is an ideal spot for breakfast or lunch, offering an authentic taste of Moroccan cuisine in a picturesque setting.",
                isSelected: false,
            },
            {
                name: "Le Cabestan Ocean View",
                img: "img/morocco/casablanca/eat2.jpg",
                blurb: "Perched on the edge of the Atlantic Ocean, Le Cabestan offers stunning ocean views and a sophisticated dining experience. The menu focuses on Mediterranean and French dishes, including seafood platters, fresh fish, and steak. With chic decor and an extensive wine list, this is a popular spot for both locals and tourists looking for an upscale dining experience by the sea.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Four Seasons Hotel Casablanca",
                img: "img/morocco/casablanca/lodging1.webp",
                blurb: "Situated along the Corniche, the Four Seasons offers luxury and comfort with beautiful ocean views. The hotel features elegant rooms, a stunning outdoor pool, a spa, and several dining options, including a terrace restaurant with Atlantic views. Known for its exceptional service, it’s ideal for travelers seeking a high-end stay near the beach.",
                isSelected: false,
            },
            {
                name: "Sofitel Casablanca Tour Blanche",
                img: "img/morocco/casablanca/lodging2.jpg",
                blurb: "Located in the heart of Casablanca’s business district, this luxury hotel combines French elegance with Moroccan decor. Guests can enjoy spacious rooms, a rooftop bar with panoramic views, a spa, and fine dining options. Its central location provides easy access to attractions like the Hassan II Mosque and the Old Medina.",
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
                name: "Hassan Tower and Mausoleum of Mohammed V",
                img: "img/morocco/rabat/spot1.webp",
                blurb: "The Hassan Tower is an unfinished minaret from the 12th century, part of an ambitious mosque project that was never completed. Next to it is the Mausoleum of Mohammed V, a beautifully designed building where Morocco’s late king and his sons rest. This site is an architectural marvel with intricate mosaics, white marble, and an impressive red and green-tiled roof.",
                isSelected: false,
            },
            {
                name: "Kasbah of the Udayas",
                img: "img/morocco/rabat/spot2.webp",
                blurb: "Perched on a hill overlooking the Bou Regreg River, the Kasbah of the Udayas is a historic fortress dating back to the 12th century. Inside, you'll find narrow, winding streets lined with blue and white houses, quaint gardens, and beautiful views of the Atlantic Ocean. The Andalusian Gardens here provide a peaceful escape, and the nearby cafes offer traditional Moroccan tea and sweets.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Dinarjat",
                img: "Located in the heart of Medina, Dinarjat is a hidden gem known for its authentic Moroccan decor and elegant setting. The restaurant serves traditional Moroccan dishes like lamb tagine, couscous, and pastilla in a romantic courtyard lit by lanterns. It’s an ideal spot for a memorable, fine-dining experience with classic Moroccan flavors.",
                blurb: "R-PE1 blurb",
                isSelected: false,
            },
            {
                name: "Le Dhow",
                img: "img/morocco/rabat/eat2.jpg",
                blurb: "Le Dhow is a unique restaurant set on a traditional wooden boat docked along the Bou Regreg River. With beautiful views of the Kasbah of the Udayas, it offers a relaxed atmosphere and a varied menu with Moroccan and international dishes, including seafood, pasta, and mezze. The rooftop terrace is perfect for drinks and sunset views.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Sofitel Rabat Jardin des Roses",
                img: "img/morocco/rabat/lodging1.jpg",
                blurb: "Surrounded by lush gardens, the Sofitel offers an upscale experience with spacious rooms, a beautiful outdoor pool, spa, and several restaurants. Located close to the Royal Palace and major landmarks, it’s a top choice for guests seeking both relaxation and easy access to Rabat’s main attractions.",
                isSelected: false,

            },
            {
                name: "La Tour Hassan Palace",
                img: "src/img/morocco/rabat/lodging2.jpg",
                blurb: "La Tour Hassan Palace combines traditional Moroccan architecture with modern luxury. This historic hotel, located in the heart of Rabat, features elegant rooms, a spa, and a fine-dining restaurant serving Moroccan and international cuisine. Its central location and opulent decor make it ideal for travelers seeking a taste of Moroccan heritage.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Marrakech",
        country: "Morocco",
        population: "1,067,000",
        top_spots: [
            {
                name: "Jardin Majorelle",
                img: "img/morocco/marrakech/spot1.png",
                blurb: "Established in 1924, the garden features a vibrant array of 300 plant species from five continents, centered around Majorelle's striking electric-blue art deco studio, which houses the Musée Berbère, showcasing 600 artifacts representing Morocco's indigenous cultures. Jardin Majorelle has become Morocco's most visited tourist attraction, welcoming around 900,000 visitors annually. The site also includes a lovely courtyard café, a small book and photography shop, and a boutique offering Majorelle blue slippers, textiles, and Amazigh-inspired jewelry reflecting YSL's influence. All areas are wheelchair and stroller accessible, making it a welcoming destination for everyone.",
                isSelected: false,
            },
            {
                name: "Jemaa el-Fna",
                img: "img/morocco/marrakech/spot2.jpg",
                blurb: "Jemaa El Fnaa is the vibrant main square of Marrakech, a unique cultural and historical center that has captivated visitors for centuries. Located in the bustling heart of the city, the square is alive with snake charmers, traditional musicians, street performers, and a plethora of exotic food stalls. More than just a historical landmark, Jemaa El Fnaa represents the living essence of Marrakech, where history is not only documented but actively experienced by both locals and tourists. Walking through the square allows you to witness and participate in its rich traditions and dynamic atmosphere, making it an integral part of the city's cultural fabric.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Naranj",
                img: "img/morocco/marrakech/eat1.jpg",
                blurb: "Known for its Lebanese cuisine, Naranj hosts lovely indoor and outdoor dining filled with beautiful light and shadow from traditional Moroccan lamps, creating a warm and inviting atmosphere.",
                isSelected: false,
            },
            {
                name: "La Trou Au Mur",
                img: "img/morocco/marrakech/eat2.jpeg",
                blurb: "Le Trou au Mur is a chic and intimate restaurant that was once a hidden gem in Marrakech’s medina. It continues to innovate with a menu featuring traditional Moroccan dishes that are often deemed too complex by other establishments. In addition to these local specialties, the restaurant also offers a selection of international comfort food for those craving a taste of home.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "La Mamounia",
                img: "img/morocco/marrakech/lodging1.jpeg",
                blurb: "La Mamounia is a historic retreat in Marrakech. It offers expansive gardens with beekeepers, lemon trees, and a picturesque pool with a palm tree. The Sunday brunch is a family favorite, serving tagines, grilled fish, and pizza flatbreads, while Le Marocain features traditional Moroccan dishes alongside the sounds of an oud. Guests can choose from three riad-style houses, with rooms showcasing views of the Koutoubia Mosque. La Mamounia delights with luxurious details, a serene soundscape of birdsong and fountains, and an array of delicacies crafted by renowned chefs, making it an enchanting destination.",
                isSelected: false,

            },
            {
                name: "Nobu Hotel Marrakech",
                img: "img/morocco/marrakech/lodging2.jpg",
                blurb: "Nobu Hotel Marrakech seamlessly blends rich heritage with contemporary flair, located in the fashionable 'Golden Triangle' near the historic heart of the city, souks, vibrant Medina, and Djemaa el-Fna square. This luxury lifestyle destination features 71 spacious suites that combine Moroccan craftsmanship with Japanese design. Guests can enjoy three swimming pools, a subterranean Pearl Spa, and a fitness center.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Chefchaouen",
        country: "Morocco",
        population: "490,757",
        top_spots: [
            {
                name: "Plaza Uta El-Hammam",
                img: "img/morocco/chefchaouen/spot1.webp",
                blurb: "Plaza Uta El-Hammam is the lively heart of Chefchaouen's medina, surrounded by restaurants, shops, the Kasbah, and the Grand Mosque. While the mosque is not open to tourists due to its active role in worship, its unique octagonal minaret can be admired from the square. The cobbled plaza features a large tree, making it a perfect spot for people-watching and taking a break from sightseeing. Although the cafes and restaurants lining the square offer similar, somewhat uninspired fare, the bustling atmosphere and central location provide a great starting point for exploring the charming streets of Chefchaouen.",
                isSelected: false,
            },
            {
                name: "R-TS2",
                img: "img/morocco/chefchaouen/spot2.jpg",
                blurb: "The Kasbah of Chefchaouen is a significant historical monument in Morocco. It features an ethnological museum, an interior garden, and charming fountains and patios. Visitors can enjoy spectacular panoramic views of Chefchaouen and the surrounding mountains from its towers. Amidst the city's iconic blue houses, the Kasbah stands out with its impressive clay walls, offering a lush garden and an ethnographic museum that showcases the customs and heritage of Chefchaouen through costumes, instruments, and weapons, making it a major attraction for tourists.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Restaurant Casa Aladdin",
                img: "img/morocco/chefchaouen/eat1.jpg",
                blurb: "The Aladdin Restaurant, located in the Medina of Chefchaouen, is a renowned dining spot famous for its delicious traditional Moroccan dishes and stunning terraces with panoramic views of 'The Blue City.' Highlights include anchovy and beef tajín, lemon chicken, and a chocolate crepe that's perfect for kids. Situated on the northeast side of the main square, this multi-story restaurant offers an affordable selection of Moroccan favorites, including kofta, tagines, and couscous. The beautifully decorated interior features a blend of Arabian and Spanish styles, while the rooftop terrace provides views of the lively square, where guests can enjoy traditional music and the fresh air of the Rif Mountains.",
                isSelected: false,
            },
            {
                name: "Restaurant Hicham",
                img: "img/morocco/chefchaouen/eat2.webp",
                blurb: "Restaurant Hicham, a renowned Moroccan specialty restaurant located in the heart of Chefchaouen, showcases traditional cuisine. Housed within an authentic riad that is part of the Riad Hicham hotel, it blends modern comfort with a historical ambiance. Just a short walk from the city's oldest square, Place Utta Hamman, the restaurant immerses guests in the unique atmosphere of the medina, characterized by the varying shades of blue and charming artisan shops.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Dar Echchaouen",
                img: "img/morocco/chefchaouen/lodging1.jpeg",
                blurb: " Dar Echchaouen features rooms decorated in traditional Moroccan style and is ideally situated just outside the medina, making it a perfect retreat for relaxation and quality service. Highly rated for its comfort, this property is only a 2-minute walk from BAB-AIN and lies in the heart of Chefchaouen, offering a delightful stay for visitors.",
                isSelected: false,

            },
            {
                name: "R-L2",
                img: "img/morocco/chefchaouen/lodging2.jpeg",
                blurb: "Escape to Casa Perleta, a boutique hotel that embodies the classic Andalusian architecture of the region. Each room is beautifully decorated with local art and tapestries, creating a calm and comfortable atmosphere of relaxation. Guests can unwind in plush furnishings and luxurious bedding, ensuring a restful night’s sleep. The hotel features a stunning rooftop restaurant where you can enjoy a leisurely breakfast of fresh bread, homemade jams, fruit, and mint tea. Additionally, a charming courtyard offers a perfect spot for afternoon mint tea and reading, making every moment of your stay tailored for serenity and comfort.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Fes",
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
    {
        name: "Agadir",
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
    {
        name: "Ouarzazate",
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
    {
        name: "Tangier",
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
                name: "Hollywood Sign",
                img: "img/us/los-angeles/TS1.jpeg",
                blurb: "The Hollywood Sign, perched on Mount Lee in the Hollywood Hills, is a world-famous symbol of the entertainment industry. Originally created in 1923 as Hollywoodland for a real estate promotion, it has since become an iconic landmark of Los Angeles. While the sign itself is fenced off, visitors can enjoy great views from various spots like Griffith Observatory, Lake Hollywood Park, and along hiking trails in Griffith Park. The area offers scenic photo opportunities, and the sign remains a must-see for anyone exploring Hollywood.",
                isSelected: false,
            },
            {
                name: "Universal Studios",
                img: "img/us/los-angeles/TS2.jpeg",
                blurb: "Universal Studios Hollywood is a famous film studio and theme park in Los Angeles, known for combining thrilling attractions with a behind-the-scenes look at the entertainment industry. Visitors can enjoy rides and shows inspired by popular movies and TV shows, like Jurassic World, Harry Potter, and Transformers, immersing themselves in cinematic worlds with state-of-the-art technology. The park also offers the iconic Studio Tour, where guests can explore real film sets and see special effects demonstrations. With shopping, dining, and a lively atmosphere on the adjacent Universal CityWalk, Universal Studios Hollywood is a must-visit for fans of movies and theme parks alike.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Bestia",
                img: "img/us/los-angeles/PTE1.jpeg",
                blurb: "Located in LA's Arts District, Bestia is a trendy, industrial-style Italian restaurant known for its lively atmosphere and open kitchen. The menu features handmade pastas like Bottarga and Pork Sausage, alongside wood-fired pizzas, charcuterie boards, and seasonal vegetables. Their butterscotch budino dessert is a fan favorite. Due to its popularity, reservations are highly recommended and often book up weeks in advance. Bestia’s vibrant crowd makes it a top choice for food enthusiasts and social gatherings.",
                isSelected: false,
            },
            {
                name: "Republique",
                img: "img/us/los-angeles/PTE2.jpeg",
                blurb: "Located on La Brea Avenue in a historic building, Republique offers a French-inspired dining experience in a beautiful space with high ceilings, large windows, and a mix of modern and rustic decor. The menu is varied, covering breakfast through dinner, with popular dishes like the Croque Madame, roasted chicken, and seasonal vegetables, as well as an impressive selection of pastries and baked goods. Reservations are recommended, especially for dinner, as the bustling yet relaxed atmosphere makes it ideal for both casual meals and special occasions.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Hollywood Roosevelt",
                img: "img/us/los-angeles/LO1.jpeg",
                blurb: "Located on Hollywood Boulevard near the Walk of Fame, The Hollywood Roosevelt is a historic luxury hotel that opened in 1927, blending old Hollywood charm with modern amenities. It features elegant rooms, a stylish pool area, and classic dining options like 25 Degrees for gourmet burgers. Known for its vintage vibe and rich history, the hotel has hosted numerous celebrities over the years, creating a glamorous, lively atmosphere enjoyed by tourists and locals alike.",
                isSelected: false,
            },
            {
                name: "Shutters on the Beach",
                img: "img/us/los-angeles/LO2.jpeg",
                blurb: "Located on Santa Monica Beach, Shutters on the Beach is a coastal luxury hotel offering a quintessential California experience with charming shingle-style architecture and stunning ocean views. The hotel features spacious rooms with classic coastal decor, a relaxing spa, and a beautiful outdoor pool, along with direct beach access just steps from the Santa Monica Pier and Third Street Promenade. With its relaxed, elegant vibe, Shutters is ideal for couples and families seeking a beachside getaway.",
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
                name: "The Statue of Liberty",
                img: "img/us/new-york/TS1.jpeg",
                blurb: "The Statue of Liberty is an iconic symbol of freedom and democracy located on Liberty Island in New York Harbor. Gifted to the United States by France in 1886, the statue was designed by French sculptor Frédéric Auguste Bartholdi and represents Libertas, the Roman goddess of freedom. Standing at 305 feet tall from the base to the tip of the torch, it features a copper exterior that has developed a distinctive green patina over time. The statue holds a torch in her right hand, symbolizing enlightenment, and a tablet inscribed with the date of the American Declaration of Independence in her left. As one of the most recognized landmarks in the world, the Statue of Liberty serves as a welcoming beacon for immigrants and a powerful reminder of the values of liberty and opportunity that the United States represents. Visitors can explore the island, learn about the statue's history at the museum, and even climb to the crown for panoramic views of the harbor and Manhattan skyline.",
                isSelected: false,
            },
            {
                name: "The Empire State Building",
                img: "img/us/new-york/TS2.jpeg",
                blurb: "The Empire State Building is an iconic skyscraper located in Midtown Manhattan, New York City, and is one of the most recognizable landmarks in the world. Completed in 1931, this Art Deco masterpiece stands 1,454 feet tall, including its antenna, and has 102 floors. Designed by architect William F. Lamb, the building was the tallest in the world until 1970 and remains a symbol of American ingenuity and ambition. Visitors can access observatories on the 86th and 102nd floors, offering breathtaking panoramic views of the New York City skyline and beyond. The building is also renowned for its stunning lighting displays, which change colors to commemorate holidays and events. As a cultural icon, the Empire State Building has appeared in numerous films and television shows, further cementing its status as a must-visit destination for tourists and locals alike.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Katz's Delicatessen",
                img: "img/us/new-york/PTE1.jpeg",
                blurb: "Katz's Delicatessen is a legendary Jewish deli located on the Lower East Side of Manhattan, renowned for its mouthwatering pastrami sandwiches and rich history. Established in 1888, this iconic eatery has become a must-visit for both locals and tourists. The menu features classic deli items, but the pastrami on rye is the standout, served with mustard and piled high. Guests can enjoy the vibrant atmosphere, filled with the chatter of patrons and the hustle of the staff, while they immerse themselves in the deli's storied past, which includes appearances in films and television shows. Katz's is not just a meal; it's an experience that captures the essence of New York's culinary heritage.",
                isSelected: false,
            },
            {
                name: "Le Bernardin",
                img: "img/us/new-york/PTE2.jpeg",
                blurb: "Le Bernardin is a Michelin-starred French seafood restaurant that stands as a pinnacle of fine dining in New York City. Located in Midtown Manhattan, it is celebrated for its exquisite dishes crafted by Chef Éric Ripert, who emphasizes fresh ingredients and meticulous technique. The restaurant offers a prix fixe menu that showcases a variety of seafood preparations, including their renowned poached lobster and delicate tuna tartare. The elegant decor, complete with soft lighting and a refined ambiance, sets the stage for a memorable dining experience. With its commitment to culinary excellence and impeccable service, Le Bernardin is a destination for food lovers seeking a taste of sophistication in the heart of the city.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Standard, High Line",
                img: "img/us/new-york/LO1.jpeg",
                blurb: "The Standard, High Line is a trendy hotel located in the Meatpacking District, offering stunning views of the Hudson River and the Manhattan skyline. With its modern design and chic decor, the hotel features spacious rooms equipped with floor-to-ceiling windows that provide ample natural light. Guests can enjoy the rooftop bar, Le Bain, which boasts a lively atmosphere and sweeping views of the city, as well as a vibrant dining scene with farm-to-table options at The Standard Grill. The hotel is conveniently situated near popular attractions like the High Line Park and Chelsea Market, making it an ideal base for exploring New York City.",
                isSelected: false,
            },
            {
                name: "The Langham, New York, Fifth Avenue",
                img: "img/us/new-york/LO2.jpeg",
                blurb: "The Langham, New York, Fifth Avenue is a luxurious hotel that combines modern elegance with exceptional service. Located just steps away from iconic landmarks such as the Empire State Building and Bryant Park, the hotel offers spacious rooms with stylish furnishings and upscale amenities. Guests can indulge in fine dining at the on-site restaurant, Ai Fiori, which serves Italian and French cuisine, or unwind at the chic Chuan Body + Soul spa. The Langham's central location, coupled with its commitment to providing a first-class experience, makes it a favorite among travelers seeking both comfort and sophistication in the heart of Manhattan.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Seattle",
        country: "United States",
        population: "759,915",
        state: "Washington",
        top_spots: [
            {
                name: "Space Needle",
                img: "img/us/seattle/spot1.jpeg",
                blurb:"Standing 605 ft tall, the Space Needle, visitors can experience beautiful views through the world's only revolving glass floor including Elliot Bay, the Cascade Mountains, and Mount Rainer. The Needle hosts an exclusive culinary experience that combines artfully crafted cocktails with locally influenced food towers.",
                isSelected: false,
            },
            {
                name: "Chihuly Garden and Glass Museum",
                img: "img/us/seattle/spot2.jpg",
                blurb: "The Chihuly Garden and Glass Museum celebrates the colorful glass art of Dale Chihuly. His collection includes a stunning 100-foot-long sculpture suspended in the Glasshouse and seasonal garden displays that beautifully complement his work. The Glasshouse is a striking, light-filled space designed to showcase Chihuly’s largest glass sculpture. Visitors can watch behind-the-scenes videos of Chihuly and his team creating ambitious glass installations in the theater.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Katz's Delicatessen",
                img: "src/img/us/seattle/eat1.avif",
                blurb: "Located in the heart of downtown Seattle, Ludi's Restaurant & Lounge has been a cherished gathering spot since 1936. This family-owned diner prides itself on creating a warm, inviting atmosphere where every visit feels like coming home. Their menu blends tradition and unique flavors with a taste of the Philippines alongside timeless American favorites. Don't miss their signature ube pancakes—fluffy and vibrant, topped with a rich, purple coconut glaze that adds an exotic twist to a breakfast staple.",
                isSelected: false,
            },
            {
                name: "Le Bernardin",
                img: "src/img/us/seattle/eat2.jpeg",
                blurb: "Local Tide offers a seafood-focused menu of sandwiches that highlights the quality of locally sourced fish with simple, crave-worthy preparations. Dining in is easy even on weekends, though takeout is perfect for a waterside picnic at nearby Gasworks Park. Local Tide offers a Seattle seafood experience that’s refreshingly down-to-earth and delicious.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Edgewater",
                img: "img/us/seattle/lodging1.jpg",
                blurb: "Originally built for the 1962 World’s Fair, the Edgewater Hotel blends Seattle’s musical history with outstanding views of the Olympic Mountains, Elliott Bay, and the city skyline. Nestled on Pier 67, this iconic hotel offers luxurious waterfront and cityside rooms. Guests can indulge in Pacific Northwest cuisine at Six Seven, where seasonal ingredients meet stunning Puget Sound views, or explore the city’s best from a location that’s a short walk from Seattle’s top spots. The Edgewater promises an unforgettable Seattle experience, complete with a coffee shop showcasing local goods and cozy spots to start your adventures.",
                isSelected: false,
            },
            {
                name: "Hotel Theodore",
                img: "img/us/seattle/lodging2.webp",
                blurb: "Located in downtown Seattle, our boutique hotel celebrates the city’s legacy of makers and innovators, offering a truly unique Emerald City experience. Each room is a thoughtfully crafted retreat, reflecting Seattle’s dynamic spirit with art and artifacts curated from local history. Enjoy playful amenities, carefully tailored experiences, and regional cuisine designed for today’s travelers—capturing Seattle’s essence in every detail.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Miami",
        country: "United States",
        population: "460,289",
        state: "Florida",
        top_spots: [
            {
                name: "Vizcaya Museum & Gardens",
                img: "img/us/miami/spot1.png",
                blurb: "Built in 1914 as a winter estate Vizcaya Museum & Gardens captures European grandeur with a touch of Miami’s natural beauty. The mansion is furnished with treasures from Europe, filling its 70 rooms with 15th-century antiques, murals, and stained glass. The 10-acre Formal Gardens evokes Versailles with geometric walkways, classical statues, and a touch of Miami tropicality from orchids, palms, and limestone. Events like full-moon parties and outdoor yoga connect visitors to this Miami icon’s rich history, offering a memorable experience steeped in artistry and adventure.",
                isSelected: false,
            },
            {
                name: "Superblue Miami",
                img: "img/us/miami/spot2.jpeg",
                blurb: "This experiential museum invites visitors to walk through the imaginations of some of the world’s most innovative artists. With interactive installations that project themes from floor to ceiling, Superblue transforms each room into an experience that’s as thought-provoking as it is Instagram-worthy. Cutting-edge technology brings every piece to life, ensuring that each visit is unique, inspiring, and entirely unforgettable.",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Motek Cafe",
                img: "img/us/miami/eat1.jpg",
                blurb: "Motek is a Mediterranean all-day brunch bistro that brings a modern, Kosher-style dining experience to Miami, celebrating flavors from Tel Aviv to the Eastern Mediterranean and Middle East. Named 'sweetheart' in Hebrew, Motek invites guests into a bright, welcoming space that feels like home. Each Miami location has a unique ambiance inspired by Israeli cities like Jaffa, with vibrant colors, airy indoor/outdoor seating, and floral touches.",
                isSelected: false,
            },
            {
                name: "Mignonette",
                img: "img/us/miami/eat2.webp",
                blurb: "Mignonette brings a modern spin to the classic seafood restaurant, crafted by chef Danny Serfer of Blue Collar and partner Ryan Roman. Housed in a 1930s former gas station in Edgewater, this spot combines laid-back vibes with upscale elements, featuring a rotating selection of oysters displayed beneath a vintage marquee. Beyond bivalves, menu highlights include the New England-style lobster roll, crispy skin snapper, and black grouper with Carolina gold rice. For non-seafood lovers, options like prime rib, chicken, and a seasonal veggie board add variety to this refined yet approachable dining experience.",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "Esmé Miami Beach",
                img: "img/us/miami/lodging2.jpeg",
                blurb: "Esme Miami Beach is a boutique hotel that exudes Jazz Age charm and a neo-Spanish-Mediterranean vibe, featuring excellent dining options, unique decor, and a chic rooftop pool and lounge. The rooms showcase Spanish and Latin design touches, with cozy 'Village' rooms and suites in Casa Matanza offering extra amenities. Dining options include a rooftop bar with light fare, El Salon for speakeasy-style cocktails, and Tropzeon, an Andalusian restaurant serving tapas and paella. Located in the heart of South Beach, Esme is close to the beach, nightlife, and cultural attractions, with friendly staff providing attentive service.",
                isSelected: false,
            },
            {
                name: "The Goodtime Hotel",
                img: "img/us/miami/lodging2.jpeg",
                blurb: "The Goodtime Hotel is located just outside the vibrant South Beach area. The hotel emphasizes intimate spaces that encourage exploration and connection, with a third floor dedicated to shared experiences, from meditation to community gatherings. The centerpiece, Strawberry Moon, offers a lively atmosphere with Mediterranean dishes and comfort food classics in a bright indoor-outdoor setting. Guests can relax by the expansive pool lounge, unwind in the library, or exercise in the state-of-the-art gym equipped with Peloton bikes. At Goodtime Hotel, the focus is on creating memorable experiences that nurture emotional well-being.",
                isSelected: false,
            },
        ],
    },
    {
        name: "Chicago",
        country: "United States",
        population: "2,638,159",
        state: "Illinois",
        top_spots: [
            {
                name: "The Statue of Liberty",
                img: "img/us/new-york/TS1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Empire State Building",
                img: "img/us/new-york/TS2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Katz's Delicatessen",
                img: "img/us/new-york/PTE1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Le Bernardin",
                img: "img/us/new-york/PTE2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Standard, High Line",
                img: "img/us/new-york/LO1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Langham, New York, Fifth Avenue",
                img: "img/us/new-york/LO2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Las Vegas",
        country: "United States",
        population: "665,640",
        state: "Nebada",
        top_spots: [
            {
                name: "The Statue of Liberty",
                img: "img/us/new-york/TS1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Empire State Building",
                img: "img/us/new-york/TS2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Katz's Delicatessen",
                img: "img/us/new-york/PTE1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Le Bernardin",
                img: "img/us/new-york/PTE2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Standard, High Line",
                img: "img/us/new-york/LO1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Langham, New York, Fifth Avenue",
                img: "img/us/new-york/LO2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Washington",
        country: "United States",
        population: "5,545,000",
        state: "District of Columbia",
        top_spots: [
            {
                name: "The Statue of Liberty",
                img: "img/us/new-york/TS1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Empire State Building",
                img: "img/us/new-york/TS2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Katz's Delicatessen",
                img: "img/us/new-york/PTE1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Le Bernardin",
                img: "img/us/new-york/PTE2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Standard, High Line",
                img: "img/us/new-york/LO1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Langham, New York, Fifth Avenue",
                img: "img/us/new-york/LO2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
    },
    {
        name: "Philadelphia",
        country: "United States",
        population: "12,951,300",
        state: "Pennsylvania",
        top_spots: [
            {
                name: "The Statue of Liberty",
                img: "img/us/new-york/TS1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Empire State Building",
                img: "img/us/new-york/TS2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        places_to_eat: [
            {
                name: "Katz's Delicatessen",
                img: "img/us/new-york/PTE1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "Le Bernardin",
                img: "img/us/new-york/PTE2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
        lodging: [
            {
                name: "The Standard, High Line",
                img: "img/us/new-york/LO1.jpeg",
                blurb: "",
                isSelected: false,
            },
            {
                name: "The Langham, New York, Fifth Avenue",
                img: "img/us/new-york/LO2.jpeg",
                blurb: "",
                isSelected: false,
            },
        ],
    },
];