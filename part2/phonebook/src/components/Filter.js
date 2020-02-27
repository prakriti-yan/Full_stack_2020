import React from 'react'

const Filter = (props) =>{
	const { newFilter, handleFilterChange } = props
	return(
		<form className='font container'>
			<div className='form-group'>
				<label>Filter shown with</label>
				<input value = {newFilter} onChange = {handleFilterChange}/>
			</div>
		</form>
	)
}

export default Filter

