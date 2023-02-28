import axios from 'axios'
import { base_url } from '../../utils/baseUrl'

const allBrands = async () => {
  const response = await axios.get(`${base_url}brand/`)

  return response.data
}

const brandService = {
  allBrands,
}

export default brandService