import { Component } from 'react';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  if(isExist) {
    alert(`${this.state.name} is already in contacts.`);
    return;
  }
  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // pattern = '+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}'
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <h2>Contacts</h2>
        </div>
      </>
    );
  }
}
