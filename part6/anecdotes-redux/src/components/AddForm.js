import React from 'react';
import { add } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AddForm = (props) => {
    
  const addAnec = async(event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      props.add(content)
      props.setMessage(`"${content}" has been created!`, 5)
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

  const mapDispatchToProps = {
    setMessage, 
    add
  }


export default connect(
  null,
  mapDispatchToProps
)(AddForm)