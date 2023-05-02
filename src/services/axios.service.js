import axios from "axios";

import {baseURL} from "../constants/urls";
import {baseCarApiURL} from "../constants/urls";


const axiosService  = axios.create({baseURL});


const carsAxiosService = axios.create({baseCarApiURL});



export {
   axiosService,
    carsAxiosService
}