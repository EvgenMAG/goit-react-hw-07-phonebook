import React from 'react';
import { connect } from 'react-redux';
import { Action, Selectors } from '../../redux/contacts';
import s from './Filter.module.css';
import ProtoTypes from 'prop-types';

const Filter = ({ filteredName, onChangeInput }) => {
  return (
    <div className={s.filter__container}>
      <h3 className={s.filter__title}>Find contact by name</h3>
      <input
        className={s.filter__input}
        type="text"
        value={filteredName}
        onChange={onChangeInput}
      />
    </div>
  );
};

Filter.protoTypes = {
  search: ProtoTypes.string.isRequired,
  onChangeInput: ProtoTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filteredName: Selectors.getFilterValue,
});
const mapDispatchToProps = dispatch => ({
  onChangeInput: Action.filterContacts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
