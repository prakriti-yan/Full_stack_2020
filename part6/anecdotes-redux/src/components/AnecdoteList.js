import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {      
  const addVote = (anecdote) => {
      props.vote(anecdote)
      props.setMessage(`You voted '${anecdote.content}'`, 5)
    } 
    return (
      <>
      {props.filtered.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} vote
            <button onClick={() => addVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </>
    )
  }

const filterAnec = ({ anecdotes, filter }) => {
  return anecdotes.filter(a=> a.content.toUpperCase().includes(filter.toUpperCase()))
}

const mapStateToProps = (state) => {
  return {
    filtered: filterAnec(state)
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