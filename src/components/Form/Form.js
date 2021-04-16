import React, { Component } from 'react';
import s from './Form.module.css';
// import { v4 as idv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Operations, Selectors } from '../../redux/contacts';
import { connect } from 'react-redux';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = evt => {
    const { name, value } = evt.currentTarget;
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, addContact } = this.props;

    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }

    if (contacts.some(el => el.number.toLowerCase() === number.toLowerCase())) {
      return alert(`${number} is already in contacts`);
    }
    addContact(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form__container}>
        <label htmlFor="" className={s.form__label}>
          {' '}
          Name
          <input
            type="text"
            name="name"
            className={s.form__input}
            placeholder="Kim Chen In"
            required
            value={name}
            onChange={this.handleInput}
          />
        </label>
        <br />
        <label htmlFor="" className={s.form__label}>
          {' '}
          Number
          <input
            type="tel"
            name="number"
            className={s.form__input}
            placeholder="38-067-504-13-09"
            required
            value={number}
            onChange={this.handleInput}
          />
        </label>
        <button type="submit" className={s.form__button}>
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  contacts: Selectors.getAllContacts(state),
});

const mapDispatchToProps = {
  addContact: Operations.addContact,
};

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
