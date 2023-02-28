import axios from 'axios'
import { base_url } from '../../utils/baseUrl'

const allEnquiries = async () => {
  const response = await axios.get(`${base_url}enquiry/`)

  return response.data
}

const enquiryService = {
  allEnquiries,
}

export default enquiryService