import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {    
    const addVote = (id, content) => {
      props.vote(id)
      props.setMessage(`You voted '${content}'`)
      setTimeout( ()=> props.setMessage(''), 5000)
    } 
    return (
      <div>
      {props.filteredAnecdotes.map(anecdote =>
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

const filterAnec = ({ anecdotes, filter }) => {
  return anecdotes.filter(a=> a.content.toUpperCase().includes(filter.toUpperCase()))
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    filteredAnecdotes: filterAnec(state)
  }
}

const mapDispatchToProps = {
  setMessage, 
  vote
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)