import React from 'react';
import { Toaster } from 'react-hot-toast';

import {
  MainContainer,
  PhonebookContainer,
  Title,
  TitleCont,
} from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<div>Layout</div>}></Route>
      </Routes>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
      <Toaster />
    </MainContainer>
  );
};
