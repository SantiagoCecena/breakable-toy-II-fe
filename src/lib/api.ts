import axios from 'axios';

export const auth_instance = axios.create({
    baseURL: "http://127.0.0.1:8080/api/auth",

})

export const spotify_instance = axios.create({
    baseURL: "http://127.0.0.1:8080/api/spotify"
})

spotify_instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            window.location.href = "/login";
        }
        return config;
    }, (error) => Promise.reject(error)
)

spotify_instance.interceptors.response.use(null, (error) => {
    if (error.response) {
        if (error.response.status === 401) {
            localStorage.removeItem("access_token");
            window.location.href = "/login";
        }
    }
    return Promise.reject(error)
})