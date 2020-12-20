import axios from 'axios';

const refactoryAPI = axios.create({
    baseURL: process.env.VUE_APP_REFACTORY_BASE_URL
});

const mockIO = axios.create({
    baseURL: process.env.VUE_APP_MOCK_IO_BASE_URL + '92de5125/'
})

export {refactoryAPI, mockIO}
