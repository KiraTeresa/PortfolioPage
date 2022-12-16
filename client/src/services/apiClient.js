import axios from "axios";

const baseURL = process.env.BACKEND_URL || "http://localhost:5005";

const apiClient = axios.create({baseURL});

export default apiClient;