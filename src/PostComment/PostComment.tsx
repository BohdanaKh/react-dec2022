import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IComment} from "../interfaces/comment.interface";
import {saveComment} from "../services/comment.service";

const PostComment:FC<IComment> = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data) => {
        saveComment(data).then(({data}) => console.log(data));
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder={'postId'} {...register('postId')}/>
                {errors.id && <span>field is required</span>}

                <input type="text" placeholder={'id'} {...register('id')}/>
                {errors.name && <span>field is required</span>}

                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.username && <span>field is required</span>}

                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.email && <span>field is required</span>}

                <input type="text" placeholder={'body'} {...register('body')}/>
                {errors.email && <span>field is required</span>}


                <input type="submit" value={'save comment'}/>


            </form>

        </div>
    );
};

export default PostComment;