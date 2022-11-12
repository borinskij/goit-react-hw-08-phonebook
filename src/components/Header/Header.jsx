import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { GiBookCover } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dataToken } from 'redux/selector';
import css from './Header.module.css';

export default function Header() {
  const token = useSelector(dataToken);
  return (
    <div className={css.body}>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <NavLink to="/">
            <GiBookCover style={{ fontSize: 60, color: '778899' }} />
          </NavLink>
          <div className={css.four}>
            <h1>Книга контактів</h1>
          </div>
          {token ? (
            <UserMenu />
          ) : (
            <ul className={css.header_list}>
              <li>
                <NavLink
                  to="/registration"
                  className={css.item + ' ' + css.btn}
                >
                  Реєстрація
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/authorization"
                  className={css.item + ' ' + css.btn}
                >
                  Авторизація
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
}
