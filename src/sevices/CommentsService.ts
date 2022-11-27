import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IComments} from "../models/IComments";

export const commentsAPI = createApi({
    reducerPath: 'commentsAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<IComments[], any>({
            query: () => ({
                url: '/comments'
            })
        })
    })
})