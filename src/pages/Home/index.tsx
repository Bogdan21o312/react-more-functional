import React from 'react';
import Layout from "../../components/@UI/Layout";
import {postAPI} from "../../sevices/PostService";
import PosList from "../../components/PosList";
import PostItem from "../../components/PostItem";

const Index = () => {
    const {data: posts, isLoading, error} = postAPI.useFetchAllTestQuery('')


    return (
        <Layout>
            {isLoading && <h1>Loading...</h1>}
            {error && <h2>Error...</h2>}
            {posts && posts.map(posts =>
                <PosList title={'ALL POSTS'}>
                    <PostItem
                        userId={posts.userId}
                        id={posts.id}
                        title={posts.title}
                        body={posts.body}
                    />
                </PosList>
            )}
        </Layout>
    );
};

export default Index;