import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://127.0.0.1:5001/chall-dcfa5/us-central1/api"
    // 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
});

export default instance;


