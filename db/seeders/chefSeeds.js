'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('chefs', [
    {
      "id" : 1,
      "name" : "Ilan Hall",
      "awards" : "Top Chef Season 2 Winner",
      "restaurants" : "Ramen Hood",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 2,
      "name" : "Hung Huynh",
      "awards" : "Top Chef Season 3 Winner",
      "restaurants" : "Warrior",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 3,
      "name" : "Stephanie Izard",
      "awards" : "Top Chef Season 4 Winner",
      "restaurants" : "Girl & the Goat, Little Goat Diner, Duck Duck Goat, Cabra, Sugargoat Bakery",
      "city" : "Chicago, IL"
    },
    {
      "id" : 4,
      "name" : "Hosea Rosenberg",
      "awards" : "Top Chef Season 5 Winner",
      "restaurants" : "Blackbelly, Santo",
      "city" : "Boulder CO"
    },
    {
      "id" : 5,
      "name" : "Michael Voltaggio",
      "awards" : "Top Chef Season 6 Winner",
      "restaurants" : "Sack Sandwiches, STRFSH, Voltaggio Brothers Steakhouse, Estuary",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 6,
      "name" : "Richard Blais",
      "awards" : "Top Chef Season 8 Winner",
      "restaurants" : "Juniper & Ivy, Crack Shack, Ember & Rye",
      "city" : "San Diego, CA"
    },
    {
      "id" : 7,
      "name" : "Kristen Kish",
      "awards" : "Top Chef Season 10 Winner",
      "restaurants" : "Arlo Grey",
      "city" : "Austin, TX"
    },
    {
      "id" : 8,
      "name" : "Nicholas Elmi",
      "awards" : "Top Chef Season 11 Winner",
      "restaurants" : "Laurel, ITV, Royal Boucherie",
      "city" : "Philadelphia, PA"
    },
    {
      "id" : 9,
      "name" : "Mei Lin",
      "awards" : "Top Chef Season 12 Winner",
      "restaurants" : "Nightshade, Daybird",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 10,
      "name" : "Jeremy Ford",
      "awards" : "Top Chef Season 13 Winner",
      "restaurants" : "Stubborn Seed",
      "city" : "Miami Beach, FL"
    },
    {
      "id" : 11,
      "name" : "Brooke Williamson",
      "awards" : "Top Chef Season 14 Winner",
      "restaurants" : "Playa Provisions",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 12,
      "name" : "Joe Flamm",
      "awards" : "Top Chef Season 15 Winner",
      "restaurants" : "Rose Mary",
      "city" : "Chicago, IL"
    },
    {
      "id" : 13,
      "name" : "Kelsey Barnard Clark",
      "awards" : "Top Chef Season 16 Winner",
      "restaurants" : "KBC",
      "city" : "Dothan, AL"
    },
    {
      "id" : 14,
      "name" : "Melissa King",
      "awards" : "Top Chef Season 17 Winner",
      "restaurants" : "King Sauce",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 15,
      "name" : "Melissa Perello",
      "awards" : "1 Michelin Star",
      "restaurants" : "Frances, Octavia, M. Georgina (L.A.)",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 16,
      "name" : "David Chang",
      "awards" : "2 Michelin Stars",
      "restaurants" : "Momofuku Ko",
      "city" : "New York, NY"
    },
    {
      "id" : 17,
      "name" : "Iliana Regan",
      "awards" : "1 Michelin Star",
      "restaurants" : "Elizabeth, The Milkweed Inn",
      "city" : "Nahma Township, the UP, MI"
    },
    {
      "id" : 18,
      "name" : "Thomas Keller",
      "awards" : "3 Michelin Stars",
      "restaurants" : "The French Laundry, Per Se (New York, NY)",
      "city" : "Napa, CA"
    },
    {
      "id" : 19,
      "name" : "Wolfgang Puck",
      "awards" : "2 Michelin Stars",
      "restaurants" : "Spago, Postrio, Trattoria del Lupo, CUT",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 20,
      "name" : "Christopher Kostow",
      "awards" : "3 Michelin Stars",
      "restaurants" : "The Restaurant at Meadowood",
      "city" : "Napa Valley, CA"
    },
    {
      "id" : 21,
      "name" : "David Kinch",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Manresa",
      "city" : "Los Gatos, CA"
    },
    {
      "id" : 22,
      "name" : "Michael Tusk",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Quince",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 23,
      "name" : "Dominique Crenn",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Atelier Crenn, Bar Crenn",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 24,
      "name" : "Suzette Gresham",
      "awards" : "2 Michelin Stars",
      "restaurants" : "Acquerello",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 25,
      "name" : "Niki Nakayama",
      "awards" : "2 Michelin Stars",
      "restaurants" : "n/naka",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 26,
      "name" : "Alice Waters",
      "awards" : "1 Michelin Star",
      "restaurants" : "Chez Panisse",
      "city" : "Berkeley, CA"
    },
    {
      "id" : 27,
      "name" : "Jeremiah Tower",
      "awards" : "James Beard Foundation Award for Best Chef in California",
      "restaurants" : "Stars (closed), Tavern on the Green",
      "city" : "New York, NY"
    },
    {
      "id" : 28,
      "name" : "Paul Bertolli",
      "awards" : "James Beard Foundation Award for Best Chef in California",
      "restaurants" : "Oliveto (closed), Fra’ Mani Handcrafted Foods",
      "city" : "Los Angeles, CA"
    },
    {
      "id" : 29,
      "name" : "Jacques Pépin",
      "awards" : "24 James Beard Foundation Awards,  Légion d'honneur",
      "restaurants" : "Hôtel Plaza Athénée, Le Pavillon, Howard Johnson's, La Potagerie (all CLOSED)",
      "city" : "New York, NY"
    },
    {
      "id" : 30,
      "name" : "Daniel Boulud",
      "awards" : "2 Michelin Stars",
      "restaurants" : "Daniel",
      "city" : "New York, NY"
    },
    {
      "id" : 31,
      "name" : "Matthew Kirkley",
      "awards" : "2 Michelin Stars",
      "restaurants" : "Coi",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 32,
      "name" : "Jean-Georges Vongerichten",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Jean-Georges",
      "city" : "New York, NY"
    },
    {
      "id" : 33,
      "name" : "César Ramirez",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Chef's Table - Brooklyn Fare",
      "city" : "New York, NY"
    },
    {
      "id" : 34,
      "name" : "Masayoshi Takayama",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Masa",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 35,
      "name" : "Corey Lee",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Benu",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 36,
      "name" : "Daniel Humm",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Eleven Madison Park, The NoMad",
      "city" : "New York, NY"
    },
    {
      "id" : 37,
      "name" : "Eric Ripert",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Le Bernardin",
      "city" : "New York, NY"
    },
    {
      "id" : 38,
      "name" : "Joshua Skenes",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Saison",
      "city" : "San Francisco, CA"
    },
    {
      "id" : 39,
      "name" : "Grant Achatz",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Alinea",
      "city" : "Chicago, IL"
    },
    {
      "id" : 40,
      "name" : "Curtis Duffy",
      "awards" : "3 Michelin Stars",
      "restaurants" : "Grace",
      "city" : "Chicago, IL"
    },
    {
      "id" : 41,
      "name" : "Dan Barber",
      "awards" : "2 Michelin Stars",
      "restaurants" : "Blue Hill at Stone Barns",
      "city" : "Pocantico Hilla, NY"
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('chefs', null, {});
  }
};


