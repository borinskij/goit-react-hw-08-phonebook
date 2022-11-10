import Header from 'components/Header/Header';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
