'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
  return queryInterface.bulkInsert('chefs', [{
     name: "Ilan Hall",  
     awards:"Top Chef Season 2 Winner",
     restaurants:"Ramen Hood",
     city:  "Los Angeles, CA"
  }, {
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA"
  },{
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA" 
  },{
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA" 
  },{
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA" 
  },{
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA"
  },{
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA"
  },{
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA" 
  },{
    name: "Hung Huynh",
    awards: "Top Chef Season 3 Winner", 
    restaurants: "Warrior", 
    city: "Los Angeles, CA"}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('chefs', null, {});
  }
};
