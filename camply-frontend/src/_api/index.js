import axios from "axios";

const baseURL = 'http://127.0.0.1:8000'

const API = axios.create({
  baseURL: `${baseURL}/api`,
});

const STORAGE = `${baseURL}/storage`

export { API, STORAGE }; 