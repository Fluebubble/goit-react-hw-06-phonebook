import styled from 'styled-components';
import React, { Component } from 'react';

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
    name: 'TestName',
    number: '123123213',
  };

  handleChange = e => {
    console.log(e.currentTarget.name);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        <Form name="add_contact_form" onSubmit={(e) => this.props.onSubmit(e, this.state.name, this.state.number)}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
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
