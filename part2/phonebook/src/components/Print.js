import React from 'react';

const Print =(props)=>{
	const { parts } = props;
	return (
	<p>{parts.name} {parts.number}</p>
	)   
  }

export default Print;