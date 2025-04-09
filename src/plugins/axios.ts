
import axios from 'axios'

axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

axios.defaults.baseURL = import.meta.env.VITE_API_URL
