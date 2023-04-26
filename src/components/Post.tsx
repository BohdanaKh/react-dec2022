import {Component} from "react";

import {IPost} from "../interfaces/post.interface";

interface IProps{
    post:IPost
}
class Post extends Component<any,IProps>{
    constructor(props: IPost) {
        super(props);
    }


    render() {
        const {id,userId,title,body} = this.props.post;
        return (
            <div>
                <div>id:{id}</div>
                <div>userId:{userId}</div>
                <div>title:{title}</div>
                <div>body:{body}</div>
                <hr/>
            </div>
        )
    }
}

export {Post}