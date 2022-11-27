import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IAlbums} from "../models/IAlbums";

export const albumsAPI = createApi({
    reducerPath: 'albumsAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<IAlbums[], any>({
            query: () => ({
                url: '/albums'
            })
        })
    })
})