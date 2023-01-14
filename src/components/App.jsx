import { Toaster } from 'react-hot-toast';

import { MainContainer } from './App.styled';

import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import React, { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hook';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../page/Home/Home'));
const RegisterPage = lazy(() => import('../page/Register/Register'));
const LoginPage = lazy(() => import('../page/Login/Login'));
const PhonePage = lazy(() => import('../page/PhoneBook/PhoneBook'));

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
          <Route index element={<HomePage />} />
          <Route
            path="/phonebook"
            element={<PrivateRoute component={PhonePage} redirectTo="/login" />}
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/phonebook"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/phonebook" />
            }
          />
        </Route>
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>

      <Toaster />
    </MainContainer>
  );
};
