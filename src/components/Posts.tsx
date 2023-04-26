import React, {Component} from 'react';

import {IPost} from "../interfaces/post.interface";
import {postService} from "../services/post.service";
import {Post} from "./Post";

interface IProps{
    posts:IPost[]
}
class Posts extends Component<any, IProps> {
    constructor(props:IPost[]) {
        super(props);
         this.state = {
          posts:[],
        }

    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IProps>, snapshot?: any) {
    }

    componentWillUnmount() {
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts:value}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export  {Posts}