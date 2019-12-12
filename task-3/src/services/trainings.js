import axios from 'axios'

const baseUrl = 'https://customerrest.herokuapp.com/api/trainings/'
const config = {headers: {'Content-Type': 'application/json'}}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async training => {
  const response = await axios.post(baseUrl, training, config)
  return response.data
}

const update = async training => {
  const response = await axios.put(training.links.find(l => l.rel === "self").href, training, config)
  return response.data
}

const remove = async training=> {
  const response = await axios.delete(training.links.find(l => l.rel === "self").href)
  return response.data
}

export default { getAll, create, update, remove }