import css from './App.module.css'
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorContacts,
  selectLoadingContacts
} from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";


function App() {
  const isLoading = useSelector(selectLoadingContacts);
  const isError = useSelector(selectErrorContacts);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <div className={css.wrap}>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <Loading />}
      {isError && (
        <Error message="Something went wrong. Please try again later." />
      )}
      <ContactList />
    </div>
  );
}

export default App
















