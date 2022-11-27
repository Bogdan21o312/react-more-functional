import React, {FC, ReactNode} from 'react';

interface PostListProps {
    title: string
    children: ReactNode
}

const Index:FC<PostListProps> = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Index;