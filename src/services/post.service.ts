import {axiosService} from "./axios.service";
import {IRes} from "../types/axiosRes.type";
import {IPost} from "../interfaces/post.interface";
import {urls} from "../constants/urls";

class PostService{
    getAll(): IRes<IPost[]> {
      return axiosService.get(urls.posts)
}
}

export const postService = new PostService()
