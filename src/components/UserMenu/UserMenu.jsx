import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operation';
import { dataEmail } from 'redux/selector';

export default function UserMenu() {
  const email = useSelector(dataEmail);
  const dispatch = useDispatch();

  const handelClick = e => {
    dispatch(logout());
  };

  return (
    <div>
      <NavLink to="/contactsPage">Список контактів</NavLink>
      <p>{email}</p>
      <Button variant="contained" onClick={handelClick}>
        Вихід
      </Button>
    </div>
  );
}
