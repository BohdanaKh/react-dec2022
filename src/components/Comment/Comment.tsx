import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IComment} from "../../interfaces/comment.interface";

interface IProps {
    comment: IComment;

}

const Comment: FC<IProps> = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    let navigate = useNavigate();
    return (

    <div className={'commentBlock'}  >

        <div>postId:{postId}</div>
        <div>id: {id}</div>
        <div>name: {name}</div>
        <div>email: {email}</div>
        <div>body: {body}</div>
        <button onClick={() =>
        {
            navigate(comment.postId.toString());
        }}> post info</button>

    </div>

)
}


export {Comment};