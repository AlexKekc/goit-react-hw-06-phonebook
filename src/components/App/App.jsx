import React from 'react';
import { AddingContactsForm } from '../AddingContactsForm/AddingContactsForm';
import { SearchingFilter } from '../SearchingFilter/SearchingFilter';
import { ContactsList } from '../ContactsList/ContactsList';
import { PhonebookTitle, ContactsTitle } from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Toaster />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <AddingContactsForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <SearchingFilter />
      <ContactsList />
    </>
  );
};
