import React from 'react'

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: store.getState().message? '' : 'none'
  }
  console.log(store.getState())
  return (
    <div style={style}>
      {store.getState().message}
    </div>
  )
}

export default Notification