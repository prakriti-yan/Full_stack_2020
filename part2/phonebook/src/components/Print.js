import React from 'react';

const Print =(props)=>{
	const { parts, handleClick } = props;
	return (
		<p>
			{parts.name} {parts.number} 
			<button onClick= {handleClick}>Delete</button>
		</p>		
	)   
  }

export default Print;