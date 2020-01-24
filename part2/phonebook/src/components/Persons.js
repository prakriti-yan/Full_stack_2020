import React from 'react';
import Print from './Print'

const Persons =(props) =>{
	const { filteredPerson }=props;
	const rows=() => filteredPerson.map(parts =>
	  <Print key = {parts.name} parts={parts} />)
	return(
	  <>
		{rows()}
	  </>  )
  }

  export default Persons;