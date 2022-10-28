import ContactForm from './ContactForm/ContactForm';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { SearchContact } from './SearchContact/SearchContact';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    console.log(event.currentTarget.name);
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleNumberChange = event => {
    this.setState({
      number: event.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    for (const contact of this.state.contacts) {
      if (contact.name.includes(this.state.name)) {
        alert(
          `Контакт с именем ${this.state.name} уже добавлен в телефонную книгу`
        );
        return;
      }
    }

    console.log(this.state.name);
    console.log(this.state.number);
    console.log(this.state.contacts);
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            name: this.state.name,
            number: this.state.number,
          },
        ],
      };
    });
    console.log(this.state.contacts);
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    // console.log(this.state.contacts)
    this.setState({ contacts: filteredContacts });
    console.log(filteredContacts);
  };

  render() {
    return (
      <>
        <h2>ContactForm</h2>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />

        <h2>Search</h2>
        <SearchContact
          onFilter={this.handleFilter}
          filter={this.state.filter}
        />
        <ContactList contacts={this.state.contacts} />
        <h2>Contacts</h2>
      </>
    );
  }
}

export default App;

// export const Apps = () => {
//   return <ContactForm />;
// };
