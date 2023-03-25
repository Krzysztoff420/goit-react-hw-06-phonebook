import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './Phonebook.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const contactsListStringified = JSON.stringify(contacts);
    localStorage.setItem('contacts-list', contactsListStringified);
  }, [contacts]);

    return (
      <div className={css.main}>
        <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
    );
  }






