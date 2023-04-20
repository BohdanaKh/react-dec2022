import {IRes} from '../types/res.type';
import {IAlbum} from '../interfaces/album.interface';
import {placeAxiosService} from './axios.service';
import {urls} from '../constants/urls';

const albumService = {
    getAll: (): IRes<IAlbum[]> => placeAxiosService.get(urls.placeAPI.albums)
}

export {
    albumService
}