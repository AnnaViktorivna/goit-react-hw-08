import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apiDeleteContacts,
  apiGetContacts,
} from "../../redux/contacts/operations";
import {
  selectContacts,
  selectContactsIsError,
  selectContactsIsLoading,
} from "../../redux/contacts/selectors";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
// import FilteredContacts from "../../components/FilteredContacts/FilteredContacts";
import css from "./ContactsPage.module.css";
const ContactsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectContactsIsLoading);
  // const isError = useSelector(selectContactsIsError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const onDeleteContact = (contactID) => {
    dispatch(apiDeleteContacts(contactID));
    console.log("contactID", contactID);
  };
  return (
    <div>
      {/* <h1>Contacts</h1> */}
      <AddContactForm />
      {/* <FilteredContacts /> */}
      <ul className={css.list}>
        {Array.isArray(contacts) && contacts.length === 0 && (
          <li className={css.item}>
            You have no any contacts. Please, add your contact list!
          </li>
        )}
        {contacts !== null &&
          contacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <h3>Name: {contact.name}</h3>
              <p>Number: {contact.number}</p>
              <button
                className={css.btn}
                onClick={() => onDeleteContact(contact.id)}
                type='button'
              >
                DELETE❌
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
