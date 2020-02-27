import React from 'react'
import Print from './Print'
import '../global.css'
// im/port personService from '../services/number'

const Persons =(props) =>{
	const { filteredPerson, handleClick  }=props
	
	const rows=() => filteredPerson.map(parts =>
		<Print 
			key = {parts.name} 
			parts={parts} 
			handleClick={handleClick(parts.id, parts.name)}/>)
	return(
		<div>
			<h2 className='header'>Numbers</h2>
			{rows()}
		</div>  )
}

export default Persons