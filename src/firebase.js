import axios from 'axios';

const api = axios.create({
    baseURL: 'https://burgerbuilder-cfa93-default-rtdb.firebaseio.com'
})

export default api;
