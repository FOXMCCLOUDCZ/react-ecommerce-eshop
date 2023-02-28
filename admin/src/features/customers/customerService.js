import axios from 'axios'
import { base_url } from '../../utils/baseUrl'

const allUsers = async () => {
  const response = await axios.get(`${base_url}user/all-users`)

  return response.data
}

const customerService = {
  allUsers,
}

export default customerService