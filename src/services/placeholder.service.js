import {placeAxiosService} from "./axios.service";
import {urls} from "../constants/urls";


const placeholderService = {
    getAllUsers:()=>placeAxiosService.get(urls.placeAPI.users),
    getAllPosts: () => placeAxiosService.get(urls.placeAPI.posts),
    createUser: (user) => placeAxiosService.post(urls.placeAPI.users, user),
    createPost: (post) => placeAxiosService.post(urls.placeAPI.posts, post)

}



export {
    placeholderService
}