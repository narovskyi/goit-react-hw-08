import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import css from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from '../../redux/contactsOps';

export default function App() {
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