import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Contacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} />
      ))}
    </Contacts>
  );
};
