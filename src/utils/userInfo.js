import axios from "axios"
import { API_URL, API_VERSION, BASE_URL } from "../constants/environment"

const getUserInfo = async (token) => {
    const userInfo = await axios.get(BASE_URL + API_URL + API_VERSION + '/admin/user-info', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return userInfo.data
}
export default getUserInfo