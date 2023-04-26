import {Component} from "react";

import {IComment} from "../interfaces/comment.interface";

interface IProps{
    comment:IComment
}
class Comment extends Component<any,IProps>{
    constructor(props: IComment) {
        super(props);
    }


    render() {
        const {id,postId, email,body} = this.props.comment;
        return (
            <div>
                <div>id:{id}</div>
                <div>postId:{postId}</div>
                <div>email:{email}</div>
                <div>body:{body}</div>
                <hr/>
            </div>
        )
    }
}

export {Comment}