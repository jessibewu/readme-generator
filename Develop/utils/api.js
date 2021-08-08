const axios = require('axios');

const api = {
  async getUser(userResponses) {
    try { let response = await axios
        
      // Sample Github URL: https://api.github.com/users/jessibewu
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;