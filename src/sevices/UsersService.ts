import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IUsers} from "../models/IUsers";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<IUsers[], any>({
            query: () => ({
                url: '/users'
            })
        })
    })
})