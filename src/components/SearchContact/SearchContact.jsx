import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/slices/filterSlice';

export const SearchContact = () => {
  const filter = useSelector(getFilter);
  console.log(filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    console.log(e.target.value);
    dispatch(changeFilter(e.target.value));
  };
  return (
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={e => handleChange(e)}
      value={filter}
      required
    />
  );
};