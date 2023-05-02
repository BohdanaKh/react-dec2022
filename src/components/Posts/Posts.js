import React, {useEffect} from 'react';

import Post from "./Post";
import {placeholderService} from "../../services/placeholder.service";
import {placeActions} from "../../reducers/placeholderReducers";
import {useAppReducer} from "../../hooks/useAppReducer";

const Posts = () => {

    const [posts,dispatch] = useAppReducer((state) => state.posts);

    useEffect(() => {
        placeholderService.getAllPosts().then(value => value.data).then(value => dispatch(placeActions.loadPosts(value)))


    },[dispatch])
    console.log(posts);
    return (
        <div>
            {
            posts.map(post => <Post key={post.id} post={post}/> )
            }
        </div>
    );
};

export default Posts;