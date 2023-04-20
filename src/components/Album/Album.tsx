import {FC} from 'react';

import {IAlbum} from "../../interfaces/album.interface";

interface IProps {
    album:IAlbum;

}

const Album: FC<IProps> = ({album}) => {
    const {userId, id,title} = album;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <hr/>
        </div>
    );
};

export {Album};