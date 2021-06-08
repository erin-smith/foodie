CREATE DATABASE chefs;
USE chef;

-- Create the table actors.
CREATE TABLE chefs (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  awards varchar(60) NOT NULL,
  restaurants varchar(255) NOT NULL,
  city varchar (60) NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Ilan Hall", "Top Chef Season 2 Winner", "Ramen Hood", "Los Angeles, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Hung Huynh", "Top Chef Season 3 Winner", "Warrior", "Los Angeles, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Stephanie Izard", "Top Chef Season 4 Winner", "Girl & the Goat, Little Goat Diner, Duck Duck Goat, Cabra, Sugargoat Bakery", "Chicago, IL");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Hosea Rosenberg", "Top Chef Season 5 Winner", "Blackbelly, Santo", "Boulder CO");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Michael Voltaggio", "Top Chef Season 6 Winner", "Sack Sandwiches (L.A.), STRFSH (Santa Monica), Voltaggio Brothers Steakhouse (Oxon Hill, Md), Estuary (Washington DC)", "Los Angeles, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Richard Blais", "Top Chef Season 8 Winner", "Juniper & Ivy, Crack Shack, Ember & Rye", "San Diego, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Kristen Kish", "Top Chef Season 10 Winner", "Arlo Grey", "Austin, TX");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Nicholas Elmi", "Top Chef Season 11 Winner", "Laurel, ITV, Royal Boucherie", "Philadelphia, PA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Mei Lin", "Top Chef Season 12 Winner", "Nightshade, Daybird", "Los Angeles, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Jeremy Ford", "Top Chef Season 13 Winner", "Stubborn Seed", "Miami Beach, FL");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Brooke Williamson", "Top Chef Season 14 Winner", "Playa Provisions", "Los Angeles, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Joe Flamm", "Top Chef Season 15 Winner", "Rose Mary", "Chicago, IL");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Kelsey Barnard Clark", "Top Chef Season 16 Winner", "KBC", "Dothan, AL");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Melissa King", "Top Chef Season 17 Winner", "King Sauce", "San Francisco, CA");

INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Mario Batali", "Top Chef Season 6 Winner", "Sack Sandwiches (L.A.), STRFSH (Santa Monica), Voltaggio Brothers Steakhouse (Oxon Hill, Md), Estuary (Washington DC)", "Los Angeles, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Melissa Perello", "1 Michelin Star", "Frances, Octavia, M. Georgina (L.A.)", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("David Chang", "2 Michelin Stars", "Momofuku Ko", "New York, NY");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Iliana Regan", "1 Michelin Star", "Elizabeth, The Milkweed Inn", "Nahma Township, the UP, MI");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Thomas Keller", "3 Michelin Stars", "The French Laundry, Per Se (New York, NY)", "Napa, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Wolfgang Puck", "2 Michelin Stars", "Spago (Beverly Hills, Las Vegs, Maui), Postrio, Trattoria del Lupo, CUT", "Los Angeles, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Christopher Kostow", "3 Michelin Stars", "The Restaurant at Meadowood", "Napa Valley, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("David Kinch", "3 Michelin Stars", "Manresa", "Los Gatos, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Michael Tusk", "3 Michelin Stars", "Quince", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Dominique Crenn", "3 Michelin Stars", "Atelier Crenn, Bar Crenn", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Suzette Gresham", "2 Michelin Stars", "Acquerello", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Niki Nakayama", "2 Michelin Stars", "n/naka", "Los Angeles, CA");


INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Daniel Boulud", "2 Michelin Stars", "Daniel", "New York, NY");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Matthew Kirkley", "2 Michelin Stars", "Coi", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Jean-Georges Vongerichten", "3 Michelin Stars", "Jean-Georges", "New York, NY");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("César Ramirez", "3 Michelin Stars", "Chef's Table - Brooklyn Fare", "New York, NY");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Masayoshi Takayama", "3 Michelin Stars", "Masa", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Corey Lee", "3 Michelin Stars", "Benu", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Daniel Humm", "3 Michelin Stars", "Eleven Madison Park, The NoMad", "New York, NY");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Eric Ripert", "3 Michelin Stars", "Le Bernardin", "New York, NY");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Joshua Skenes", "3 Michelin Stars", "Saison", "San Francisco, CA");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Grant Achatz", "3 Michelin Stars", "Alinea", "Chicago, IL");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Curtis Duffy", "3 Michelin Stars", "Grace", "Chicago, IL");
INSERT INTO chefs (name, awards, restaurants, city) VALUES ("Dan Barber", "2 Michelin Stars", "Blue Hill at Stone Barns", "Pocantico Hilla, NY");