import axios from 'axios'

const baseUrl = 'https://customerrest.herokuapp.com/api/customers/'
const config = {headers: {'Content-Type': 'application/json'}}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async customer => {
  const response = await axios.post(baseUrl, customer, config)
  return response.data
}

const update = async customer => {
  const response = await axios.put(customer.links.find(l => l.rel === "self").href, customer, config)
  return response.data
}

const remove = async customer => {
  const response = await axios.delete(customer.links.find(l => l.rel === "self").href)
  return response.data
}

export default { getAll, create, update, remove }