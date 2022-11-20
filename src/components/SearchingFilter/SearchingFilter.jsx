import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import { FilterLabel, FilterInput } from './SearchingFilter.styled';

export const SearchingFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};
