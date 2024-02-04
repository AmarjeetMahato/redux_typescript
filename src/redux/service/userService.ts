import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '../../types';



export const userDetails = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://api.github.com/"}),
    endpoints:(build)=>({
         getUsers:build.query<Array<UserType> , void>({
            query:()=>"users",
         }),
         getUser:build.query<UserType | undefined ,number>({
            query:(id) => `users/${id}`
         })
    })
})


export const {useGetUsersQuery,useGetUserQuery}  = userDetails;