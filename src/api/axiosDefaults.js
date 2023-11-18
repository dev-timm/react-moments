import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-exercise-b02895a92ceb.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();