import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { Formik } from 'formik';
import { contactsSchema } from '../../validation';
import toast from 'react-hot-toast';
import {
  ContactsForm,
  ContactsLabel,
  ContactsInput,
  ContactsError,
  SubmitButton,
} from './AddingContactsForm.styled';

const initialValues = { name: '', number: '' };

export const AddingContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      resetForm();
      return toast.error(`Oops, ${values.name} is already in contacts`);
    }

    dispatch(addContact(values));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <ContactsForm>
            <ContactsLabel htmlFor="name">
              Name
              <ContactsInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ContactsError name="name" component="span" />
            </ContactsLabel>
            <ContactsLabel htmlFor="number">
              Number
              <ContactsInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ContactsError name="number" component="span" />
            </ContactsLabel>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Add contact
            </SubmitButton>
          </ContactsForm>
        );
      }}
    </Formik>
  );
};
