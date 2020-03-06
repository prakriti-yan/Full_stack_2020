import anecdoteService from '../services/anecdotes'

export const vote = anecdote => {
  return async dispatch => {
    const newAnec = await anecdoteService.updateVotes(anecdote)
    dispatch({
      type: 'VOTE',
      data: newAnec
    })
  }
}

export const add = (content) => {
  return async dispatch => {
    const data = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD',
      data,
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecReducer = (state = [], action) => {
  switch(action.type){
  case 'VOTE':
    const updatedAne = action.data
    const updatedState = state.map(e => e.id !== action.data.id ? e : updatedAne)
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