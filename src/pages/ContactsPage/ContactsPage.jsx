import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectContactsIsError,
  selectContactsIsLoading,
} from "../../redux/contacts/selectors";
import AddContactForm from "../../components/AddContactForm/AddContactForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectContactsIsLoading);
  // const isError = useSelector(selectContactsIsError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Contacts</h1>
      <AddContactForm />
      <ul>
        {Array.isArray(contacts) && contacts.length === 0 && (
          <li>You have no any contacts. Please, add your contact list!</li>
        )}
        {contacts !== null &&
          contacts.map((contact) => (
            <li key={contact.id}>
              <h3>Name: {contact.name}</h3>
              <p>Number: {contact.number}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
