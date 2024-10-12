import clsx from 'clsx';
import css from './Contact.module.css'
import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ phone: { id, name, number } }) {
  const titleItem = clsx(css.item, css.title);
  const phoneItem = clsx(css.item, css.phone);
  const dispatch = useDispatch();

  const handleDelete = (phoneId) => {
    dispatch(deleteContact(phoneId));
  };

  return (
    <>
      <div className={css.content}>
        <h2 className={titleItem}>
          <BiSolidUser />
          {name}
        </h2>
        <a href={`tel:${number}`} className={phoneItem}>
          <BiSolidPhone />
          {number}
        </a>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </>
  );
};














