import Phonebook from './Phonebook/Phonebook';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { name: 'Zopka', id: '23sa' },
      { name: 'Zorik', id: '13' },
      { name: 'Bebra', id: 'BebraID' },
      { name: 'Zebra', id: 'ZebraID' },
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
      return {
        contacts: prevState.contacts.push({
          name: prevState.name,
          id: nanoid(),
        }),
      };
    });
    console.log(this.state.contacts);
  };

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
