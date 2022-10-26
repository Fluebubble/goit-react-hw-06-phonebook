import Phonebook from './Phonebook/Phonebook';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { name: 'Chacha', id: '1' },
      { name: 'Zorik', id: '2' },
      { name: 'Petro', id: '3' },
      { name: 'Kek', id: '4' },
    ],
    name: '',
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      console.log(prevState.contacts);
      return {
        contacts: this.state.contacts.push({
          name: this.state.name,
          id: nanoid(),
        }),
      };
    });
    console.log(this.state);
  };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.push({
  //         name: this.state.name,
  //         id: nanoid(),
  //       }),
  //     };
  //   });
  //   console.log(this.state);
  // };

  render() {
    return (
      <Phonebook
        contacts={this.state.contacts}
        onSubmit={this.handleSubmit}
        onNameChange={this.handleNameChange}
        // onAddContact={this.handeAddContact}
        name={this.state.name}
      />
    );
  }
}

export default App;

// export const Apps = () => {
//   return <Phonebook />;
// };
