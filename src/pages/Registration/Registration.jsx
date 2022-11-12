import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authUsers } from 'redux/auth/auth-operation';
import css from './Registration.module.css';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [repidPas, setRepitPas] = useState('');

  const dispatch = useDispatch();

  const initDataUser = {
    name: setName,
    email: setEmail,
    password: setPasword,
    repidPas: setRepitPas,
  };
  const handelChanche = e => {
    initDataUser[e.target.name](e.target.value.trim());
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (password !== repidPas) {
      return alert(`Пароль не cпівпадає`);
    }
    const userData = { name, email, password };
    dispatch(authUsers(userData));
  };

  return (
    <div>
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
          id="name"
          variant="outlined"
          label="Імʼя"
          type="text"
          value={name}
          name="name"
          placeholder="Імʼя"
          onChange={handelChanche}
        />
        <TextField
          id="email"
          variant="outlined"
          label="Електрона пошта"
          type="email"
          value={email}
          placeholder="Електрона пошта"
          name="email"
          onChange={handelChanche}
        />
        <TextField
          id="pasword"
          variant="outlined"
          label="Вигадайте пароль"
          //   type="password"
          type="text"
          placeholder="Повторно ведіть пароль"
          value={password}
          name="password"
          onChange={handelChanche}
        />
        <TextField
          id="repidPas"
          variant="outlined"
          label="Підтепрдіть пароль"
          //   type="password"
          type="text"
          placeholder="Повторно ведіть пароль"
          value={repidPas}
          name="repidPas"
          onChange={handelChanche}
        />
        {/* // <button type="submit">Відправити</button> */}
        <Button variant="contained" type="submit">
          Відправити
        </Button>
      </Box>

      {/* <form onSubmit={handelSubmit} className={css.form}>
        <label>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Імʼя"
            onChange={handelChanche}
          />
        </label>
        <label>
          <input
            type="email"
            value={email}
            placeholder="Електрона пошта"
            name="email"
            onChange={handelChanche}
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Пароль"
            onChange={handelChanche}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Повторно ведіть пароль"
            value={repidPas}
            name="repidPas"
            onChange={handelChanche}
          />
        </label>

        <button type="submit">Зареєструватися</button>
      </form> */}
    </div>
  );
}
