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
];