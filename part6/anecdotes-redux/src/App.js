import React from 'react';
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {  
  return (
    <div>
      <h2>Anecdote</h2>
      <Notification store={props.store} />
      <Filter store={props.store} />
      <AddForm store={props.store}/>
      <AnecdoteList store = {props.store}/>
    </div>
  )
}

export default App