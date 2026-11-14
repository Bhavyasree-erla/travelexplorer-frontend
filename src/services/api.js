import axios from "axios";

const api = axios.create({
 baseURL: " https://travelexplorer-backend1.onrender.com"
});

export default api;
