import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:3002';

const fuck = () => {
  axios
    .get('http://localhost:3002/contacts')
    .then(response => console.log(response))
    .catch(error => console.log(error.message));
};

fuck();

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    console.log(dispatch);
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export { addContact, deleteContact, getContacts };
