import React, {Component} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header";

class MainLayout extends Component{
    constructor(props:any) {
        super(props);
    }

    render() {
        return(
        <div>
            <Header/>
            <Outlet/>
        </div>
)
}
}

export  {MainLayout};