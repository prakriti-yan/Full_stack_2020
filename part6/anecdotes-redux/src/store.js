import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import anecReducer from './reducers/anecdoteReducer'
import noticeReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: anecReducer,
    message: noticeReducer,
    filter: filterReducer
  })

const store = createStore(reducer, applyMiddleware(thunk))

export default store