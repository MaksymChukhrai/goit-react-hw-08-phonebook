import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { setFilter } from '../../redux/filtersSlice'; 

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    console.log("Filter value changed:", value);
    dispatch(setFilter(value)); // Відправка дії setFilter при зміні значення фільтру
  };

  return (
  
    <input className='filter_input'
      type="text"
      placeholder="Filter contacts"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};



export default Filter;