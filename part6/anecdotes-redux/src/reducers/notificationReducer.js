
export const setMessage = message => {
    return {
        type: 'SET_MESSAGE',
        message,
    }
}
const noticeReducer = (state = '', action) => {
    switch(action.type){
        case 'SET_MESSAGE':
            return action.message
        default:
            return state
    }
}

export default noticeReducer