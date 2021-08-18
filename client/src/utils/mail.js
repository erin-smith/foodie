import axios from "axios";



export default {
  sendMail: function(settings) {
    return axios.post(settings.url, settings.data);
  }
};