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
    // name: '',
    // number: '',
  };

  // handleChange = e => {
  //   console.log(e.currentTarget.name);
  //   this.setState({
  //     [e.currentTarget.name]: e.currentTarget.value,
  //   });
  // };

  handleSubmit = (e, newName, newNumber) => {
    e.preventDefault();

    for (const contact of this.state.contacts) {
      if (contact.name === newName) {
        alert(
          `Контакт с именем ${newName} уже добавлен в телефонную книгу`
        );
        return;
      }
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: newName,
            number: newNumber,
          },
        ],
      };
    });
    console.log(this.state.contacts);
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.includes(this.state.filter)
    );
  };

  handleDeleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    return (
      <>
        <h2>ContactForm</h2>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <h3>Search by name</h3>
        <SearchContact
          onFilter={this.handleFilter}
          filter={this.state.filter}
        />
        <ContactList
          contacts={this.state.contacts}
          visibleContacts={this.getVisibleContacts()}
          onDelete={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;

// export const Apps = () => {
//   return <ContactForm />;
// };
