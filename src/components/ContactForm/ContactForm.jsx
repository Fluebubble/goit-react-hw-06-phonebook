import styled from 'styled-components';
import React, { Component } from 'react';
import { ContactList } from 'components/ContactList/ContactList';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid black;
  padding: 15px;
  gap: 15px;
`;

class ContactForm extends Component {
  state = {
    inputValue: '',
  };

  render() {
    return (
      <>
        <Form name="add_contact_form" onSubmit={this.props.onSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.props.name}
              onChange={this.props.onChange}
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.props.number}
              onChange={this.props.onChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </>
    );
  }
}

export default ContactForm;
