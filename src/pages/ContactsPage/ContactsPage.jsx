import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError)

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isLoading && <Loader />}
            {isError && <Error />}
        </div>
    );
}