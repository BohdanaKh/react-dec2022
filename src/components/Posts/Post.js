import React from "react";

import {useAppReducer} from "../../hooks/useAppReducer";
import {placeActions} from "../../reducers/placeholderReducers";


const Post = ({post}) => {
    const [,dispatch] = useAppReducer(state=>state.users);
    return (
        <div>
            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <button onClick={()=>{
                dispatch(placeActions.addPost(post))
            }}>add user</button>
        </div>
    );
};

export default Post;