import React, {FC, ReactNode} from 'react';
import PostItem from "../PostItem";
import {IPost} from "../../models/IPost";

interface PostListProps {
    title: string
    post: IPost[] | undefined
}

const Index:FC<PostListProps> = ({title, post}) => {
    return (
        <div>
            <h1>{title}</h1>
            {post && post.map(post =>
                <PostItem
                    key={post.id}
                    post={post}
                />
            )}
        </div>
    );
};

export default Index;