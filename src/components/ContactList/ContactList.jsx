import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              <span>{name} : </span>
              {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
