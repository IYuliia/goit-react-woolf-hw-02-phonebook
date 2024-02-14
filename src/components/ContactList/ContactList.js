import { ContactItem } from 'components/ContactItem/ContactItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};
