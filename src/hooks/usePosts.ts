import {useMemo} from "react";
import {IPost} from "../models/IPost";

export const useStortedPosts = (posts: any, sort: any) => {

    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;

}

export const usePosts = (posts: any, sort: any, query: any) => {

    const sortedPosts = useStortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo( ()  => {
        return sortedPosts //.filter((post: IPost) => post.title.includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}