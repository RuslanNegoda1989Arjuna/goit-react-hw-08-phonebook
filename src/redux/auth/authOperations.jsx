import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      toast.success(`${res.data.user.name}, welcome to your phonebook`);
      return res.data;
    } catch (error) {
      toast.error(
        `User with this email ${credentials.email} is already registered!`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      toast.success(`${res.data.user.name}, welcome to your phonebook`);
      return res.data;
    } catch (error) {
      toast.error(`Wrong login or password, please check your input.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    toast('Good Job!', {
      icon: '👏',
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Users'],
//   endpoints: builder => ({
//     fetchCurrentUser: builder.query({
//       query: () => `users/current`,
//       providesTags: ['Users'],
//     }),
//     register: builder.mutation({
//       query: credentials => ({
//         url: 'users/signup',
//         method: 'POST',
//         body: credentials,
//       }),

//       invalidatesTags: ['Users'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Users'],
//     }),
//   }),
// });
// export const {
//   useFetchCurrentUserQuery,
//   useDeleteContactMutation,
//   useRegisterMutation,
// } = authApi;
