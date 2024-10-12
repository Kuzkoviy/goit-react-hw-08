import { useSelector } from "react-redux";
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css'

import Contact from '../Contact/Contact'

export default function ContactList() {
  
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((phone) => (
        <li key={phone.id} className={css.listItem}>
          <Contact phone={phone} />
        </li>
      ))}
    </ul>
  );
};