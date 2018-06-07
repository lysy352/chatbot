import axios from 'axios';

class ResponseService {
  constructor() {
    this.host = 'https://chatbotpl.herokuapp.com';
  }

  getRandomResponse() {
    return axios.get(this.host + '/api/message/random');
  }
}

export default new ResponseService();
