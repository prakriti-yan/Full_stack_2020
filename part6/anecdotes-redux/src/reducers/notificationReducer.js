export const setMessage = (message, sec) => {
    return dispatch => {
        const miliSec = sec * 1000
        dispatch({
            type: 'SET_MESSAGE',
            message
        })
        message = ''
        setTimeout(() => {
            dispatch({
                type: 'SET_MESSAGE',
                message
            })
        }, miliSec)
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