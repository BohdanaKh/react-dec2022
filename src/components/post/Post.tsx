import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";


interface IProps{

}

const Post:FC<IProps> = () => {

let {postId}= useParams();
let [post,setPost] = useState<IPost | null>(null);

    useEffect(  () => {
        postService.getById(postId).then(post => post.data).then(post => setPost(post));
    },[postId]);
    return (
        <div className={'postBlock'}>
            <div>userId: {post?.userId}</div>
            <div>id:{post?.id}</div>
            <div>title:{post?.title}</div>
            <div>body:{post?.body}</div>

        </div>
    );
}

export default Post;