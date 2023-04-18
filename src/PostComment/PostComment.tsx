import React from 'react';
import {useForm} from "react-hook-form";
import {IComment} from "../interfaces/comment.interface";
import {saveComment} from "../services/comment.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../validators/comment.validator";
const PostComment= () => {

    const {register, handleSubmit, formState:{errors}} = useForm<IComment>({
        mode: 'all',
        resolver: joiResolver(commentValidator)
    });
    const onSubmit = (data: IComment) => {
        saveComment(data).then(({data}) => console.log(data));
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder={'postId'} {...register('postId')}/>
                {errors.postId && <span>{errors.postId.message}</span>}

                <input type="text" placeholder={'id'} {...register('id')}/>
                {errors.id && <span>{errors.id.message}</span>}

                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}

                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}

                <input type="text" placeholder={'body'} {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}


                <input type="submit" value={'save comment'}/>


            </form>

        </div>
    );
};

export default PostComment;