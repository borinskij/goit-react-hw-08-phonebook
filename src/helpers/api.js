import axios from 'axios';

export const setRegisration = async user => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    user
  );
  return data;
};

export const setAuthorization = async token => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/login',
    token
  );
  return data;
};

export const getUserCurrent = async token => {
  const { data } = await axios.get(
    'https://connections-api.herokuapp.com/users/current',
    token
  );
  return data;
};

export const postLogout = async () => {
  const data = await axios.post(
    'https://connections-api.herokuapp.com/users/logout'
  );
  return data;
};
