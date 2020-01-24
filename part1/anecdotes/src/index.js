import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

const Display =(props) =>{
    return (
        <h1>{props.text}</h1>
    )
}

const Button =(props)=>{
	return(
		<button onClick = {props.handleClick}>
			{props.text}
		</button>
	)
}

const Vote =(props)=>{
	return(
		<p>
		has {props.voteCount} votes
		</p>
	)
}

const App =(props)=>{
	const [selected, setSelected] = useState(0);
	const [points, setPoints] = useState(new Array(6).fill(0));
	const [mostVoted, setMostVoted] = useState(0);
	const randomNumber=()=>{
		let number = Math.floor(Math.random()*anecdotes.length);
		number === selected? randomNumber() : setSelected(number);
	}

	const updateVote =()=>{
		const copy = [...points];
		copy[selected]++;
		setPoints(copy);
		setMostVoted(copy.indexOf(Math.max(...copy)));
	}

	return (
		<div>
			<Display text='Anecdote of the day'/>
			{props.anecdotes[selected]}
			<br/>
			<Vote voteCount={points[selected]} />
			<Button handleClick={updateVote} text='vote'/>
			<Button handleClick={randomNumber} text='next anecdote'/>
			<Display text='Anecdote with most votes'/>
			{props.anecdotes[mostVoted]}
			<Vote voteCount={points[mostVoted]} />
		</div>
	)
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
