import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface PostItemProps {
    post: IPost
}

const Index: FC<PostItemProps> = ({post}) => {
    return (
        <div style={{margin: 10}}>
            <strong>{post.id}</strong>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button>Delete</button>
        </div>
    );
};

export default Index;