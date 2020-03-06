import React from 'react';
import { add } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AddForm = (props) => {
    
  const addAnec = async(event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.value = ''
      const newAnec = await anecdoteService.createNew(content)
      props.add(newAnec)
      props.setMessage(`"${content}" has been created!`)
      setTimeout( ()=> props.setMessage(''), 5000)
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

  // const mapStateToProps = (state) => {
  //   console.log(state)
  //   return {
  //     anecdotes: state.anecdotes,
  //     filter: state.filter
  //   }
  // }
  
  const mapDispatchToProps = {
    setMessage, 
    add
  }


export default connect(
  null,
  mapDispatchToProps
)(AddForm)