import React from 'react'
import Print from './Print'
// im/port personService from '../services/number'

const Persons =(props) =>{
	const { filteredPerson, handleClick  }=props
	
	const rows=() => filteredPerson.map(parts =>
		<Print 
			key = {parts.name} 
			parts={parts} 
			handleClick={handleClick(parts.id, parts.name)}/>)
	return(
		<>
			{rows()}
		</>  )
}

export default Persons