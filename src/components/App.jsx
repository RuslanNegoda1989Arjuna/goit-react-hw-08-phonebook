import React from 'react';
import { Toaster } from 'react-hot-toast';

import { MainContainer } from './App.styled';

import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'page/Home/Home';
import Register from 'page/Register/Register';
import PhoneBook from 'page/PhoneBook/PhoneBook';
import Login from 'page/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hook';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/phonebook" element={<PhoneBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

      <Toaster />
    </MainContainer>
  );
};
