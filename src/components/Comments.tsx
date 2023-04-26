import React, {Component} from 'react';

import {IComment} from "../interfaces/comment.interface";
import {commentService} from "../services/comment.service";
import {Comment} from "./Comment";

interface IProps{
    comments:IComment[]
}

class Comments extends Component<any, IProps> {
    constructor(props:IComment[]) {
        super(props);
        this.state = {
            comments:[],
        }
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IProps>, snapshot?: any) {
    }

    componentWillUnmount() {
    }

    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({comments:value}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment: IComment)=><Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export  {Comments}