import React from 'react';
import { Form } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { Contacts } from '../../components/Contacts/Contacts';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCurrent } from 'redux/auth/auth-operation';

export default function ContactsPage() {
  // const { contacts } = useSelector(state => state.contacts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     return;
  //   }
  //   dispatch(getCurrent());
  // }, [dispatch, contacts]);
  return (
    <>
      <Form />

      <Filter />
      <Contacts />
    </>
  );
}
