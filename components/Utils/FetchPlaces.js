import axios from 'axios'; // import axios

const BASE_URL = 'https://maps.googleapis.com/maps/api/place'; // base url
const API_KEY = 'AIzaSyASYkqZxpGg4A2cE9bYqTu96jWhLjnk0b4'; // api key

const nearbyHospitals = (lat, lng) =>
  axios.get(
    BASE_URL + // axios get request
      '/nearbysearch/json?' + // nearbysearch
      'location=' +
      lat +
      ',' +
      lng +
      '&radius=5000&type=hospital' + // location
      '&key=' +
      API_KEY,
  ); // fetch nearby hospitals

export default {
  nearbyHospitals, // export the function
};
