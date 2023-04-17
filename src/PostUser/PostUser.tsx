import React from 'react';
import {useForm} from "react-hook-form";
import {saveUser} from "../services/user.service";
import {IUser} from "../interfaces/user.interface";
import {FC} from "react";

const PostUser:FC<IUser> = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit:FC<IUser> = (data) => {
        saveUser(data).then(({data}) => console.log(data));
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder={'id'} {...register('id')}/>
                {errors.id && <span>field is required</span>}

                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <span>field is required</span>}

                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <span>field is required</span>}

                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.email && <span>field is required</span>}


                <input type="submit" value={'save user'}/>


            </form>


        </div>
    );
};

export default PostUser;