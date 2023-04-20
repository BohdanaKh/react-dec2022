import {IRes} from '../types/res.type';
import {IPost} from '../interfaces/post.interface';
import {placeAxiosService} from './axios.service';
import {urls} from '../constants/urls';

const postService = {
    getById: (postId: string | undefined): IRes<IPost> => placeAxiosService.get(urls.postAPI.byPostId(postId))
}

export {
    postService
}