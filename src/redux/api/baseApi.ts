import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    // getBooks: builder.query({
    //   query: () => "/books",
    //   providesTags: ["books"],
    // }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  // useGetBooksQuery,
  useAddBookMutation,
  // useGetBookQuery,
  // useUpdateBookMutation,
  // useSaveBookMutation,
  // useDeleteBookMutation,
  // useGetBorrowSummaryQuery,
  // useSaveBorrowMutation,
} = baseApi;
