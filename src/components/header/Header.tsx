import {NavLink} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {

    return (
        <div className={css.Header}>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'pets'}>Pets</NavLink>
        </div>
    );
};

export {Header};