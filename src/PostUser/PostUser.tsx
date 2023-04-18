import React from 'react';
import {useForm} from "react-hook-form";
import {saveUser} from "../services/user.service";
import {IUser} from "../interfaces/user.interface";
import {userValidator} from "../validators/user.validator";
import {joiResolver} from "@hookform/resolvers/joi";



const PostUser = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<IUser>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });
    const onSubmit = (data:IUser) => {
        saveUser(data).then(({data}) => console.log(data));
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder={'id'} {...register('id')}/>
                {errors.id && <span>{errors.id.message}</span>}

                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}

                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}

                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}


                <input type="submit" value={'save user'}/>


            </form>


        </div>
    );
};

export default PostUser;