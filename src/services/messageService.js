import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageServices = createApi({
    reducerPath: "messages",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://149.56.68.156:6060/api/chats?",
    }),
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: ({ page, pageSize }) => ({
                url: `&&senderId=658ee4bcae3b8e6e08e086f9&receiverId=658ee4bcae3b8e6e08e086fa&&page=${page}&&pageSize=${pageSize}`,
                method: "GET",
            }),
            providesTags: ["message"],
        }),
        sendMessage: builder.mutation({
            query: (message) => ({
                headers: {
                    "content-type": "application/json",
                },
                url: "message",
                method: "POST",
                body: message,
            }),
            invalidatesTags: ["message"],
        }),
    }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = messageServices;
