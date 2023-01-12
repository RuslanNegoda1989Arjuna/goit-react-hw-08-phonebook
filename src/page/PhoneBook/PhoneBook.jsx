// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { PhonebookContainer, Title, TitleCont } from 'components/App.styled';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from 'redux/sliceContacts';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function PhoneBook() {
  const { data: contacts, isFetching } = useGetContactsQuery();
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
      <Toaster />
    </>
  );
}
