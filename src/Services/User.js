import AxiosService from '../Services/Axios';
const axios = new AxiosService()

export default {
    userRegister(data) {
        return axios.postData("/auth/register", data)
    }
}