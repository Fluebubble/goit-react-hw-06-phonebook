import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {

  render() {
    return (
      <ul>
        {this.props.visibleContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button type="button" onClick={() => this.props.onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

export const ContactLists = ({ visibleContacts, onDelete }) => {
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
