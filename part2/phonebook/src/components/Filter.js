import React from 'react';

const Filter = (props) =>{
  const { newFilter, handleFilterChange } = props;
  return(
    <form>
        <div>
          filter shown with<input value = {newFilter} onChange = {handleFilterChange}/>
        </div>
    </form>
  )
}

export default Filter;

