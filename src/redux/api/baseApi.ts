import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
  // useGetBookQuery,
  // useSaveBookMutation,
  // useDeleteBookMutation,
  // useGetBorrowSummaryQuery,
  // useSaveBorrowMutation,
} = baseApi;
