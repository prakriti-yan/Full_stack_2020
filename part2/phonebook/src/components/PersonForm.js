import React from 'react'

const PersonForm = (props) =>{
	const { addNumber, newName, newNumber, handleNameChange, handleNumberChange} = props
	return(
		<div>
			<h2 className='header'>Add a new</h2>
			<br/>
			<form onSubmit={addNumber} className='font'>
				<div className='form-group'>
					<label>name: </label>
					<input value = {newName} onChange= {handleNameChange}/>
					<br/>
					<label>number: </label>
					<input value = {newNumber} onChange = {handleNumberChange}/>
				</div>
				<div className='addbuttonDiv'>
					<button type="submit" className='addButton'>add</button>
				</div>
			</form>
		</div>
	)
}

export default PersonForm