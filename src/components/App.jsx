import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number, id) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (existingContact) {
      alert(`"${name}" is already in contacts!`);
      return;
    }

    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = filter => {
    this.setState({ filter });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          marginLeft: 60,
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter filterContacts={this.filterContacts} />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
