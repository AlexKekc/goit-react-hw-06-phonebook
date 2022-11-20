import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  ContactItem,
  ContactData,
  DeleteButton,
} from './ContactsListItem.styled.js';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem key={id}>
      <ContactData>{name}:</ContactData>
      <ContactData>{number}</ContactData>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};