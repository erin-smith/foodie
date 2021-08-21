// // Set up MySQL  and connect it to Node!
const  {Sequelize} = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config.json')[env];
const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(config.database, config.username, config.password, config)
};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// Makes a connection.
try {
 sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

connection.connect();
module.exports = sequelize;