import React from 'react';
import Layout from "../../components/@UI/Layout";
import {postAPI} from "../../sevices/PostService";
import PosList from "../../components/PosList";
import PostItem from "../../components/PostItem";
import Button from "../../components/@UI/Button";
import Input from "../../components/@UI/Input";

const Index = () => {
    const {data: posts, isLoading, error} = postAPI.useFetchAllTestQuery('')


    return (
        <Layout>
            {isLoading && <h1>Loading...</h1>}
            {error && <h2>Error...</h2>}
            <form action="#">
                <Input type="text" placeholder="Name post"/>
                <Input type="text" placeholder="Description post"/>
                <Button>Click me</Button>
            </form>
            <PosList title={'ALL POSTS'}>
                {posts && posts.map(posts =>
                    <PostItem
                        key={posts.id}
                        userId={posts.userId}
                        id={posts.id}
                        title={posts.title}
                        body={posts.body}
                    />
                )}
            </PosList>
        </Layout>
    );
};

export default Index;