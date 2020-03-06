// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }


// const initialState = anecdotesAtStart.map(asObject)
import anecdoteService from '../services/anecdotes'

export const vote = id => {
  return {
    type: 'VOTE',
    data: id
  }
}

export const add = (data) => {
  return {
    type: 'ADD',
    data,
  }
}

// export const add = content => {
//   return async dispatch => {
//     const anecdote = await anecdoteService.createNew(content)
//     dispatch({
//       type: 'ADD',
//       data: anecdote
//     })
//   }
// }

export const initAnecdotes = (anecdotes) => {
  console.log(anecdotes)
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

const anecReducer = (state = [], action) => {
  switch(action.type){
  case 'VOTE':
    const anecdote = state.find(a => a.id === action.data)
    console.log(action)
    const updatedAne = {...anecdote, votes: anecdote.votes + 1}
    const updatedState = state.map(e => e.id !== action.data ? e : updatedAne)
    return updatedState.sort((a, b) => b.votes - a.votes)
  case 'ADD':
    console.log(action.data)
    state = [...state, action.data]
    return state
  case 'INIT_ANECDOTES':
    console.log('hello')
    return state= action.data
  default:
    return state
  }
  
}

export default anecReducer