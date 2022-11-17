import React, { useState, useEffect } from 'react';
import { AddingContactsForm } from '../AddingContactsForm/AddingContactsForm';
import { SearchingFilter } from '../SearchingFilter/SearchingFilter';
import { ContactsList } from '../ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { PhonebookTitle, ContactsTitle } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHadler = ({ name, number }) => {
    const newContact = { id: nanoid(4), name, number };

    contacts.find(contact => contact.name === name)
      ? toast.error(`Oops, ${name} is already in contacts`, {
          icon: '🙃',
        })
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <Toaster />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <AddingContactsForm onSubmitForm={formSubmitHadler} />

      <ContactsTitle>Contacts</ContactsTitle>
      <SearchingFilter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
};
