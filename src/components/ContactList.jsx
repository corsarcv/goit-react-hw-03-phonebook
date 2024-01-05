import { ContactItem } from "./ContactItem";

export const ContactList = ({contacts, onDelete}) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete}/>
    ))}
  </ul>

)