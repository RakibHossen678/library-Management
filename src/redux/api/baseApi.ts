import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-server-seven-green.vercel.app/api",
    // baseUrl: "http://localhost:7000/api",
    credentials: "include",
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
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    getBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    getBorrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["books"],
    }),
    borrowBook: builder.mutation({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
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
  useDeleteBookMutation,
  useGetBookQuery,
  useGetBorrowSummaryQuery,
  useBorrowBookMutation,
} = baseApi;
