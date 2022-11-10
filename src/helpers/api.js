import axios from 'axios';

export const setRegisration = async user => {
  console.log('userApi :', user);
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    user
  );
  console.log('response :', data);
};
