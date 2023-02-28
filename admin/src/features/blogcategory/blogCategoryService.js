import axios from 'axios'
import { base_url } from '../../utils/baseUrl'

const allBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogcategory/`)

  return response.data
}

const productBlogService = {
  allBlogCategories,
}

export default productBlogService