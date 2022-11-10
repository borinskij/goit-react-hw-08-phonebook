// import { TextField } from '@mui/material';
// import { Box } from '@mui/system';
import { setRegisration } from 'helpers/api';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    dispatch(setRegisration(userData));
  };

  return (
    <div>
      <form onSubmit={handelSubmit} className={css.form}>
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

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

//   <Box
//     onSubmit={handelSubmit}
//     component="form"
//     sx={{
//       '& > :not(style)': { m: 1, width: '25ch' },
//     }}
//     noValidate
//     autoComplete="off"
//   >
//     {/* <form className={css.form} onSubmit={handelSubmit}> */}
//     <TextField
//       id="name"
//       label="Імʼя"
//       variant="standard"
//       type="text"
//       //   value={name}
//       name="name"
//     />
//     <TextField
//       id="email"
//       label="Електрона пошта"
//       variant="filled"
//       type="email"
//        value={email}
//       name="email"
//     />
//     <TextField
//       id="pasword"
//       label="Вигадайте пароль"
//       variant="outlined"
//       type="pasword"
//       value={pasword}
//       name="pasword"
//     />
//     <TextField
//       id="repidPas"
//       label="Підтвпрдіть пароль"
//       variant="standard"
//       type="pasword"
//       value={repidPas}
//       name="repidPas"
//     />

//     <button type="submit">Відправити</button>
//     {/* </form> */}
//   </Box>;
