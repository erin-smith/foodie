// First, import MySQL connection.
const connection = require("../config/connection.js");

//builds query syntax for SQL with (?,?) values
function myQuestionmarks (howmany)
{
  const myArr = [];

  for (var i = 0; i < howmany; i++) {
    myArr.push("?");
  }

  return myArr.toString();
}

//object to SQL syntax
function convertToSql (myObj)
{
  const arrTwo = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in myObj) {
    let value = myObj[key];

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(myObj, key)) {

      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arrTwo.push(key + "=" + value);
    }
  }

  //array of strings --> single string
  return arrTwo.toString();
}

// Object for SQL Methods that execute mySQL commands in controllers.
const orm = {
  selectAll: (chefs, callback) =>
  {
    let queryString = "SELECT * FROM chefs WHERE chefs_name IS NOT NULL";
    connection.query(queryString, (err, res) =>
    {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  selectAll: (locals, callback) =>
  {
    let queryString = "SELECT * FROM locals WHERE locals_name IS NOT NULL";
    connection.query(queryString, (err, res) =>
    {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  insertOne: (table, columns, values, callback) =>
  {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += myQuestionmarks(values.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, (err, res) =>
    {
      if (err) {
        console.log("throwing error:", err)
        throw err;
      }

      callback(res);
    });
  },

  updateOne: (table, columnData, callback) =>
  {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += convertToSql(columnData);
    queryString += " WHERE ";

    console.log(queryString);
    connection.query(queryString, (err, res) =>
    {
      if (err) {
        throw err;
      }

      callback(res);
    });
  }
};

module.exports = orm;

