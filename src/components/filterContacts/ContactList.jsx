import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactAsync } from '../services/api';

const ContactList = ({ filter, contacts, onDeleteContact, onEditContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  useEffect(() => {}, [contacts]); // Зависимость от состояния контактов

  return (
    <ul className="contact_list">
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.id}: {contact.name}: {contact.number}
          <button
            className="delete-btn"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
