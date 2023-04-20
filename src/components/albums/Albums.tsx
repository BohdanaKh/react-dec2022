import React, {FC, useEffect, useState} from 'react';

import {IAlbum} from "../../interfaces/album.interface";
import {albumService} from "../../services/album.service";
import {Album} from "../Album/Album";



interface IProps{

}

const Albums:FC<IProps> = () => {
    const [albums,setAlbums]=useState<IAlbum[]>([]);

    useEffect(() =>{
        albumService.getAll().then(value => value.data).then(value => setAlbums(value));
    },[])
    return (
        <div>
<h2>ALBUMS</h2>
            {
            albums.map(album => <Album key={album.id} album={album}/> )
            }
        </div>
    );
};

export default Albums;