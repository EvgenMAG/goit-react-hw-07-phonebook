import React from 'react';

import s from './App.module.css';

import Filter from './components/Filter';
import Form from './components/Form';
import ContactList from './components/ContactList';
import { connect } from 'react-redux';

function App({ contacts }) {
  return (
    <div className={s.blocks}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      {contacts.length > 0 && <h2 className={s.title__contacts}>Contacts</h2>}
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, null)(App);
