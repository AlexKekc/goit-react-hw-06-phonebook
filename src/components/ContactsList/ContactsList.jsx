import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from 'components/ContactsListItem/ContactsListItem';

const getFilteredContacts = (contacts, filter) => {
  if (filter === '') {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const visibleContacts = getFilteredContacts(contacts, filter);

  return (
    <Contacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} />
      ))}
    </Contacts>
  );
};
