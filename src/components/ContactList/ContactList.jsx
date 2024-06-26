import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from "../../redux/selectors";


export default function ContactList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts );

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <>
            <h2 className={css.title}>Contacts</h2>
            <ul className={css.list}>
                {filteredContacts.map(({ name, id, number }) => (
                    <Contact key={id} id={id} name={name} number={number} onClick={handleDeleteContact} />
                ))}
            </ul>
        </>
    );
}