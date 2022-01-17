 
import axios from 'axios'
const baseUrl= 'https://udlaverso.herokuapp.com/auth/login'
const login = async (credentials) =>{
    console.log(baseUrl,credentials)
    const{data} =await axios.post(baseUrl,credentials)
    return data
}
export default {login}