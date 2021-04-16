import React from 'react';
import s from './ContactList.module.css';
import ProtoTypes from 'prop-types';
import { connect } from 'react-redux';
import { Operations, Selectors } from '../../redux/contacts';
import { Component } from 'react';

class ContactList extends Component {
  componentDidMount() {
    this.props.initContacts();
  }

  render() {
    return (
      <ul className={s.contact__list}>
        {this.props.contacts
          .filter(({ name }) => {
            const findContact = name
              .toLowerCase()
              .indexOf(this.props.searchedName.toLowerCase());
            return findContact === -1 ? false : true;
          })
          .map(({ id, name, number }) => {
            return (
              <li key={id} className={s.contact__item}>
                <span className={s.contact__text}>{name}: </span>
                <span className={s.contact__text}>{number}</span>
                <button
                  className={s.contact__button}
                  onClick={() => this.props.removeContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  contacts: Selectors.getAllContacts(state),
  searchedName: Selectors.getSearchedContacts(state),
});

const mapDispatchToProps = {
  removeContact: Operations.deleteContact,
  initContacts: Operations.getContacts,
};

ContactList.protoTypes = {
  searchedName: ProtoTypes.shape({
    id: ProtoTypes.string.isRequired,
    name: ProtoTypes.string.isRequired,
    number: ProtoTypes.number.isRequired,
  }),
  removeContact: ProtoTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
