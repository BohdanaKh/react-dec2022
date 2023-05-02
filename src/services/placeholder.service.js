import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


const placeholderService = {
    getAllUsers: () => axiosService.get(urls.users),
    getAllPosts: () => axiosService.get(urls.posts),
    createUser: (user) => axiosService.post(urls.users, user),
    createPost: (post) => axiosService.post(urls.posts, post)

}


export {
    placeholderService
}