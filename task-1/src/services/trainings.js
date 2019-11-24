import axios from 'axios'

const baseUrl = 'https://customerrest.herokuapp.com/api/trainings/'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }