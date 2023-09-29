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
import { selectFilter } from '../../redux/filtersSlice';
import { StyledSubmitBtn } from './ContactsStyled';
import { CrossImage, PensilImage } from '../../img/SpriteSvg';

const Contacts = () => {
  // console.log("Contacts component rendering");
  const [editingContact, setEditingContact] = useState(null);
  const [updatedContact, setUpdatedContact] = useState({
    name: '',
    number: '',
  });

  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;
    // console.log("Fetching contacts...");
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

  const handleEditContact = contact => {
    setEditingContact(contact);
    setUpdatedContact({
      name: contact.name,
      number: contact.number,
    });
  };

  const handleSaveChanges = () => {
    if (editingContact) {
      const { id } = editingContact;
      dispatch(
        updateContactThunk({
          contactId: id,
          updatedData: { ...updatedContact },
        })
      );
      setEditingContact(null);
    }
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  //  console.log(filteredContacts)

  return (
    <section className="section_contacts">
      <div className="new_contacts">
        <h1 className="title_contacts">New contact</h1>
        <form className="form_contacts" onSubmit={handleSubmit}>
          <label className="title_form_contacts">
            <p>Name:</p>
            <input name="contactName" type="text" required />
          </label>
          <br />
          <label className="title_form_contacts">
            <p>Phone number:</p>
            <input name="contactNumber" type="text" required />
          </label>
          <button className="btn_add" type="submit">
            Add contact
          </button>
        </form>
      </div>
      <div className="filter_contacts">
        <h2 className="filter_title">Find contacts by name</h2>
        <Filter />
        {isLoading && <Loader />}
        {error && <p>Oops, some error occured... {error}</p>}
      </div>
      <ul className="list_contacts">
        {showContacts &&
          filteredContacts?.map(contact => {
            return (
              <li className="name_contacts" key={contact.id}>
                {editingContact && editingContact.id === contact.id ? (
                  <div>
                    {/* Форма редактирования контакта */}
                    <label className="upate_contacts_form">
                      <p>Name:</p>
                      <input
                        name="contactName"
                        type="text"
                        required
                        value={updatedContact.name}
                        onChange={e =>
                          setUpdatedContact({
                            ...updatedContact,
                            name: e.target.value,
                          })
                        }
                      />
                    </label>

                    <label className="upate_contacts_form">
                      <p>Number:</p>
                      <input
                        name="contactNumber"
                        type="text"
                        required
                        value={updatedContact.number}
                        onChange={e =>
                          setUpdatedContact({
                            ...updatedContact,
                            number: e.target.value,
                          })
                        }
                      />
                    </label>

                    <StyledSubmitBtn onClick={handleSaveChanges}>
                      Save changes
                    </StyledSubmitBtn>
                  </div>
                ) : (
                  <div>
                    <h3 className="items_contact">{contact.name}</h3>
                    <p className="items_contact">{contact.number}</p>
                    <button
                      className="icon-cross_btn"
                      onClick={() => handleDeleteContact(contact.id)}
                      type="button"
                      aria-label="Delete contact"
                    >
                      <CrossImage width={32} height={32} />
                    </button>
                    <button
                      className="icon-pensil_btn"
                      onClick={() => handleEditContact(contact)}
                      type="button"
                      aria-label="Edit contact"
                    >
                      <PensilImage width={32} height={32} />
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
