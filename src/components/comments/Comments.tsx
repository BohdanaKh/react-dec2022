import React, {FC, useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";
import {Comment} from "../Comment/Comment";



interface IProps{

}
const Comments:FC<IProps> = () => {
    const [comments,setComments]=useState<IComment[]>([]);

    useEffect(() =>{
commentService.getAll().then(value => value.data).then(value => setComments(value));
    },[])
    return (
        <div>
            <h2>COMMENTS</h2>
            <Outlet/>

            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/> )
            }

        </div>
    );
};

export default Comments;