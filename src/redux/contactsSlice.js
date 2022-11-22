import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(4),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const indexOfContact = state.findIndex(
          contact => contact.id === action.payload
        );
        state.splice(indexOfContact, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//Selector
export const getContacts = state => state.contacts;
