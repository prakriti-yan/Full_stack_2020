import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState().anecdotes
    const filter = store.getState().filter
    const filteredAnecdotes = 
    anecdotes.filter(a=> a.content.toUpperCase().includes(filter.toUpperCase()))
    
    const addVote = (id, content) => {
      store.dispatch(vote(id))
      store.dispatch(setMessage(`You voted '${content}'`))
      setTimeout( ()=> store.dispatch(setMessage('')), 5000)
    } 
    return (
      <div>
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} vote
            <button onClick={() => addVote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
      </div>
    )
  }

export default AnecdoteList