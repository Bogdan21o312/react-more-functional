import React, {ChangeEvent, MouseEvent, useEffect, useMemo, useState} from 'react';
import Layout from "../../components/@UI/Layout";
import {postAPI} from "../../sevices/PostService";
import PostItem from "../../components/PostItem";
import Button from "../../components/@UI/Button";
import Input from "../../components/@UI/Input";
import {IPost} from "../../models/IPost";
import PostFrom from "../../components/PostFrom";
import PosList from "../../components/PosList";
import Select from "../../components/@UI/Select/Select";
import PostFilter from "../../components/PostFilter";
import {usePosts} from "../../hooks/usePosts";
import ModalWindow from "../../components/@UI/ModalWindow";

const Index = () => {
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const {data: posts, isLoading, error, isFetching} = postAPI.useFetchAllPostQuery(page)

    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [modal, setModal] = useState(false)

    const handleCreate = (posts: IPost) => {
        createPost({...posts} as IPost)
        setModal(false)
    }


    const handleSetModal = () => setModal(true)

    return (
        <Layout>
            <ModalWindow visible={modal} setVisible={setModal}>
                <PostFrom create={handleCreate}/>
            </ModalWindow>
            <Button onClick={handleSetModal}>
                Created Post
            </Button>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >Prev Page</Button>
            <Button
                onClick={() => setPage(page + 1)}
                disabled={page === posts.total_pages}
            >Next Page</Button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h2>Error...</h2>}
            {sortedAndSearchedPosts ?
                <PosList title={'Some title'} post={sortedAndSearchedPosts}/>
                :
                <div>Posts none</div>
            }

        </Layout>
    );
};

export default Index;