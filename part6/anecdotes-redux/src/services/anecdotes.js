import axios from 'axios'

const baseUrl = 'http://localhost:3005/anecdotes'

const getAll = async () => {
    try{
        const response = await axios.get(baseUrl)
        return response.data
    }catch(exception){
        console.log(exception.message)
    }
}

const updateVotes = async (anecdote) => {
    const anec = {
        ...anecdote,
        votes: anecdote.votes + 1
    }
    try{
    const updatedAnec = await axios.put(`${baseUrl}/${anecdote.id}`, anec)
    return updatedAnec.data
    } catch(exception){
        console.log(exception.message)
    }
}

export default { getAll, updateVotes }