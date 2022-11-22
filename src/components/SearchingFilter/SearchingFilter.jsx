import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './SearchingFilter.styled';

export const SearchingFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value.trim()));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};
