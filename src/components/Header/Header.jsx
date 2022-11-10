import React from 'react';
import { GiBookCover } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
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

          {/* <div className={css.stage}>
            <button className={css.btn}>Hover me</button>
          </div> */}
          <ul className={css.header_list}>
            <li>
              <NavLink to="/registration" className={css.item + ' ' + css.btn}>
                Реєстрація
              </NavLink>
            </li>
            <li>
              <NavLink className={css.item + ' ' + css.btn}>
                Авторизація
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
