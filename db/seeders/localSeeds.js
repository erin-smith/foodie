module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('locals',  [
        {
          "id" : 1,
          "name" : "Richard Blais",
          "awards" : "Top Chef Season 8 Winner",
          "restaurants" : "Juniper & Ivy, Crack Shack, Ember & Rye",
          "city" : "San Diego, CA"
        },
        {
          "id" : 2,
          "name" : "Akira Back",
          "awards" : "1 Michelin Star",
          "restaurants" : "Lumi",
          "city" : "San Diego, CA"
        },
        {
          "id" : 3,
          "name" : "Carl Schroeder",
          "awards" : "James Beard Best Chef nominee",
          "restaurants" : "Market Restaurant + Bar, Banker's Hill Bar and Restaurant",
          "city" : "La Jolla, CA"
        },
        {
          "id" : 4,
          "name" : "Davin Waite",
          "awards" : null,
          "restaurants" : "Wrench & Rodent Seabasstropub, The Whet Noodle, The Plot",
          "city" : "Oceanside, CA"
        },
        {
          "id" : 5,
          "name" : "Michael Mina",
          "awards" : "2 Michelin Stars",
          "restaurants" : "International Smoke",
          "city" : "Del Mar, CA"
        },
        {
          "id" : 6,
          "name" : "Rick Bayless",
          "awards" : "1 Michelin star",
          "restaurants" : "Red O",
          "city" : "San Diego, CA"
        },
        {
          "id" : 7,
          "name" : "Luciano Cibelli",
          "awards" : null,
          "restaurants" : "The Red Door",
          "city" : "San Diego, CA"
        },
        {
          "id" : 8,
          "name" : "William Bradley",
          "awards" : "1 Michelin Star, Relais & Châteaux Grand Chef",
          "restaurants" : "Addison",
          "city" : "San Diego, CA"
        },
        {
          "id" : 9,
          "name" : "David and Lesley Cohn",
          "awards" : null,
          "restaurants" : "333 Pacific, The Prado, Vin de Syrah, ",
          "city" : "San Diego, CA"
        },
        {
          "id" : 10,
          "name" : "David Abella",
          "awards" : null,
          "restaurants" : "West Steak & Seafood",
          "city" : "Carlsbad, CA"
        },
        {
          "id" : 11,
          "name" : "Trey Foshee",
          "awards" : "America’s Ten Best New chefsby Food & Wine magazine",
          "restaurants" : "George's at the Cove, California Modern, Galaxy Taco",
          "city" : "La Jolla, CA"
        },
        {
          "id" : 12,
          "name" : "Jason Ambacher",
          "awards" : "Michelin Guide- New Discovery",
          "restaurants" : "Dija Mara",
          "city" : "Oceanside, CA"
        },
        {
          "id" : 13,
          "name" : "Eric Bost, Andrew Bachelier",
          "awards" : "Michelin Bib Gourmand award",
          "restaurants" : "Jeune et Jolie, Campfire ",
          "city" : "Carlsbad, CA"
        },
        {
          "id" : 14,
          "name" : "Jeff Jackson",
          "awards" : "USA Bocuse d'or Culinary Gold Cup winner",
          "restaurants" : "A.R. Valentien",
          "city" : "La Jolla, CA"
        },
        {
          "id" : 15,
          "name" : "Tracy Borkum",
          "awards" : null,
          "restaurants" : "CUCINA urbana, cucina SORELLA, CUCINA enoteca",
          "city" : "San Diego, CA"
        },
        {
          "id" : 16,
          "name" : "Jason Knibb",
          "awards" : "2009 San Diego Chef Hall of Fame",
          "restaurants" : "Nine-Ten Restaurant and Bar",
          "city" : "La Jolla, CA"
        },
        {
          "id" : 17,
          "name" : "Brian Redzikowski",
          "awards" : null,
          "restaurants" : "Kettner Exchange, Waverly, The Grass Skirt, Good Time Poke ",
          "city" : "San Diego, CA"
        },
        {
          "id" : 18,
          "name" : "Brian Malarkey",
          "awards" : "Top Chef Alumnus",
          "restaurants" : "Herb and Wood, Seersucker, Herringbone, Farmer & The Seahorse",
          "city" : "San Diego, CA"
        },
        {
          "id" : 19,
          "name" : "Claudette Zepeda",
          "awards" : " 2019 MICHELIN Bib Gourmand",
          "restaurants" : "Vaga",
          "city" : "Encinitas, CA"
        },
        {
          "id" : 20,
          "name" : "Brad Wise",
          "awards" : "U-T 2019 Chef of the Year",
          "restaurants" : "Trust, The Wise Ox Butcher & Eatery, Fort Oak",
          "city" : "San Diego, CA"
        },
        {
          "id" : 21,
          "name" : "Takashi Endo",
          "awards" : null,
          "restaurants" : "Menya Ultra",
          "city" : "San Diego, CA"
        },
        {
          "id" : 22,
          "name" : "Jason McLeod",
          "awards" : "2 Michelin Stars",
          "restaurants" : "Ironside Fish and Oyster, Craft & Commerce, Soda and Swine, Underbelly, Neighborhood, Born & Raised",
          "city" : "San Diego, CA"
        },
        {
          "id" : 23,
          "name" : "Angelo Sosa",
          "awards" : "Top Chef Alumnus",
          "restaurants" : "Death by Tequila",
          "city" : "Encinitas, CA"
        },
        {
          "id" : 24,
          "name" : "Bertrand Hug, Stephane Voitzwinkler",
          "awards" : null,
          "restaurants" : "Mister A's, Mille Fleurs",
          "city" : "San Diego, CA"
        },
        {
          "id" : 25,
          "name" : "Chef Ota",
          "awards" : null,
          "restaurants" : "Sushi Ota",
          "city" : "San Diego, CA"
        },
        {
          "id" : 26,
          "name" : "Bernard Guillas",
          "awards" : "The MICHELIN Plate: Good cooking",
          "restaurants" : "The Marine Room",
          "city" : "La Jolla, CA"
        },
        {
          "id" : 27,
          "name" : "Dario and Pietro Gallo",
          "awards" : "1 Michelin Star",
          "restaurants" : "Civico 1845, Civico at the Park",
          "city" : "La Jolla, CA"
        }
      ], {});
    },
  
    down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('locals', null, {});
    }
  };
  
  