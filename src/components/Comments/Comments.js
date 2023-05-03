import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../services";
import {commentActions} from "../../redux";
import {Comment} from "./Comment";

const Comments = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => dispatch(commentActions.setComments(value)))
    },[dispatch])

    const save = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const body = e.target.body.value;
        const comment = {id:new Date().getTime(),name,email,body};
        dispatch(commentActions.addComment({comment}));

    }


    return (
        <div>
            <form onSubmit={save}>
            <input type="text" placeholder={'name'} name={'name'}/>
            <input type="text" placeholder={'email'} name={'email'}/>
            <input type="text" placeholder={'body'} name={'body'}/>
            <button>Save</button>
            </form>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};