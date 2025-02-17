import axios from "axios";
 
const api = axios.create({
    baseURL: "https://localhost:8500/api",
});

export default api;