import {Component} from "react";
import {NavLink} from "react-router-dom";

import  css from "./Header.module.css";


class Header extends Component{


    render() {
        return (
            <div className={css.Header}>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
                <NavLink to={'pets'}>Pets</NavLink>

            </div>
        )
    }

}

export {Header}