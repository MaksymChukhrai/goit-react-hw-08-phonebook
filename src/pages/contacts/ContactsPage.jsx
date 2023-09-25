import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/filterContacts/Filter';
import Loader from 'components/Loader/Loader';
import { selectAuthentificated } from 'redux/authReducer';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
  selectContactsError,
  selectContactsIsLoading,
  selectUserContacts,
  updateContactThunk,
} from 'redux/contactsReducer';
import  {selectFilter}  from '../../redux/filtersSlice'; // Импорт селектора фильтра
import { StyledSubmitBtn } from './ContactsStyled';

const Contacts = () => {
  const [editingContact, setEditingContact] = useState(null);
  const [updatedContact, setUpdatedContact] = useState({ name: '', number: '' });

  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter); // Получение значения фильтра из Redux
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;
    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    dispatch(addContactThunk({ name, number }));
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setUpdatedContact({
      name: contact.name,
      number: contact.number,
    });
  };

  const handleSaveChanges = () => {
    if (editingContact) {
      const { id} = editingContact;
      dispatch(updateContactThunk({ contactId: id, updatedData: { ...updatedContact } }));
      setEditingContact(null);
    }
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <section>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="contactName" type="text" required />
        </label>
        <br />
        <label>
          <p>Number:</p>
          <input name="contactNumber" type="text" required />
        </label>
        <br /><br />
        <StyledSubmitBtn htmlType="submit">Add contact</StyledSubmitBtn>
      </form>
      <h3>Find contacts by name</h3>
      <Filter />
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
      <ul>
      {showContacts &&
  filteredContacts.map((contact) => {
    return (
      <li key={contact.id}>
        {editingContact && editingContact.id === contact.id ? (
          <div>
            {/* Форма редактирования контакта */}
            <label>
              <p>Name:</p>
              <input
                name="contactName"
                type="text"
                required
                value={updatedContact.name}
                onChange={(e) =>
                  setUpdatedContact({
                    ...updatedContact,
                    name: e.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              <p>Number:</p>
              <input
                name="contactNumber"
                type="text"
                required
                value={updatedContact.number}
                onChange={(e) =>
                  setUpdatedContact({
                    ...updatedContact,
                    number: e.target.value,
                  })
                }
              />
            </label>
            <br />
            <StyledSubmitBtn onClick={handleSaveChanges}>
              Save changes
            </StyledSubmitBtn>
          </div>
        ) : (
          <div>
            <h3>Name: {contact.name}</h3>
            <p>Number: {contact.number}</p>
            <button
              onClick={() => handleDeleteContact(contact.id)}
              type="button"
              aria-label="Delete contact"
            >
              &times;
            </button>
            <button
              onClick={() => handleEditContact(contact)}
              type="button"
              aria-label="Edit contact"
            >
              Edit contact
            </button>
          </div>
        )}
      </li>
    );
  })}

      </ul>
    </section>
  );
};

export default Contacts;
