import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/slices/contactsSlice';
import { getFilter } from 'redux/slices/filterSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter).toLowerCase();
  const visibleContacts = () => {
    if (filter.trim().length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return contacts;
  };

  return (
    <>
      <ul>
        {visibleContacts().map(contact => (
          <li key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;