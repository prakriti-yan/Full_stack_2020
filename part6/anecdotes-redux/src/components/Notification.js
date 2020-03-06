import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: props.message? '' : 'none'
  }
  return (
    <div style={style}>
      {props.message}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    message: state.message
  }
}

export default connect(
  mapStateToProps
)(Notification)