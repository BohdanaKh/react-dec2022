

import axios from 'axios';

import {carsBaseURL, placeBaseURL} from '../constants';

const placeAxiosService = axios.create({baseURL: placeBaseURL});
const carsAxiosService = axios.create({baseURL: carsBaseURL});


export {
    placeAxiosService,
    carsAxiosService
}