import axios from "axios";

export default {
  // Gets all books
 getChefs: function() {
    return axios.get("/api/chefs")
    
  },
  // Gets the book with the given id
  getLocals: function() {
    return axios.get("/api/locals");
  }
};

