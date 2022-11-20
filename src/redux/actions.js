import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      type: 'contacts/addContact',
      payload: {
        id: nanoid(4),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact', taskId => {
  return {
    type: 'contacts/deleteContact',
    payload: taskId,
  };
});

export const setFilter = createAction('filter/setFilter', value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
});
