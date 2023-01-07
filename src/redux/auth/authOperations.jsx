import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => `users/current`,
      providesTags: ['Users'],
    }),
    register: builder.mutation({
      query: credentials => ({
        url: 'users/signup',
        method: 'POST',
        body: credentials,
      }),

      invalidatesTags: ['Users'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});
export const {
  useFetchCurrentUserQuery,
  useDeleteContactMutation,
  useRegisterMutation,
} = authApi;
