import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { dataToken } from 'redux/selector';

export default function PrivatRouts() {
  const token = useSelector(dataToken);
  return token ? <Outlet /> : <Navigate to="/authorization" />;
}
