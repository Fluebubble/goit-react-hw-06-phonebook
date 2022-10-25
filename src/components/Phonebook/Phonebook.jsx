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

class Phonebook extends Component {
  state = {
    inputValue: '',
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <Form name="add_contact_form" onSubmit={this.props.onSubmit}>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.props.name}
              onChange={this.props.onNameChange}
                required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
        <ContactList contacts={this.props.contacts}/>
      </>
    );
  }
}

export default Phonebook;

// const Phonebooks = () => {
//   return <></>;
// };
