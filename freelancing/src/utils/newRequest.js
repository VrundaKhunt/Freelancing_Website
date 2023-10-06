import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://freelancing-website-zeta.vercel.app",
    withCredentials: true,
})

export default newRequest;
