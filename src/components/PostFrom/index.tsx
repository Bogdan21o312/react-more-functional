import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import Input from "../@UI/Input";
import Button from "../@UI/Button";
import {IPost} from "../../models/IPost";

interface PostFormProps {
    create: any
}

const Index:FC<PostFormProps> = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const handleCreate =  (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newPost = {
            ...post as IPost
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form action="#">
            <Input
                value={post.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Name post"
            />
            <Input
                value={post.body}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Description post"
            />
            <Button onClick={handleCreate}>Click me</Button>
        </form>
    );
};

export default Index;