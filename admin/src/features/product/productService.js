import axios from 'axios'
import { base_url } from '../../utils/baseUrl'

const allProducts = async () => {
  const response = await axios.get(`${base_url}product/`)

  return response.data
}

const productService = {
  allProducts,
}

export default productService