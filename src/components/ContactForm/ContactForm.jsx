import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';


const initialValues = {
    name: '',
    number: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!').min(3, 'Name is too short!'),
    number: Yup.string().required('Required!').min(3, 'Number is too short!')
});

export default function ContactForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <Field
                            className={css.input}
                            placeholder="Name"
                            type="text"
                            name="name"
                        />
                        <ErrorMessage
                            className={css.errorNotification}
                            name="name"
                            component='span'
                        />
                    
                    </div>
                    <div>
                        <Field
                            className={css.input}
                            placeholder="Number"
                            type="tel"
                            name="number"
                        />
                        <ErrorMessage
                            className={css.errorNotification}
                            name="number"
                            component='span'
                        />
                    </div>
                    <button className={css.btn} type="submit">Add contact</button>
                </Form>
            </Formik>
        </>
    );
}