import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { dataToken } from 'redux/selector';

export default function PublicRouts() {
  const token = useSelector(dataToken);
  return token ? <Navigate to="/contactsPage" /> : <Outlet />;
}
