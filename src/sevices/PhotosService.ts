import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IPhotos} from "../models/IPhotos";

export const photosAPI = createApi({
    reducerPath: 'photosAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<IPhotos[], any>({
            query: () => ({
                url: '/photos'
            })
        })
    })
})