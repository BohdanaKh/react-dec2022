import {IRes} from "../types/axiosRes.type";
import {IComment} from "../interfaces/comment.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


class CommentService {
    getAll(): IRes<IComment[]> {
        return axiosService.get(urls.comments)
    }
}


export const commentService = new CommentService()