import { Component } from "react";
import { ContactList } from "./ContactList";
import { Phonebook } from "./Phonebook";
import { nanoid } from "nanoid";
import { Filter } from "./Filter";

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
     const contacts = JSON.parse(localStorage.getItem("contacts"));
     if (contacts){
      this.setState({contacts: contacts});
     }
  }

  componentDidUpdate(_, prevState){
    if (prevState.contacts.length != this.state.contacts.length);
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  onAdd = ({name, number})=> {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    }
    this.setState((prev) => ({contacts: [...prev.contacts, newContact]}))
  }

  onDelete = (id) => {
    this.setState((prev) => ({contacts: prev.contacts.filter(el => (el.id !== id))}));
  }

  onFilter = (filter) => {
    this.setState({filter: filter});
  }

  filterContacts = () => {
      if (this.state.filter)
        return this.state.contacts.filter(
        el=>(el.name.toLowerCase().includes(this.state.filter.toLowerCase())))
      else
        return this.state.contacts 
  }

  render = () => (
    <div>
      <h1>Phonebook</h1>
      <Phonebook onAdd={this.onAdd} />
      <h2>Contacts</h2>
      <Filter onFilter={this.onFilter}/>
      <ContactList contacts={this.filterContacts()} onDelete={this.onDelete} />
    </div>
  )
}

