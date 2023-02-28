import axios from 'axios'
import { base_url } from '../../utils/baseUrl'

const allProductCategories = async () => {
  const response = await axios.get(`${base_url}category/`)

  return response.data
}

const productCategoryService = {
  allProductCategories,
}

export default productCategoryService