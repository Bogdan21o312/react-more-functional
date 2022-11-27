import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

const Index:FC<IPost> = ({id, title, body}) => {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Index;