import PropTypes from 'prop-types';

export const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <>
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
