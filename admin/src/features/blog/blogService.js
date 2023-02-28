import axios from 'axios'
import { base_url } from '../../utils/baseUrl'

const allBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`)

  return response.data
}

const blogService = {
  allBlogs,
}

export default blogService