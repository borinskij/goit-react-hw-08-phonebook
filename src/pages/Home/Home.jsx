import React from 'react';
import css from './Home.module.css';

export default function Home() {
  return (
    <div
      className={css.home}
      style={{
        backgroundImage: `url(https://kampot.org.ua/uploads/posts/1406196722_angel.jpg)`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      g
    </div>
  );
}
