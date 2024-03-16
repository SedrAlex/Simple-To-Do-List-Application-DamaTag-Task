import authApi from "../api/authApi"


const authUtils = {
    isAuthenticated : async()=>{
        const token = localStorage.getItem('token')
        return !!token;

    }

}
export default authUtils;

