import axios from 'axios'
const  apiUrl = "http://localhost:3000";
// axios.defaults.withCredentials = true;

const apiBaseUrl = 'https://graph.instagram.com';
const ApiService={

    SignupPage(payload){
     return axios.post(`${apiUrl}/api/v1/user/signup`,payload)
    },
    SigninPage(payload){
        return axios.post(`${apiUrl}/api/v1/user/signin`,payload)
    },
    forgotpassword(payload){
        return axios.post(`${apiUrl}/api/v1/user/forgotpassword`,payload)
    },
    Resetpassword(payload){
        return axios.post(`${apiUrl}/api/v1/user/resetpassword`,payload)
    },
    CreateSchedule(payload){
        return axios.post(`${apiUrl}/api/v1/schedule/createschedule`,payload)
    },
    getSheduledata(){
        return axios.get(`${apiUrl}/api/v1/schedule/getall`)
    },
    getdatafrominstagram(){
        return axios.get(`${apiBaseUrl}/me/media`, {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`
            }
          })
    }
    

}
export default ApiService;
