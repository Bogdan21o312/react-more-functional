import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {ITodos} from "../models/ITodos";

export const todosAPI = createApi({
    reducerPath: 'todosAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<ITodos[], any>({
            query: () => ({
                url: '/todos'
            })
        })
    })
})