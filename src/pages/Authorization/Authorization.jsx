import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import css from './Authorization.module.css';
import { Button } from '@mui/material';
import { loginUsers } from 'redux/auth/auth-operation';

export default function Authorization() {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const dispatch = useDispatch();

  const initDataUser = {
    email: setEmail,
    password: setPasword,
  };
  const handelChanche = e => {
    initDataUser[e.target.name](e.target.value.trim());
  };
  const handelSubmit = e => {
    e.preventDefault();

    const userData = { email, password };
    dispatch(loginUsers(userData));
  };
  return (
    <Box
      onSubmit={handelSubmit}
      className={css.form}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Email"
        name="email"
        onChange={handelChanche}
        value={email}
      />
      <TextField
        id="outlined-basic"
        name="password"
        label="Password"
        variant="outlined"
        onChange={handelChanche}
        value={password}
      />
      <Button variant="contained" type="submit">
        Вхід
      </Button>
    </Box>
  );
}
