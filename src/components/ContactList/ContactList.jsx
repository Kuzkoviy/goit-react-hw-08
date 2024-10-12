import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import clsx from "clsx";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Contact from "../Contact/Contact";

export default function ContactList() {
  
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <List className={css.list}>
      {visibleContacts.map((phone) => (
        <ListItem key={phone.id} className={clsx(css.listItem)}>
          <Contact phone={phone} />
        </ListItem>
      ))}
    </List>
  );
}