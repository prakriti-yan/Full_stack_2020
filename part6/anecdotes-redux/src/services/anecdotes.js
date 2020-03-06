import axios from 'axios'

const baseUrl = 'http://localhost:3003/anecdotes'

const getAll = async () => {
    try{
        const response = await axios.get(baseUrl)
        console.log(response.data)
        return response.data
    }catch(exception){
        console.log(exception.message)
    }
}

const createNew = async (content) => {
    try {
      console.log(content)
      const response = await axios.post(baseUrl, { content: content, votes: 0 })      
      return response.data
    } catch (exception) {
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

export default { 
    getAll, 
    createNew, 
    updateVotes }