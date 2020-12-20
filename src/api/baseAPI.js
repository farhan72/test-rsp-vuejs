import axios from 'axios';

const refactoryAPI = axios.create({
    baseURL: process.env.VUE_APP_REFACTORY_BASE_URL
});

export {refactoryAPI}
