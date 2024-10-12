import {
    useDispatch,
    useSelector
  } from "react-redux";
  import {
    selectErrorContacts,
    selectItemsContacts,
    selectLoadingContacts
  } from "../../redux/contacts/selectors";
  import { fetchContacts } from "../../redux/contacts/operations";
  import { useEffect } from "react";
  
  import ContactForm from "../../components/ContactForm/ContactForm";
  import SearchBox from "../../components/SearchBox/SearchBox";
  import ContactList from "../../components/ContactList/ContactList";
  import Loading from "../../components/Loading/Loading";
  import Message from "../../components/Message/Message";
  
  import Typography from "@mui/material/Typography";
  import Box from "@mui/material/Box";
  
  import css from './ContactsPage.module.css';
  
  export default function ContactsPage() {
    const isLoading = useSelector(selectLoadingContacts);
    const isError = useSelector(selectErrorContacts);
    const contacts = useSelector(selectItemsContacts);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          className={css.heading}
        >
          Phonebook
        </Typography>
  
        <Box className={css.wrap}>
          <ContactForm />
          <SearchBox />
        </Box>
  
        {isLoading && <Loading />}
  
        {!isLoading && isError && (
          <Message
            message="Something went wrong. Please try again later."
            type="error"
          />
        )}
  
        {!isLoading && !isError && contacts.length > 0 && <ContactList />}
  
        {!isLoading && !isError && contacts.length === 0 && (
          <Message message="There are no contacts yet" type="normal" />
        )}
      </>
    );
  };
  
  