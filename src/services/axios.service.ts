import axios from "axios";

import {placeBaseUrl} from "../constants/urls";

const placeAxiosService = axios.create({baseURL:placeBaseUrl});



export {
    placeAxiosService
}