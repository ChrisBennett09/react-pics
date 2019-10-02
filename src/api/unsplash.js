import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID d6087685737cab7145de4aefd107adfef7cfeea02f77f2c089c6281f34f61f28'
  }
});
