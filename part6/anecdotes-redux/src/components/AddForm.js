import React from 'react';
import { add } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AddForm = ({ store }) => {
    const addAnec = (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      store.dispatch(add(content))
      store.dispatch(setMessage(`"${content}" has been created!`))
      setTimeout( ()=> store.dispatch(setMessage('')), 5000)
    }

    return (
    <div>
      <h3>create new</h3>
      <form onSubmit={addAnec}>
        <div><input name = 'anecdote'/></div>
        <button>create</button>
      </form>
    </div>)
  }

export default AddForm